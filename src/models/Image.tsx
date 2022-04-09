export interface Image {
    title?: string;
    url: string;
    id?: string;
    published?: string;
    updated?: string;
    author?: Author
}

interface Author {
    name: string
}