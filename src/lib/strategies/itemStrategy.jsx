import styles from "@/src/ui/spriteGallery.module.css"
import infoPanel from "@/src/ui/infoPanel.module.css"
import React from "react"
import { QualityIcons } from "@/src/ui/infoPanel";
import { scale } from "@/src/ui/spriteGallery"
import Image from "next/image";

export default function ItemStrategy(item) {
  return (
    <>
      {/* <div
        className={styles.header}
      >
        <div className={styles.icons}>
          ID: {item.id}
          <Image
            className={styles.quality}
            src={item.quality.src}
            alt="Quality Icon A"
            unoptimized
            decoding="async"
            loading="lazy"
            width="16"
            height="21"
            data-file-width="14"
            data-file-height="18">
          </Image>
        </div>
        <Image
          className={infoPanel.margin}
          width={scale * item.icon.width}
          height={scale * item.icon.height}
          unoptimized
          // className={styles.sprite}
          alt={item.name}
          src={item.icon.src}
          decoding="async"
          loading="lazy"
          data-file-width={item.icon.width}
          data-file-height={item.icon.height}
          style={{ imageRendering: "pixelated" }}
        >
        </Image>
        <br></br>
        <p className={infoPanel.center}>{item.name}</p>
        <p className={infoPanel.center}>{item.flavor}</p>
        <br></br>
        <p>{item.type}</p>
      </div>
      <div className={styles.description}>
        <p>{item.effect}</p>
      </div> */}
    </>
  )
}