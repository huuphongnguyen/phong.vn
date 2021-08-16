import Container from "../components/Container";
import { Web3Storage, getFilesFromPath } from "web3.storage";

export default function Web3() {
  async function storeFiles() {
    const client = new Web3Storage({
      token: WEB3_STORAGE_API_KEY,
    });
    const files = await getFilesFromPath(
      "/static/covid19-trancking-feature-img.png"
    );
    const rootCid = await client.put(files);

    const res = await client.get(rootCid); // Promise<Web3Response | null>
    const filesx = await res.files(); // Promise<Web3File[]>
    for (const file of filesx) {
      console.log(`${file.cid} ${file.name} ${file.size}`);
    }
  }

  return (
    <Container>
      <div onClick={storeFiles}>
        <p className="text-black font-bold">UPLOAD</p>
      </div>
    </Container>
  );
}
