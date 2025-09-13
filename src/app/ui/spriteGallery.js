'use client'

import Image from "next/image";
import styles from "./spriteGallery.module.css";
import infoPanel from "./infoPanel.module.css"
import { SearchContext } from "@/src/contexts/searchContext";
import { GunsContext } from "@/src/contexts/gunsContext";
import { useContext, useState} from "react";
import { HoverContext } from "@/src/contexts/hoverContext";
import { QualityIcons } from "./infoPanel";

const scale = 3;

export default function SpriteGallery() {
  const { query, setQuery } = useContext(SearchContext);
  const { guns, loading } = useContext(GunsContext);
  const { hovered, setHovered, setHoverId}  = useContext(HoverContext);
  const [ modalIsOpen, setModalIsOpen ] = useState(false);
  const [ gunId, setGunId ] = useState(null);

  const filteredEntities = guns.filter((entity) => {
    const name = entity.name;
    return name.toLowerCase().includes(query.toLowerCase());
  })

  function handleMouseEnter(hoverId) {
    setHovered(true);
    setHoverId(hoverId)
  }

  function handleMouseLeave() {
    setHovered(false);
    setHoverId(null)
  }

  function openModal(id) {
    setModalIsOpen(true);
    setGunId(id);
  }

  if (loading)
    return <p>Loading...</p>

  return (
    <>
      <div className={styles.gallery}>
        {
          (
            filteredEntities.map((gun, ind) => (
              <div
                className={styles.container}
                key={ind}
                onMouseEnter={() => handleMouseEnter(gun.id)}
                onMouseLeave={() => handleMouseLeave()}
              >
                <button
                  className={styles.button}
                  onClick={() => openModal(gun.id)}
                >
                  <Image
                    width={scale * gun.icon.width}
                    height={scale * gun.icon.height}
                    unoptimized
                    className={styles.sprite}
                    alt={gun.name}
                    src={gun.icon.src}
                    decoding="async"
                    loading="lazy"
                    data-file-width={gun.icon.width}
                    data-file-height={gun.icon.height}
                  >
                  </Image>
                </button>
              </div>
            ))
          )
        }
      </div>

      <Modal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} gunId={gunId} setGunId={setGunId} guns={guns}/>
    </>
  );
}

function Modal({ modalIsOpen, setModalIsOpen, gunId, setGunId, guns }) {
  function closeModal() {
    setModalIsOpen(false);
    setGunId(null);
  }

  return (
    <>
      {modalIsOpen && (
        <div
          className={styles.modalOverlay}
          onClick={closeModal}
        >
          <div
            className={styles.modal}
            onClick={e => e.stopPropagation()}
          >
            {console.log(modalIsOpen)}
            <div
              className={styles.header}
            >
              <div className={styles.icons}>
                ID: {guns[gunId].id}
                <Image
                  className={styles.quality}
                  src={QualityIcons[guns[gunId].quality]}
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
                width={scale * guns[gunId].icon.width}
                height={scale * guns[gunId].icon.height}
                unoptimized
                // className={styles.sprite}
                alt={guns[gunId].name}
                src={guns[gunId].icon.src}
                decoding="async"
                loading="lazy"
                data-file-width={guns[gunId].icon.width}
                data-file-height={guns[gunId].icon.height}
                style={{ imageRendering: "pixelated" }}
              >
              </Image>
              <br></br>
              <p className={infoPanel.center}>{guns[gunId].name}</p>
              <p className={infoPanel.center}>{guns[gunId].flavor}</p>
              <br></br>
            </div>
            <div
              className={styles.description}
            >
              <p>{guns[gunId].notes}</p>
              <br></br>
              <p><span className={`${infoPanel.damage} ${(guns[gunId].dps.info !== (null || undefined)) ? styles.info : ""}`} {...((guns[gunId].dps.info !== null || undefined) && { title: guns[gunId].dps.info })}>DPS: </span>{guns[gunId].dps.value}</p>
              <p className={infoPanel.margin}><span className={infoPanel.damage}>Damage: </span>{guns[gunId].damage.value}</p>
              <p className={styles.margin}><span className={styles.ammo}>Magazine: </span>{guns[gunId].magazine.value}</p>
              <p className={styles.margin}><span className={styles.ammo}>Ammo: </span>{guns[gunId].ammo}</p>
              <p><span className={infoPanel.time}>Fire rate: </span>{guns[gunId].fireRate}</p>
              <p className={infoPanel.margin}><span className={infoPanel.time}>Reload time: </span>{guns[gunId].reloadTime}</p>
              <p><span className={infoPanel.type}>Type: </span>{guns[gunId].type}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}