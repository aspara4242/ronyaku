import { client } from './client';

// 型定義
export type News = {
    id: string;
    slug: string;
    title: string;
    body: string;
    publishedAt: string;
}

// microCMSからニュースの一覧を取得
export async function getNewsList(): Promise<News[]> {
    const data = await client.get({
        endpoint: 'news',
        queries: {
            fields: 'id,slug,title',
            limit: 5,
        },
    });
    return data.contents;
}

// microCMSからニュース記事を取得
export async function getNewsDetail(slug: string): Promise<News> {
    const data = await client.getList<News>({
        endpoint: "news",
        queries: {
            filters: `slug[equals]${slug}`,
            limit: 1,
        }
    });
    console.log(slug)
    return data.contents[0] || {};
}