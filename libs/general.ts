import { client } from './common';

export type Page = {
    id: string;
    slug: string;
    title: string;
    body: string;   
}

// ブログ一覧を取得
export const getGeneralPages = async () => {
    const pages = await client.getList<Page>({
    endpoint: "pages"
    });
    return pages;
}

// ページ情報を取得
export const getGeneralPage = async (contentId: string) => {
    const page = await client.getListDetail<Page>({
        endpoint: "pages",
        contentId
    });
    return page;
};
