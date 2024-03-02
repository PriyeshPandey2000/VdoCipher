import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";



export default function Home() {
  return (
    <div className="text-black bg-white">
     
      <Head>
        <title>VdoCipher</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Main />
      
    </div>
  );
}
