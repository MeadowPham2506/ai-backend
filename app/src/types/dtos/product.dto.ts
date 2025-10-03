// Request DTOs
export interface CreateProductDto {
    name: string;
    unit: string;
    origin: string;
    note?: string;
    is_active?: boolean;
}

export interface UpdateProductDto {
    name?: string;
    unit?: string;
    origin?: string;
    note?: string;
    is_active?: boolean;
}

export interface GetProductsQueryDto {
    page?: string | number;
    limit?: string | number;
    search?: string;
    is_active?: string | boolean;
}

// Response DTOs
export interface ProductResponseDto {
    id: number;
    name: string;
    unit: string;
    origin: string;
    note: string | null;
    is_active: boolean;
}

export interface ProductListResponseDto {
    products: ProductResponseDto[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}