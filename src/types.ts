export type AppPagesResponse = ApiResponse & {
    data: AppPage[];
};

export type BookChaptersResponse = ApiResponse & {
    data: BookChapter[];
};

export type BookSectionResponse = ApiResponse & {
    data: ChapterSection;
};

export type BookSectionsResponse = ApiResponse & {
    data: BookSection[];
};

export type ChapterSectionsResponse = ApiResponse & {
    data: ChapterSection[];
};

export type FolderBooksResponse = ApiResponse & {
    data: FolderBook[];
};

export type MainCategoriesResponse = ApiResponse & {
    data: Category[];
};

export type SectionPagesResponse = ApiResponse & {
    data: SectionPage[];
};

export type Stats = [
    {
        bookscount: number;
        catscount: number;
        chapterscount: number;
        foldercount: number;
        pagecount: number;
        pagecount1: number;
        sectioncount: number;
    },
];

export type SubCategoriesResponse = ApiResponse & {
    data: SubCategory[];
};

type ApiResponse = {
    message: string;
    success: 0 | 1;
};

type AppPage = {
    details: string;
    details_en: null | string;
    id: number;
    image: string;
    name: string;
    name_en: null | string;
};

type BookChapter = {
    book: string;
    category: string;
    countOfSections: number;
    created_at: string;
    folder: string;
    id: number;
    name: string;
};

type BookSection = {
    book: string;
    category: string;
    countOfPages: number;
    created_at: string;
    folder: string;
    id: number;
    name: string;
};

type Category = {
    created_at: string;
    id: number;
    name: string;
};

type ChapterSection = BookSection & {
    chapter: string;
};

type FolderBook = {
    category: string;
    countOfSections: 59;
    created_at: string;
    folder: string;
    id: number;
    name: string;
};

type SectionPage = {
    book: string;
    book_id: number;
    category: string;
    chapter: string;
    created_at: string;
    explanation: string;
    folder: string;
    id: number;
    name: string;
    number: string;
    section: string;
    section_id: number;
    text: string;
};

type SubCategory = {
    countOfBooks: number;
    created_at: string;
    id: number;
    title: string;
    type: 'Book' | 'Folder';
};
