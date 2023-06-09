import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import { formatRelative } from "date-fns";
import React from "react";
const inter = Inter({ subsets: ["latin"] });
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch("https://fakestoreapi.com/users");
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data, timeOfLoad: new Date().toISOString() } };
}
const Home = ({
  data,
  timeOfLoad,
}: {
  data: Array<{
    id: number;
    name: { firstname: string; lastname: string };
    email: string;
    phone: string;
    address: { city: string };
  }>;
  timeOfLoad: string;
}) => {
  const relativeTimeOfLoad = formatRelative(Date.parse(timeOfLoad), new Date());
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="mx-auto  w-3/4 my-16">
          <div className="my-8">
            <h2 className="text-6xl text-center">
              Contacts from Server Side Rendering{" "}
            </h2>
            <p className="text-center">{relativeTimeOfLoad}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {data.map((dt) => (
              <div
                key={dt.id}
                className="border-2 shadow-sm border-gray-200 rounded px-6 py-4 space-y-2"
              >
                <h3 className="text-2xl text-gray-800 capitalize">
                  {" "}
                  {dt.name.firstname} {dt.name.lastname}
                </h3>
                <p className="my-4 text-lg text-gray-800"> {dt.email}</p>
                <p className="my-4 text-md text-gray-800"> {dt.phone}</p>
                <p className="my-4 text-sm text-gray-500 uppercase">
                  {" "}
                  {dt.address.city}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;