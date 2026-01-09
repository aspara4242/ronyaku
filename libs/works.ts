import { client } from "./client";

export type Works = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  body: string;
  date: string;
  ogp_image: {
    url: string;
  };
};

export async function getWorksList(): Promise<Works[]> {
  const data = await client.get({
    endpoint: "works",
    queries: {
      fields: "id,slug,title,subtitle,date",
      limit: 100,
      orders: "-date",
    },
  });
  return data.contents;
}

export async function getWorksDetail(slug: string): Promise<Works> {
  const data = await client.getList<Works>({
    endpoint: "works",
    queries: {
      filters: `slug[equals]${slug}`,
      limit: 1,
    },
  });
  return data.contents[0];
}

export async function getWorksDraft(id: string, key: string): Promise<Works> {
  const data = await client.getListDetail<Works>({
    endpoint: "works",
    contentId: id,
    queries: {
      draftKey: key,
    },
  });
  return data;
}
