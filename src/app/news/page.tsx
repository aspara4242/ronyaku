import Link from "next/link";
import { getNewsList } from "@libs/news";

export default async function StaticPage() {
    const contents  = await getNewsList();
  
    if (!contents) {
      return <h1>No Contents</h1>;
    }
  
    return (
      <>
        <div>
            <ul>
                {contents.map((blog) => (
                <li key={blog.id}>
                    <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                </li>
                ))}
            </ul>
        </div>
      </>
    );
  }

