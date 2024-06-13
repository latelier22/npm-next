import Image from "next/image";
import MyButton from "./components/MyButton";
import {Gallery, fetchFiles, transformResponse} from "@latelier22/artisans-strapi"
import photos from "./photo";

const files = await fetchFiles('image');

const strapiPhotos = transformResponse(files)

async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container">
        <MyButton> Mon bouton !</MyButton>
        <Gallery photos={strapiPhotos} />
        <Gallery photos={photos} />
      </div>
    </main>
  );
}

export default Home