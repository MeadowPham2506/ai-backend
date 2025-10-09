// Re-export all DTOs
export * from './product.dto';
export * from './employee.dto';

// Common DTOs
export interface PaginationDto {
    page?: string | number;
    limit?: string | number;
}

// Re-export common types
export * from '../common/response.types';
export * from '../common/config.types';
export * from '../common/document.types';