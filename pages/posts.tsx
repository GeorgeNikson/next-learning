import { MainLayout } from "../components/MainLayout";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Posts() {
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    async function load() {
      const response = await fetch("http://localhost:4200/posts");
      const json = await response.json();
      setPosts(json);
    }
    load();
  }, []);

  return (
    <MainLayout title="Посты">
      <h1>Страница постов</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>
              <a>{post.body}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
}
