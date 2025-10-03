import UserRepository from '@src/repositories/user.repository';
import { 
    CreateUserDto, 
    UpdateUserDto, 
    GetUsersQueryDto, 
    UserResponseDto 
} from '@src/types/dtos';
import { APIErrorResponse } from '@src/core/response.core';

export default class UserService {
    static async getUsers(query: GetUsersQueryDto) {
        return await UserRepository.findAll(query);
    }

    static async getUserById(id: number): Promise<UserResponseDto | null> {
        if (isNaN(id) || id <= 0) {
            throw new APIErrorResponse('Invalid user ID', 400);
        }
        
        return await UserRepository.findById(id);
    }

    static async createUser(userData: CreateUserDto): Promise<UserResponseDto> {
        // Validate required fields
        if (!userData.name || userData.name.trim() === '') {
            throw new APIErrorResponse('User name is required', 400);
        }

        // Check if user with same name already exists
        const existingUser = await UserRepository.findByName(userData.name.trim());
        if (existingUser) {
            throw new APIErrorResponse('User with this name already exists', 409);
        }

        return await UserRepository.create({
            name: userData.name.trim()
        });
    }

    static async updateUser(id: number, updateData: UpdateUserDto): Promise<UserResponseDto | null> {
        if (isNaN(id) || id <= 0) {
            throw new APIErrorResponse('Invalid user ID', 400);
        }

        // Check if user exists
        const existingUser = await UserRepository.findById(id);
        if (!existingUser) {
            return null;
        }

        // Validate name if provided
        if (updateData.name !== undefined) {
            if (!updateData.name || updateData.name.trim() === '') {
                throw new APIErrorResponse('User name cannot be empty', 400);
            }

            // Check if another user with same name already exists
            const userWithSameName = await UserRepository.findByName(updateData.name.trim());
            if (userWithSameName && userWithSameName.id !== id) {
                throw new APIErrorResponse('User with this name already exists', 409);
            }

            updateData.name = updateData.name.trim();
        }

        return await UserRepository.update(id, updateData);
    }

    static async deleteUser(id: number): Promise<boolean> {
        if (isNaN(id) || id <= 0) {
            throw new APIErrorResponse('Invalid user ID', 400);
        }

        // Check if user exists
        const existingUser = await UserRepository.findById(id);
        if (!existingUser) {
            return false;
        }

        // Check if user has orders
        if (existingUser.orders && existingUser.orders.length > 0) {
            throw new APIErrorResponse('Cannot delete user with existing orders', 400);
        }

        return await UserRepository.delete(id);
    }
}