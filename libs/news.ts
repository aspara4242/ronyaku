import { client } from "./client";

export type News = {
  id: string;
  title: string;
  body: string;
  publication_date: string;
  category: string;
};

export async function getNewsListForTop(): Promise<News[]> {
  const now = new Date().toISOString();

  const filters =
    `publication_date[less_than]${now}[and]` +
    `publication_end_date[greater_than]${now}`;

  const data = await client.get({
    endpoint: "news",
    queries: {
      filters: filters,
      limit: 5,
      orders: "-priority,-publication_date,-publication_end_date,system:default",
    },
  });
  return data.contents;
}

export async function getNewsList(): Promise<News[]> {
  const now = new Date().toISOString();

  const filters = `publication_date[less_than]${now}`;

  const data = await client.get({
    endpoint: "news",
    queries: {
      filters: filters,
      limit: 50,
      orders: "-publication_date,-publication_end_date,system:default",
    },
  });
  return data.contents;
}

export async function getNewsDetail(id: string): Promise<News> {
  const data = await client.getListDetail<News>({
    endpoint: "news",
    contentId: id,
  });
  return data;
}

export async function getNewsDraft(id: string, key: string): Promise<News> {
  const data = await client.getListDetail<News>({
    endpoint: "news",
    contentId: id,
    queries: {
      draftKey: key,
    },
  });
  return data;
}
