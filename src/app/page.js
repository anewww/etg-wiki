import Image from "next/image";
import styles from "./page.module.css";
import Items from "./ui/items";
import SpriteGallery from "./ui/spriteGallery"
import Search from "./ui/search";
import InfoPanel from "./ui/infoPanel"
import { SearchProvider } from "@/src/contexts/searchContext"
import { GunsProvider } from "../contexts/gunsContext";
import { HoverProvider } from "../contexts/hoverContext";

export default function Home() {
  return (
    <>
      <GunsProvider>
        <HoverProvider>
          <main className={styles.main}>
            <div className={styles.itemsCard}>
              <span className={styles.header}>Guns<hr></hr></span>
              <SpriteGallery></SpriteGallery>
            </div>
          </main>
        </HoverProvider>
      </GunsProvider>
    </>
  );
}
