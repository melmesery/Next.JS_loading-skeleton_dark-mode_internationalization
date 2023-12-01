export type Item = {
    id: number;
    productCategory: string;
    name: string;
    brand: string;
    description: string;
    basePrice: number;
    inStock: boolean;
    stock: number;
    featuredImage: string;
    thumbnailImage: string;
    storageOptions: string[];
    colorOptions: string[];
    display: string;
    CPU: string;
    camera: {
        rearCamera: string;
        frontCamera: string;
    };
};

export type Items = {
    map(arg0: (item: Item) => import("react").JSX.Element): import("react").ReactNode;
    items: Item[];
};
