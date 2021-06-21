/* eslint-disable react-hooks/exhaustive-deps */
import router, { useRouter } from "next/router";
import { MainLayout } from "../../components/MainLayout";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NextPageContext } from "next";
import { MyPost } from "../../interfaces/post";

interface PostPageProps {
  post: MyPost
}

export default function Post({ post: serverPost }: PostPageProps) {
  const router = useRouter();
  const [post, setPost] = useState<any>();
  // console.log(serverPost, post);

  useEffect(() => {
    async function load() {
      const response = await fetch(
        `${process.env.API_URL}/posts/${router.query.id}`
      );
      const data = await response.json();
      setPost(data);
    }
    if (!serverPost) {
      load();
    }
  }, []);

  if (!post) {
    return (
      <MainLayout title={"Загрузка..."}>
        <p>Загрузка...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout title={`${post.title}`}>
      <Link href="/posts">
        <a>Назад к постам</a>
      </Link>
      <h1>{post.title}</h1>
      <hr />
      <p>{post.body}</p>
    </MainLayout>
  );
}

// Post.getInitialProps = async ({query, req}) => {
//   // request существует и выполняется в первую очередь на сервере при первоначальном рендеринге.
//   // но, если сайт уже загружен и происходит переход на новую страницу, этот метод (getInitialProps) будет вызываться на фронте
//   // соответственно объекта реквеста уже не будет
//   if (!req) {
//     return { post: null };
//   }
//   const response = await fetch(`http://localhost:4200/posts/${query.id}`);
//   const post = await response.json();

//   return {
//     post,
//   };
// };

// Более современный вариант

interface PostNextPageContext extends NextPageContext {
  query: {
    id: string;
  };
}

export async function getServerSideProps({ query, req }: PostNextPageContext) {
  // эта функция ВСЕГДА вызывается на серверной части

  const res = await fetch(`${process.env.API_URL}/posts/${query.id}`);
  const data: MyPost = await res.json();

  return {
    props: { data },
  };
}
