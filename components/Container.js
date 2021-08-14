import { IconDots } from "@tabler/icons";
import Footer from "./Footer";
import Header from "./Header";

export default function Container({ children }) {
  return (
    <div className="dark:bg-black bg-white">
      <main className="flex flex-col justify-center space-y-4 py-7 px-4 dark:bg-black bg-white">
        <Header />
       
        {children}
        <div className="items-start mx-auto w-full max-w-3xl space-y-1 flex justify-center">
          <IconDots size={20} stroke={2} className="text-black dark:text-white" />
        </div>
        <Footer />
      </main>
    </div>
  );
}
