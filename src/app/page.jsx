// import Image from "next/image";
import styles from "./page.module.css";
// import Items from "../ui/items";
import SpriteGallery from "@/src/ui/spriteGallery"
// import Search from "../ui/search";
// import InfoPanel from "../ui/infoPanel"
// import { SearchProvider } from "@/src/contexts/searchContext"
import { GunsProvider } from "@/src/contexts/gunsContext";
import { HoverProvider } from "@/src/contexts/hoverContext";
import { ItemsProvider } from "@/src/contexts/itemsContext";

export default function Home() {
  return (
    <>
      <ItemsProvider>
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
      </ItemsProvider>
    </>
  );
}
