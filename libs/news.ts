import { client } from './client';

export type News = {
    id: string;
    slug: string;
    title: string;
    body: string;
    publication_date: string;
    category: string;
}

export async function getNewsList(): Promise<News[]> {
    const now = new Date().toISOString();

    const filters =
        `publication_date[less_than]${now}[and]` + 
        `publication_end_date[greater_than]${now}`;

    const data = await client.get({
        endpoint: 'news',
        queries: {
            filters: filters,
            limit: 5,
            orders: '-priority, -publication_date',
        },
    });
    return data.contents;
}

export async function getNewsDetail(slug: string): Promise<News> {
    const data = await client.getList<News>({
        endpoint: "news",
        queries: {
            filters: `slug[equals]${slug}`,
            limit: 1,
        }
    });
    return data.contents[0];
}