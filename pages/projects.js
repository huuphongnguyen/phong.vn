import Container from "../components/Container";
import NextLink from "next/link";
import ProjectsElements from "../components/elements/ProjectsElement";
import { Client } from "@notionhq/client";

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_OFFICIAL_KEYS });

  const databaseId = process.env.NOTION_PAGE_ID_PROJECTS;
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  return {
    props: {
      results: response.results,
    },
  };
}

export default function Projects({ results }) {
  console.log("pr", results);
  return (
    <Container>
      <div className="items-start mx-auto w-full max-w-3xl space-y-4">
        <div className="inline-flex items-center space-x-1 text-black dark:text-white text-base uppercase font-sourcecodepro mt-5">
          <NextLink href="/">
            <a>
              <p className="text-gray-300 dark:text-gray-600 hover:text-black dark:hover:text-white">
                FRONT-PAGE
              </p>
            </a>
          </NextLink>
          <p>/</p>
          <h1>Projects</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {results.map((block) => (
            <div className={block.id}>
              <ProjectsElements
                imagesbanner={block.properties.imagesbanner.files.map(
                  (image) => image.name
                )}
                nameproject={block.properties.nameproject.title[0].plain_text}
                est={block.properties.est.rich_text[0].plain_text}
                startupday={block.properties.startupday.rich_text[0].plain_text}
                projecturl={block.properties.projecturl.rich_text[0].plain_text}
                qrimageurl={block.properties.qrimageurl.rich_text[0].plain_text}
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
