export type Category = {
    id: number;
    name: string;
    description: string;
};

export type CreateCategoryDto = {
    name: string;
    description: string;
};