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

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_OFFICIAL_KEYS });

  const databaseQuotesId = process.env.NOTION_PAGE_ID_QUOTES_PAGE;

  const responseQuotes = await notion.databases.query({
    database_id: databaseQuotesId,
  });

  return {
    props: {
      resultsQuotes: responseQuotes.results,
    },
  };
}

export default function Home({ resultsQuotes }) {
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
        <TimelineSection />
        <ConceptsSection />
        <BlockchainSection />
        <BlogSection />
        <SubPageSection />
        <StuffSection resultssync={resultsQuotes} />
      </div>
    </Container>
  );
}
