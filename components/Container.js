import { IconDots } from "@tabler/icons";
import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Container({ children }) {
  const router = useRouter();

  return (
    <div className="dark:bg-black bg-white relative">
      <Head>
        <link rel="canonical" href={`https://phong.vn${router.asPath}`} />
      </Head>
      <main className="flex flex-col justify-center space-y-4 py-7 px-4 dark:bg-black bg-white">
        <Header />

        {children}
        <div className="items-start mx-auto w-full max-w-3xl space-y-1 flex justify-center">
          <IconDots
            size={20}
            stroke={2}
            className="text-black dark:text-white"
          />
        </div>
        <Footer />
      </main>
    </div>
  );
}
