import { MainLayout } from "../components/MainLayout";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState<any>([
    { id: 1, description: "post 1" },
    { id: 2, description: "post 2" },
  ]);

  return (
    <MainLayout title="Посты">
      <h1>Страница постов</h1>
      <ul>
        {posts.map(post =>
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>
              <a>{post.description}</a>
            </Link>
          </li>
        )}
      </ul>
    </MainLayout>
  );
}
