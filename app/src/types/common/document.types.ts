export interface Document {
    id: number;
}

export interface ProductDocument extends Document {
    name: string;
    unit: string;
    origin: string;
    note: string | null;
    is_active: boolean;
}