'use client'

// import Image from "next/image";
// import Items from "../ui/items";
import SpriteGallery from "@/src/ui/spriteGallery"
// import Search from "../ui/search";
// import InfoPanel from "../ui/infoPanel"
// import { SearchProvider } from "@/src/contexts/searchContext"
import { GunsProvider } from "@/src/contexts/gunsContext";
import { HoverProvider } from "@/src/contexts/hoverContext";
import { ItemsProvider } from "@/src/contexts/itemsContext";
import InfoPanel from "@/src/ui/infoPanel"
import styles from "@/src/app/page.module.css"
import baseContainer from "@/src/app/baseContainer.module.css"
import Filter from "@/src/ui/filter"

export default function Home() {
  return (
    <>
      <ItemsProvider>
        <GunsProvider>
          <HoverProvider>
            <div className={`${baseContainer.baseContainer}`}>
              <div className={styles.grid}>
                {/* <div ref={filterRef} className={styles.filter}>
                  Choose a category:
                  <ul>
                    <CategoriesButton />
                    <li><a href="#">Guns</a></li>
                    <li><a href="#">Items</a></li>
                  </ul>
                  <Search></Search>
                </div> */}
                <Filter />
                
                <div className={styles.asideOuter}>
                  <aside className={styles.aside}>
                    <InfoPanel />
                  </aside>
                </div>

                <main className={styles.main}>
                  {/* <div className={styles.itemsCard}>
                    <span className={styles.header}>Guns<hr></hr></span> */}
                    <SpriteGallery></SpriteGallery>
                  {/* </div> */}
                </main>
              </div>
            </div>
          </HoverProvider>
        </GunsProvider>
      </ItemsProvider>
    </>
  );
}
