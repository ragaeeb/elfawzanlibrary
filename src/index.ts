import type {
    AppPagesResponse,
    BookChaptersResponse,
    BookSectionResponse,
    BookSectionsResponse,
    ChapterSectionsResponse,
    FolderBooksResponse,
    MainCategoriesResponse,
    SectionPagesResponse,
    Stats,
    SubCategoriesResponse,
} from './types.js';

import { doGetRequest } from './api.js';

export const getMainCategories = async (): Promise<MainCategoriesResponse> => {
    return doGetRequest('Categories/get-main-categories');
};

export const getSubCategories = async (category: number): Promise<SubCategoriesResponse> => {
    return doGetRequest('Categories/get-sub-cats-by-id', { category_id: category });
};

export const getFolderBooks = async (folderId: number): Promise<FolderBooksResponse> => {
    return doGetRequest('Categories/get-folder-books', { folder_id: folderId });
};

export const getBookChapters = async (bookId: number): Promise<BookChaptersResponse> => {
    return doGetRequest('Categories/get-book-chapters', { book_id: bookId });
};

export const getBookSections = async (bookId: number): Promise<BookSectionsResponse> => {
    return doGetRequest('Categories/get-book-sections', { book_id: bookId });
};

export const getChapterSections = async (chapterId: number): Promise<ChapterSectionsResponse> => {
    return doGetRequest('Categories/get-chapter-sections', { chapter_id: chapterId });
};

export const getPreviousSectionInBook = async (
    bookId: number,
    currentSectionId: number,
): Promise<BookSectionResponse> => {
    return doGetRequest('Categories/get-prev-section', { book_id: bookId, current_section_id: currentSectionId });
};

export const getNextSectionInBook = async (bookId: number, currentSectionId: number): Promise<BookSectionResponse> => {
    return doGetRequest('Categories/get-next-section', { book_id: bookId, current_section_id: currentSectionId });
};

export const getStats = (): Promise<Stats> => {
    return doGetRequest('statistics');
};

export const getAppPages = (): Promise<AppPagesResponse> => {
    return doGetRequest('app-pages');
};

export const getSectionPages = (sectionId: number): Promise<SectionPagesResponse> => {
    return doGetRequest('Categories/get-section-pages', { section_id: sectionId });
};

export * from './types.js';
