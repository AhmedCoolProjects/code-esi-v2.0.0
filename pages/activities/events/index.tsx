import { NextPage } from "next";
import Head from "next/head";

const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CODE ESI | Events</title>
      </Head>
      <div className="w-full py-5">
        <h1 className="text-center font-semibold text-3xl opacity-90">
          CODE Events
        </h1>
      </div>
    </div>
  );
};

export default Index;
