import * as cheerio from "cheerio";
import type { Element } from "domhandler";

export interface TocItem {
  text: string;
  id: string;
  name: string;
  url: string;
}

export const extractToc = (
  bodies: { body: string }[],
  baseUrl: string,
  draftKey?: string,
): TocItem[] => {
  return bodies.flatMap((body, index) => {
    const $ = cheerio.load(body.body);
    const page = index + 1;

    return $("h2, h3, h4")
      .toArray()
      .map((el: Element) => {
        const id = el.attribs.id || "";

        return {
          text: $(el).text(),
          id: id,
          name: el.name,
          url:
            (page === 1 ? `${baseUrl}` : `${baseUrl}/${page}`) +
            (draftKey ? `?key=${draftKey}` : "") +
            `#${id}`,
        };
      });
  });
};
