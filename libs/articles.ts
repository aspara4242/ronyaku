import { client } from "./client";

export type Articles = {
  id: string;
  title: string;
  category: string;
  tags: {
    tag: string;
  }[];
  publication_date: string;
  thumbnail: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  custom_css: string;
  bodies: {
    body: string;
  }[];
};

export async function getArticlesList(): Promise<Articles[]> {
  const data = await client.get({
    endpoint: "articles",
    queries: {
      fields: "id,title,category,tags,publication_date,thumbnail",
      limit: 100,
      orders: "-publication_date,system:default",
    },
  });
  return data.contents;
}

export async function getArticlesDetail(id: string): Promise<Articles> {
  const data = await client.getListDetail<Articles>({
    endpoint: "articles",
    contentId: id,
  });
  return data;
}

export async function getArticlesDraft(
  id: string,
  key: string,
): Promise<Articles> {
  const data = await client.getListDetail<Articles>({
    endpoint: "articles",
    contentId: id,
    queries: {
      draftKey: key,
    },
  });
  return data;
}
