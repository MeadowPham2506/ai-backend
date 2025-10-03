import { PrismaClient, Prisma } from '@src/generated/prisma';
import { GetUsersQueryDto, UserResponseDto } from '@src/types/dtos';

export default class UserRepository {
    private static prisma = new PrismaClient();

    static async findAll(query: GetUsersQueryDto) {
        const {
            page = 1,
            limit = 10,
            search,
            sortBy = 'created_at',
            sortOrder = 'desc'
        } = query;

        const pageNum = typeof page === 'string' ? parseInt(page) : page;
        const limitNum = typeof limit === 'string' ? parseInt(limit) : limit;
        const skip = (pageNum - 1) * limitNum;

        const where: Prisma.UserWhereInput = {};
        
        if (search) {
            where.name = {
                contains: search,
                mode: 'insensitive'
            };
        }

        const orderBy: Prisma.UserOrderByWithRelationInput = {
            [sortBy]: sortOrder
        };

        const [users, total] = await Promise.all([
            this.prisma.user.findMany({
                where,
                orderBy,
                skip,
                take: limitNum,
                include: {
                    orders: {
                        include: {
                            product: {
                                select: {
                                    id: true,
                                    name: true,
                                    unit: true,
                                    origin: true
                                }
                            }
                        }
                    }
                }
            }),
            this.prisma.user.count({ where })
        ]);

        return {
            users: users as UserResponseDto[],
            pagination: {
                page: pageNum,
                limit: limitNum,
                total,
                totalPages: Math.ceil(total / limitNum)
            }
        };
    }

    static async findById(id: number): Promise<UserResponseDto | null> {
        const user = await this.prisma.user.findUnique({
            where: { id },
            include: {
                orders: {
                    include: {
                        product: {
                            select: {
                                id: true,
                                name: true,
                                unit: true,
                                origin: true
                            }
                        }
                    },
                    orderBy: {
                        created_at: 'desc'
                    }
                }
            }
        });

        return user as UserResponseDto | null;
    }

    static async create(data: Prisma.UserCreateInput): Promise<UserResponseDto> {
        const user = await this.prisma.user.create({
            data,
            include: {
                orders: true
            }
        });

        return user as UserResponseDto;
    }

    static async update(id: number, data: Prisma.UserUpdateInput): Promise<UserResponseDto | null> {
        try {
            const user = await this.prisma.user.update({
                where: { id },
                data,
                include: {
                    orders: {
                        include: {
                            product: {
                                select: {
                                    id: true,
                                    name: true,
                                    unit: true,
                                    origin: true
                                }
                            }
                        }
                    }
                }
            });

            return user as UserResponseDto;
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
                return null;
            }
            throw error;
        }
    }

    static async delete(id: number): Promise<boolean> {
        try {
            await this.prisma.user.delete({
                where: { id }
            });
            return true;
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
                return false;
            }
            throw error;
        }
    }

    // Private method for internal use (validation, etc.) - not exposed via endpoints
    static async findByName(name: string): Promise<UserResponseDto | null> {
        const user = await this.prisma.user.findFirst({
            where: {
                name: {
                    equals: name,
                    mode: 'insensitive'
                }
            },
            include: {
                orders: true
            }
        });

        return user as UserResponseDto | null;
    }
}