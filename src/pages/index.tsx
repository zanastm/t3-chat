import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import { customAlphabet } from "nanoid";
import { useRouter } from "next/router";
import Layout from "./components/layout";
import Footer from "./components/footer";
import Header from "./components/header";
import FullLayout from "./components/FullLayout";

const nanoid = customAlphabet("abcdefghijklmnopqrstuvqxyz0123456789", 4);

const Home: NextPage = () => {
  const router = useRouter();

  function createRoom() {
    const roomId = nanoid();

    router.push(`/rooms/${roomId}`);
  }

  return (
    <>
      <Head>
        <title>ZaNas Market</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid-container">
        {" "}
        <div className="grid-cols-2"></div>
        <FullLayout />
        <main className="container mx-auto flex flex-col items-center justify-center h-screen p-4"></main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
