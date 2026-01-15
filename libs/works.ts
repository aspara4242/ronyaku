import { client } from "./client";

export type Works = {
  id: string;
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

export async function getWorksDetail(id: string): Promise<Works> {
  const data = await client.getListDetail<Works>({
    endpoint: "works",
    contentId: id,
  });
  return data;
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
