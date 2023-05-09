import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pieter-Jan Delbecke Portfolio</title>
        <meta name="description" content="created by PJD" />
        <link tel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">develepedbypjd</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <h2>Pieter-Jan Delbecke</h2>
            <h3>Developer and designer.</h3>
            <p>
              Freelancer providing services for programming and design content
              needs. Join me down below and lets get ckracking!
            </p>
          </div>
          <div>
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
        </section>
      </main>
    </div>
  );
}
