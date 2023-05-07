import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pieter-Jan Delbecke Portfolio</title>
        <meta name="description" content="created by PJD" />
        <link tel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1>develepedbypjd</h1>
            <ul>
              <li>
                <BsFillMoonStarsFill />
              </li>
              <li>
                <a href="#">Resume</a>
              </li>
            </ul>
          </nav>
        </section>
      </main>
    </div>
  );
}
