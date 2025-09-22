'use client'

import Image from "next/image"
import { GunsContext } from "@/src/contexts/gunsContext"
import { ItemsContext } from "@/src/contexts/itemsContext"
import { useContext } from "react"
import styles from "@/src/app/ui/infoPanel.module.css"
import EntityStats from "./entityStats"
import { strategies } from "@/src/lib/strategies/entityStrategies"

export const QualityIcons = {
  "N/A": "https://enterthegungeon.wiki.gg/images/b/bf/N_Quality_Item.png",
  D: "https://enterthegungeon.wiki.gg/images/6/60/D_Quality_Item.png",
  C: "https://enterthegungeon.wiki.gg/images/b/bd/C_Quality_Item.png",
  B: "https://enterthegungeon.wiki.gg/images/f/f3/B_Quality_Item.png",
  A: "https://enterthegungeon.wiki.gg/images/9/9c/A_Quality_Item.png",
  S: "https://enterthegungeon.wiki.gg/images/8/8b/1S_Quality_Item.png"
}

const entityName = "guns";

export default function InfoPanel({ hoverId }) {
  const guns = useContext(GunsContext);
  // console.log(guns)
  const gun = guns.list[hoverId];

  const items = useContext(ItemsContext);

  if (!guns || guns.loading)
    return (
      <Card className={styles.panel}>
        <p>Loading...</p>
      </Card>
    )
  
  return (
    <>
    {gun ? (
        <>
          <Card>
            <DescriptionHeader entity={gun} />
          </Card>

          {/* <Card>
            <DescriptionInfo gun={gun} />
          </Card>  */}
        </>
      ) : (
        <Card className={styles.default}>
          <p>Hover over an icon to see more info</p>
        </Card>
      )}
    </>
  )
}

function Card({ children, className }) {
  return (
    <div className={`${styles.panel} ${className}`}>
      {children}
    </div>
  )
}

function DescriptionHeader({ entity }) {
  return (
    <>
       {strategies[entityName]
        ? strategies[entityName](entity)
          : <p>No strategy found for {entityName}</p>}

      {/* <div className={styles.header}>
        <div className={styles.icons}>
          ID: {gun.id}
          <Image
            className={styles.quality}
            src={QualityIcons[gun.quality]}
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
        <div>

        </div>
        <p className={styles.center}>{gun.name}</p>
        <p className={styles.center}>{gun.flavor}</p>
      </div>
      
      <EntityStats gun={gun}/> */}


      {/* <p>{gun.notes}</p>
      <br></br>
      <p><span className={styles.damage}>DPS: </span>{gun.dps.value}</p>
      <p className={styles.margin}><span className={styles.damage}>Damage: </span>{gun.damage.value}</p>
      <p className={styles.margin}><span className={styles.ammo}>Magazine: </span>{gun.magazine.value}</p>
      <p className={styles.margin}><span className={styles.ammo}>Ammo: </span>{gun.ammo.value}</p>
      <p><span className={styles.time}>Fire rate: </span>{gun.fireRate.value}</p>
      <p className={styles.margin}><span className={styles.time}>Reload time: </span>{gun.reloadTime.value}</p>
      <p><span className={styles.type}>Type: </span>{gun.type}</p> */}
    </>
  )
}

function DescriptionInfo({ gun }) {
  return (
    <>

    </>
  )
}