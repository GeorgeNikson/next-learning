import Link from "next/link";
import Head from "next/head";
import classes from "../../styles/error.module.scss";

export default function ErrorPage() {
  return (
    <>
      <Head>
        <title>Ошибка!</title>
      </Head>
      <h1 className={classes.error}>Error 404</h1>
      <p>
        Перейти на{" "}
        <Link href="/">
          <a>главную страницу</a>
        </Link>
      </p>
    </>
  );
}
