import Router from "next/router";
import Head from "next/head";
import { MainLayout } from "../../components/MainLayout";

export default function About() {
  return (
    <MainLayout title="О нас">
      <div>
        <h1>О нас</h1>

        <button onClick={() => Router.push("/")}>Назад на главную</button>
      </div>
    </MainLayout>
  );
}
