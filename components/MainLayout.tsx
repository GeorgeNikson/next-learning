import Link from "next/link";
import Head from "next/head";

export function MainLayout({ children, title = "Next app" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <nav>
        <Link href="/">
          <a>Главная</a>
        </Link>{" "}
        <Link href="/users">
          <a>Пользователи</a>
        </Link>{" "}
        <Link href="/about">
          <a>О нас</a>
        </Link>{" "}
        <Link href="/posts">
          <a>Посты</a>
        </Link>
      </nav>
      <main>{children}</main>
      <style jsx>{`
        nav {
          position: fixed;
          height: 60px;
          left: 0;
          right: 0;
          background: darkblue;
          top: 0;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        nav a {
          text-decoration: none;
          color: #fff;
        }

        main {
          margin-top: 80px;
          padding: 1rem;
        }
      `}</style>
    </>
  );
}
