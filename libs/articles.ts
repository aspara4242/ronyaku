import { client } from './client';

export type Articles = {
    id: string;
    slug: string;
    title: string;
    category: string;
    tag: string[];
    publication_date: string;
    thumbnail:{
        url:string;
    }
    custom_css:string;
    bodies:{
        body:string;
    }[]
}

export async function getArticlesList(): Promise<Articles[]> {
    const data = await client.get({
        endpoint: 'articles',
        queries: {
            fields: 'id,slug,title,category,tag,publication_date,thumbnail',
            limit: 100,
            orders: '-publication_date',
        },
    });
    return data.contents;
}

export async function getArticlesDetail(slug: string): Promise<Articles> {
    const data = await client.getList<Articles>({
        endpoint: "articles",
        queries: {
            filters: `slug[equals]${slug}`,
            limit: 1,
        }
    });
    return data.contents[0];
}