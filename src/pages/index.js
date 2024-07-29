import Image from "next/image";

import Navbar from "../comps/navbar";
import Footer from "../comps/footer";
import app from "../app/home.css";

import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title> zeina Home</title>
      </Head>
      <div class="grow">
        <h1 className={app.title}>HomePage</h1>
        <p className={app.text}>
          Life is a quality that distinguishes matter that has biological
          processes, such as signaling and self-sustaining processes, from
          matter that does not. It is defined descriptively by the capacity for
          homeostasis, organisation, metabolism, growth, adaptation, response to
          stimuli, and reproduction
        </p>
        <p className={app.text}>
          Life is a quality that distinguishes matter that has biological
          processes, such as signaling and self-sustaining processes, from
          matter that does not. It is defined descriptively by the capacity for
          homeostasis, organisation, metabolism, growth, adaptation, response to
          stimuli, and reproduction
        </p>
        <Link href="/zeina/exam" className={app.btn}>
          See Current Exams
        </Link>
      </div>
    </>
  );
}
