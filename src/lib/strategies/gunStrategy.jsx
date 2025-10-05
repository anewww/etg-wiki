import styles from "@/src/ui/spriteGallery.module.css"
import infoPanel from "@/src/ui/infoPanel.module.css"
import React from "react"
import { QualityIcons } from "@/src/ui/infoPanel";
import { scale } from "@/src/ui/spriteGallery"
import Image from "next/image";

const order = ["dps", "damage", "magazine", "ammo", "fireRate", "reloadTime"];
const statNames = {
  dps: {
    text: "DPS: ",
    cname: "damage",
  },
  damage: {
    text: "Damage: ",
    cname: "damage",
  },
  magazine: {
    text: "Magazine: ",
    cname: "ammo",
  },
  ammo: {
    text: "Ammo: ",
    cname: "ammo",
  },
  fireRate: {
    text: "Fire rate: ",
    cname: "time",
  },
  reloadTime: {
    text: "Reload time: ",
    cname: "time",
  },
  type: {
    text: "Type: ",
    cname: "type",
  },
}

function infoProps(info) {
  return info !== undefined && { className: `${styles.info} ${infoPanel.statValues}`, title: info };
}

export default function GunStrategy(gun) {
  return (
    <>
      {/* <div
        className={styles.header}
      >
        123
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
        <Image
          className={infoPanel.margin}
          width={scale * gun.icon.width}
          height={scale * gun.icon.height}
          unoptimized
          alt={gun.name}
          src={gun.icon.src}
          decoding="async"
          loading="lazy"
          data-file-width={gun.icon.width}
          data-file-height={gun.icon.height}
          style={{ imageRendering: "pixelated" }}
        >
        </Image>
        <br></br>
        <p className={infoPanel.center}>{gun.name}</p>
        <p className={infoPanel.center}>{gun.flavor}</p>
        <br></br>
      </div>
      <div className={styles.description}>
        <p>{gun.notes}</p>
        <br></br>
        {order.map((line, ind) => {
          const cname = statNames[line].cname;
          return (
            <p key={ind}>
              <span className={`${infoPanel[cname]}`}>
                {statNames[line].text}
              </span>
              {gun[line].map((span, i) => {
                return (
                  <React.Fragment key={i}>
                    <span
                      {...infoProps(span.info)}
                    >
                      {span.value}
                    </span>
                    {" "}
                  </React.Fragment>
                )
              })}
            </p>
          )
        })}
      </div> */}
    </>
  )
}



// function EntityStats({ gun }) {
//   function infoProps(info) {
//     return info !== undefined && { className: `${styles.info} ${infoPanel.statValues}`, title: info };
//   }

//   function Stats({ lines, gun }) {
//     return (
//       <>
//         {lines.map((line, ind) => {
//           const cname = statNames[line].cname;
//           return (
//             <p key={ind}>
//               <span className={`${infoPanel[cname]}`}>
//                 {statNames[line].text}
//               </span>
//               {gun[line].map((span, i) => {
//                 return (
//                   <React.Fragment key={i}>
//                     <span
//                       {...infoProps(span.info)}
//                     >
//                       {span.value}
//                     </span>
//                     {" "}
//                   </React.Fragment>
//                 )
//               })}
//             </p>
//           )
//         })}
//       </>
//     )
//   }
//   // const order = ["dps", "damage", "magazine", "ammo", "fireRate", "reloadTime"];

//   return (
//     <>
//       <Stats lines={order} gun={gun}></Stats>
//     </>
//   )
// }
