import { client } from './client';

export type Members = {
    id: string;
    mem_id: string,
    name: string;
    rubi: string;
    skill: string[];
    carrer: string;
    activities: string;
    awards: string;
    links: {
        address: string;
        text: string;
    }[];
}

export async function getMembersList(): Promise<Members[]> {
    const data = await client.get({
        endpoint: 'members',
        queries: {
            limit: 20,
        },
    });
    return data.contents;
}