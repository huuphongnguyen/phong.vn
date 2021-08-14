import "../styles/globals.css";
import "../styles/changecoin.css";
import "../styles/axcoin.css";
import "../styles/embcoin.css";
import { ThemeProvider } from "next-themes";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import NextNProgress from "nextjs-progressbar";
import ProgressBar from "../components/elements/ProcessScrollBar";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <DefaultSeo {...SEO} />
      <NextNProgress
        color="linear-gradient(
                110.78deg,
                rgb(118, 230, 80) -1.13%,
                rgb(249, 214, 73) 15.22%,
                rgb(240, 142, 53) 32.09%,
                rgb(236, 81, 87) 48.96%,
                rgb(255, 24, 189) 67.94%,
                rgb(26, 75, 255) 85.34%,
                rgb(98, 216, 249) 99.57%
          );"
        options={{ easing: "ease", speed: 500 }}
      />
      <ProgressBar height="3" bgcolor="#000" duration="0" />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
