import { describe, expect, it } from 'bun:test';

import {
    getAppPages,
    getBookChapters,
    getBookSections,
    getChapterSections,
    getFolderBooks,
    getMainCategories,
    getNextSectionInBook,
    getPreviousSectionInBook,
    getSectionPages,
    getStats,
    getSubCategories,
} from './index';

describe('index', () => {
    describe('getMainCategories', () => {
        it('should get all the main categories', async () => {
            const actual = await getMainCategories();
            expect(actual).toEqual({
                data: expect.arrayContaining([
                    {
                        created_at: '2022-05-21T22:55:39.000000Z',
                        id: 12,
                        name: 'التفسير',
                    },
                ]),
                message: expect.any(String),
                success: 1,
            });
        });
    });

    describe('getSubCategories', () => {
        it('should get the subcategories', async () => {
            const actual = await getSubCategories(12);
            expect(actual).toEqual({
                data: expect.arrayContaining([
                    {
                        countOfBooks: 3,
                        created_at: '2022-06-01T21:23:39.000000Z',
                        id: 23,
                        title: 'دروس التفسير في المسجد الحرام',
                        type: 'Folder',
                    },
                ]),
                message: expect.any(String),
                success: true,
            });
        });
    });

    describe('getFolderBooks', () => {
        it('should get the folder books', async () => {
            const actual = await getFolderBooks(27);
            expect(actual).toEqual({
                data: expect.arrayContaining([
                    {
                        category: 'التفسير',
                        countOfSections: 59,
                        created_at: '2022-06-06T11:59:06.000000Z',
                        folder: 'ما تيسر وتحصل من دروس  القرآن',
                        id: 63,
                        name: 'ما تيسر وتحصل من دروس  القرآن  في حزب المفصل الجزء الأول',
                    },
                ]),
                message: expect.any(String),
                success: 1,
            });
        });
    });

    describe('getBookChapters', () => {
        it('should get the book chapters', async () => {
            const actual = await getBookChapters(58);
            expect(actual).toEqual({
                data: expect.arrayContaining([
                    {
                        book: 'دورس التفسير في المسجد الحرام الجزء الثاني',
                        category: 'التفسير',
                        countOfSections: 37,
                        created_at: '2022-06-05T07:42:08.000000Z',
                        folder: 'دروس التفسير في المسجد الحرام',
                        id: 470,
                        name: 'تفسير سورة البقرة ( هذا تابع للجزء الأول )',
                    },
                ]),
                message: expect.any(String),
                success: 1,
            });
        });
    });

    describe('getBookSections', () => {
        it('should get the book sections', async () => {
            const actual = await getBookSections(58);
            expect(actual).toEqual({
                data: expect.arrayContaining([
                    {
                        book: 'دورس التفسير في المسجد الحرام الجزء الثاني',
                        category: 'التفسير',
                        chapter: 'تفسير سورة البقرة ( هذا تابع للجزء الأول )',
                        countOfPages: 6,
                        created_at: '2022-06-05T07:49:18.000000Z',
                        folder: 'دروس التفسير في المسجد الحرام',
                        id: 2386,
                        name: 'الدرس السادس والثلاثون ( سورة البقرة )',
                    },
                ]),
                message: expect.any(String),
                success: 1,
            });
        });
    });

    describe('getStats', () => {
        it('should get the stats', async () => {
            const actual = await getStats();

            expect(actual).toEqual([
                {
                    bookscount: expect.any(Number),
                    catscount: expect.any(Number),
                    chapterscount: expect.any(Number),
                    foldercount: expect.any(Number),
                    pagecount: expect.any(Number),
                    pagecount1: expect.any(Number),
                    sectioncount: expect.any(Number),
                },
            ]);
        });
    });

    describe('getAppPages', () => {
        it('should get the app pages', async () => {
            const actual = await getAppPages();

            expect(actual).toEqual({
                data: expect.arrayContaining([
                    {
                        details: expect.any(String),
                        details_en: null,
                        id: 12,
                        image: 'https://new.daralmathoor.comhttp://elfawzanlibrary.com/Logo.png',
                        name: 'تواصل معنا',
                        name_en: null,
                    },
                ]),
                message: expect.any(String),
                success: 1,
            });
        });
    });

    describe('getChapterSections', () => {
        it('should get the chapter sections', async () => {
            const actual = await getChapterSections(425);

            expect(actual).toEqual({
                data: expect.arrayContaining([
                    {
                        book: 'البيان لأخطاء بعض الكُتَّاب الجزء الأول',
                        category: 'الآداب',
                        chapter: 'حول التَّعليم والمناهج',
                        countOfPages: 10,
                        created_at: '2022-05-29T19:15:09.000000Z',
                        folder: 'البيان لأخطاء بعض الكُتَّاب',
                        id: 1292,
                        name: 'فضل تعلُّم العِلْم وتعليمِه والرَّدُّ على بعض الأفكار المُنحرِفةِ',
                    },
                ]),
                message: expect.any(String),
                success: 1,
            });
        });
    });

    describe('getPreviousSectionInBook', () => {
        it('should get the previous section', async () => {
            const actual = await getPreviousSectionInBook(38, 1292);

            expect(actual).toEqual({
                data: {
                    book: 'البيان لأخطاء بعض الكُتَّاب الجزء الأول',
                    category: 'الآداب',
                    chapter: '',
                    countOfPages: 3,
                    created_at: '2022-05-29T19:12:28.000000Z',
                    folder: 'البيان لأخطاء بعض الكُتَّاب',
                    id: 1291,
                    name: 'المقدمة',
                },
                message: expect.any(String),
                success: 1,
            });
        });
    });

    describe('getNextSectionInBook', () => {
        it('should get the previous section', async () => {
            const actual = await getNextSectionInBook(38, 1292);

            expect(actual).toEqual({
                data: {
                    book: 'البيان لأخطاء بعض الكُتَّاب الجزء الأول',
                    category: 'الآداب',
                    chapter: 'حول التَّعليم والمناهج',
                    countOfPages: 5,
                    created_at: '2022-05-29T19:16:34.000000Z',
                    folder: 'البيان لأخطاء بعض الكُتَّاب',
                    id: 1293,
                    name: 'طريق الوُصول إلى العلمِ النَّافعِ',
                },
                message: expect.any(String),
                success: 1,
            });
        });
    });

    describe('getSectionPages', () => {
        it('should get the section pages', async () => {
            const actual = await getSectionPages(1291);

            expect(actual).toEqual({
                data: expect.arrayContaining([
                    {
                        book: 'البيان لأخطاء بعض الكُتَّاب الجزء الأول',
                        book_id: 38,
                        category: 'الآداب',
                        chapter: '',
                        created_at: '1970-01-01 03:00 AM',
                        explanation: '',
                        folder: 'البيان لأخطاء بعض الكُتَّاب',
                        id: 34616,
                        name: '',
                        number: '6',
                        section: 'المقدمة',
                        section_id: 1291,
                        text: '',
                    },
                ]),
                message: expect.any(String),
                success: 1,
            });
        });
    });
});
