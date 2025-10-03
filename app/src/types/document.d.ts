interface Document {
    id: number;
}

interface ProductDocument extends Document {
    category_id: number;
    name: string;
    unit: string;
    origin: string;
    is_active: boolean;
}