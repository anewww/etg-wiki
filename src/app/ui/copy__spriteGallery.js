'use client'

import Image from "next/image";
import styles from "./spriteGallery.module.css";
import infoPanel from "./infoPanel.module.css"
import { SearchContext } from "@/src/contexts/searchContext";
import { GunsContext } from "@/src/contexts/gunsContext";
import { useContext, useState} from "react";
import { HoverContext } from "@/src/contexts/hoverContext";
import { QualityIcons } from "./infoPanel";
import EntityStats from "@/src/app/ui/entityStats"

const scale = 3;

export default function ItemsSpriteGallery() {
  const { query, setQuery } = useContext(SearchContext);
  const { guns, loading } = useContext(GunsContext);
  const { hovered, setHovered, setHoverId}  = useContext(HoverContext);

  const [ modal, setModal ] = useState({
    isOpen: false,
    gun: null,
  });

  const filteredEntities = guns.filter((entity) => {
    const name = entity.name;
    return name.toLowerCase().includes(query.toLowerCase());
  })

  function handleMouseEnter(hoverId) {
    setHovered(true);
    setHoverId(hoverId);
  }

  function handleMouseLeave() {
    setHovered(false);
    setHoverId(null);
  }

  function openModal(gun) {
    setModal({
      isOpen: true,
      gun: gun,
    });
  }

  if (loading)
    return <p>Loading...</p>

  return (
    <>
      <div className={styles.gallery}>
        {
          // (
          filteredEntities.map((gun) => (
            <Sprite 
              key={gun.id}
              gun={gun}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              openModal={openModal}
            />
          ))
          // )
        }
      </div>

      <Modal {...{ modal, setModal }} />
    </>
  );
}

function Sprite({ gun, handleMouseEnter, handleMouseLeave, openModal }) {
  return (
    <div
      className={styles.container}
      onMouseEnter={() => handleMouseEnter(gun.id)}
      onMouseLeave={() => handleMouseLeave()}
    >
      <button
        className={styles.button}
        onClick={() => openModal(gun)}
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
  )
}

function Modal({ modal, setModal }) {
  function closeModal() {
    setModal({
      isOpen: false,
      gun: null,
    })
  }

  return (
    <>
      {modal.isOpen && (
        <div
          className={styles.modalOverlay}
          onClick={closeModal}
        >
          <div
            className={styles.modal}
            onClick={e => e.stopPropagation()}
          >
            {/* {console.log(modal.isOpen)} */}
            <div
              className={styles.header}
            >
              <div className={styles.icons}>
                ID: {modal.gun.id}
                <Image
                  className={styles.quality}
                  src={QualityIcons[modal.gun.quality]}
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
                width={scale * modal.gun.icon.width}
                height={scale * modal.gun.icon.height}
                unoptimized
                // className={styles.sprite}
                alt={modal.gun.name}
                src={modal.gun.icon.src}
                decoding="async"
                loading="lazy"
                data-file-width={modal.gun.icon.width}
                data-file-height={modal.gun.icon.height}
                style={{ imageRendering: "pixelated" }}
              >
              </Image>
              <br></br>
              <p className={infoPanel.center}>{modal.gun.name}</p>
              <p className={infoPanel.center}>{modal.gun.flavor}</p>
              <br></br>
            </div>
            <div className={styles.description}>
              <p>{modal.gun.notes}</p>
              <br></br>
              <EntityStats gun={modal.gun} />
              {/* <p>
                <span
                  className={`${infoPanel.damage}`}  
                >
                  DPS:
                </span>
                {" "}
                <span 
                  // className={(modal.gun.dps.info !== undefined) && styles.info}
                  // title={modal.gun.dps.info !== undefined ? modal.gun.dps.info : null}
                  {...(modal.gun.dps.info !== undefined && { className: styles.info, title: modal.gun.dps.info })}
                >
                  {modal.gun.dps.value.map(item => (
                    item + " "
                  ))}
                </span>
              </p>
              <p className={infoPanel.margin}><span className={infoPanel.damage}>Damage: </span>{modal.gun.damage.value}</p>
              <p className={styles.margin}><span className={styles.ammo}>Magazine: </span>{modal.gun.magazine.value}</p>
              <p className={styles.margin}><span className={styles.ammo}>Ammo: </span>{modal.gun.ammo}</p>
              <p><span className={infoPanel.time}>Fire rate: </span>{modal.gun.fireRate}</p>
              <p className={infoPanel.margin}><span className={infoPanel.time}>Reload time: </span>{modal.gun.reloadTime}</p>
              <p><span className={infoPanel.type}>Type: </span>{modal.gun.type}</p> */}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
