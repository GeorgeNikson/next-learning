import router, { useRouter } from "next/router";
import { MainLayout } from "../../components/MainLayout";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Post({ post: serverPost }) {
  const router = useRouter();
  const [post, setPost] = useState<any>();
  // console.log(serverPost, post);

  useEffect(() => {
    async function load() {
      const response = await fetch(
        `http://localhost:4200/posts/${router.query.id}`
      );
      const data = await response.json();
      setPost(data);
    }
    if (!serverPost){
      load();
    }
  }, []);

  if (!post) {
    return (
      <MainLayout>
        <p>Загрузка...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout title={`Пост ${router.query.id}`}>
      <Link href="/posts">
        <a>Назад к постам</a>
      </Link>
      <h1>{post.title}</h1>
      <hr />
      <p>{post.body}</p>
    </MainLayout>
  );
}

Post.getInitialProps = async (ctx) => {
  // request существует и выполняется в первую очередь на сервере при первоначальном рендеринге.
  // но, если сайт уже загружен и происходит переход на новую страницу, этот метод (getInitialProps) будет вызываться на фронте
  // соответственно объекта реквеста уже не будет 
  if (!ctx.request) {
    return { post: null };
  }
  const response = await fetch(`http://localhost:4200/posts/${ctx.query.id}`);
  const post = await response.json();

  return {
    post,
  };
};
