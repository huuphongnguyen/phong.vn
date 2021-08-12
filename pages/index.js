import Container from "../components/Container";
import BlogSection from "../components/structures/BlogSection";
import ConceptsSection from "../components/structures/ConceptsSection";
import HeroSection from "../components/structures/HeroSection";
import InspirationSection from "../components/structures/InspirationSection";
import ProjectsSection from "../components/structures/ProjectsSection";
import StuffSection from "../components/structures/StuffSection";
import SubPageSection from "../components/structures/SubPageSection";
import TwitterSEO from "../components/TwitterSEO";
import ProductsSection from "../components/structures/ProductsSection";
import { Client } from "@notionhq/client";
import BlockchainSection from "../components/structures/BlockchainSection";
import TimelineSection from "../components/structures/TimelineSection";
import ProductHuntSection from "../components/structures/ProductHuntSection";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { GET_TOP_10_UPVOTES_OF_PHONG } from "../graphql/ProductHuntQuery";
import { setContext } from "apollo-link-context";
import Covid19Section from "../components/structures/Covid19Section";

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_OFFICIAL_KEYS });
  const databaseQuotesId = process.env.NOTION_PAGE_ID_QUOTES_PAGE;
  const responseQuotes = await notion.databases.query({
    database_id: databaseQuotesId,
  });

  const apiUrlOpenSea = process.env.OPENSEA_API_URL;
  const apiOptionOpenSea = { method: "GET" };
  const apiDataOpenSea = await fetch(apiUrlOpenSea, apiOptionOpenSea);
  const dataFromOpenSeaAPI = await apiDataOpenSea.json();

  const apiUrlCovid19Global = process.env.COVID_19_GLOBAL_API_URL;
  const apiOptionCovid19Global = { method: "GET" };
  const apiDataCovid19Global = await fetch(
    apiUrlCovid19Global,
    apiOptionCovid19Global
  );
  const dataFromCovid19GlobalAPI = await apiDataCovid19Global.json();

  const apiUrlCovid19Vietnam = process.env.COVID_19_VIETNAM_API_URL;
  const apiOptionCovid19Vietnam = { method: "GET" };
  const apiDataCovid19Vietnam = await fetch(
    apiUrlCovid19Vietnam,
    apiOptionCovid19Vietnam
  );
  const dataFromCovid19VietnamAPI = await apiDataCovid19Vietnam.json();

  // const apiUrlCovid19VaccineVietnam =
  //   process.env.COVID_19_VACCINE_VIETNAM_API_URL;
  // const apiOptionCovid19VaccineVietnam = { method: "GET" };
  // const apiDataCovid19VaccineVietnam = await fetch(
  //   apiUrlCovid19VaccineVietnam,
  //   apiOptionCovid19VaccineVietnam
  // );
  // const dataFromCovid19VaccineVietnamAPI =
  //   await apiDataCovid19VaccineVietnam.json();

  // const authLink = setContext((_, { headers }) => {
  //   const token = process.env.PRODUCTHUNT_TOKEN;
  //   return {
  //     headers: {
  //       ...headers,
  //       authorization: token ? `Bearer ${token}` : "",
  //     },
  //   };
  // });

  // const httpLink = createHttpLink({
  //   uri: process.env.PRODUCTHUNT_API_ENDPOINT,
  // });

  // const clientPH = new ApolloClient({
  //   link: authLink.concat(httpLink),
  //   cache: new InMemoryCache(),
  // });

  // const { data } = await clientPH.query({
  //   query: GET_TOP_10_UPVOTES_OF_PHONG,
  // });

  return {
    props: {
      resultsQuotes: responseQuotes.results,
      resultsOpenSeaAssets: dataFromOpenSeaAPI.assets,
      resultsCovid19Global: dataFromCovid19GlobalAPI,
      resultsCovid19Vietnam: dataFromCovid19VietnamAPI,
      //resultsProductHuntDatas: data.user.votedPosts.edges,
    },
  };
}

export default function Home({
  resultsQuotes,
  resultsOpenSeaAssets,
  resultsCovid19Global,
  resultsCovid19Vietnam,
  resultsProductHuntDatas,
}) {
  const seotitle = `PHONG.VN - Phong's personal website`;
  const seodescrip = `Trang cá nhân của Nguyễn Hữu Phong. Được xây dựng bằng Next.js / TailwindCSS và lưu trữ tại Vercel. Nơi chia sẻ những dự án, blog, mấy thứ hay ho của Phong`;
  const seourl = `https://phong.vn`;
  const seopreviewimg = "/static/phong-vn-feature-img.png";

  return (
    <Container>
      <TwitterSEO
        currentURL={seourl}
        previewImage={`https://phong.vn/${seopreviewimg}`}
        siteName={seotitle}
        pageTitle={seotitle}
        description={seodescrip}
      />
      <div className="items-start mx-auto w-full max-w-3xl space-y-4">
        <div className="mb-7 mt-4">
          <HeroSection />
        </div>
        <InspirationSection />
        <ProductsSection />
        <ProjectsSection />
        <BlogSection />
        {/* <ProductHuntSection data={resultsProductHuntDatas} /> */}
        <TimelineSection />
        <BlockchainSection data={resultsOpenSeaAssets} />
        <ConceptsSection />
        <Covid19Section
          dataGlobal={resultsCovid19Global}
          dataVietnam={resultsCovid19Vietnam}
        />
        <SubPageSection />
        <StuffSection resultssync={resultsQuotes} />
      </div>
    </Container>
  );
}
