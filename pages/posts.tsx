import { MainLayout } from "../components/MainLayout";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MyPost } from "../interfaces/post";

interface PostsPageProps {
  posts: MyPost[]
}

export default function Posts({ posts } : PostsPageProps) {
  return (
    <MainLayout title="Посты">
      <h1>Страница постов</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
}

Posts.getInitialProps = async () => {
  const response = await fetch("http://localhost:4200/posts");
  const posts = await response.json();

  return {
    posts,
  };
};
