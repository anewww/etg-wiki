import styles from "@/src/ui/spriteGallery.module.css"
import infoPanel from "@/src/ui/infoPanel.module.css"
import { Fragment } from "react"

export default function EntityStats({ gun }) {
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
  
  function Stats({ lines, gun }) {
    return (
      <>
        {lines.map((line, ind) => {
          const cname = statNames[line].cname;
          return (
            <p key={ind}>
              <span className={`${infoPanel[cname]}`}>
                {statNames[line].text}
              </span>
              {gun[line].map((span, i) => {
                return (
                  <Fragment key={i}>
                    <span
                      {...infoProps(span.info)}
                    >
                      {span.value}
                    </span>
                    {" "}
                  </Fragment>
                )
              })}
            </p>
          )
        })}
      </>
    )
  }

  // function splitValue(value) {
  //   return value.map((item, ind) => (
  //     <span key={ind}>{item} </span>
  //   ));
  //}

  const order = ["dps", "damage", "magazine", "ammo", "fireRate", "reloadTime"];

  return (
    <>
      <Stats lines={order} gun={gun}></Stats>
      {/* Type */}
      {/* <p className={`${infoPanel.margin}`}>
        <span className={`${infoPanel.type}`}>
          Type:
        </span>
        {" "}
        <span>
          {gun.type}
        </span>
      </p> */}
    </>
  )
}