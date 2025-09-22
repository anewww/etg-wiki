'use client'

import Image from "next/image";
import styles from "@/src/ui/spriteGallery.module.css";
// import infoPanel from "./infoPanel.module.css"
import { SearchContext } from "@/src/contexts/searchContext";
import { GunsContext } from "@/src/contexts/gunsContext";
import { useContext, useState} from "react";
import { HoverContext } from "@/src/contexts/hoverContext";
// import { QualityIcons } from "./infoPanel";
// import EntityStats from "@/src/ui/entityStats"
import { ItemsContext } from "@/src/contexts/itemsContext";
import { strategies } from "@/src/lib/strategies/entityStrategies"

export const scale = 3;
const entityName = "items";

export default function SpriteGallery() {
  const { query, setQuery } = useContext(SearchContext);
  // const { guns, loading } = useContext(GunsContext);
  const guns = useContext(GunsContext);
  const items = useContext(ItemsContext);
  const { hover, setHover}  = useContext(HoverContext);

  const [ modal, setModal ] = useState({
    isOpen: false,
    entity: null,
  });

  function handleMouseEnter(hoverId) {
    setHover({
      isHovered: true,
      hoverId: hoverId,
    });
  }

  function handleMouseLeave() {
    setHover({
      isHovered: false,
      hoverId: null,
    });
  }

  function openModal(entity) {
    setModal({
      isOpen: true,
      entity: entity,
    });
  }

  // console.log(guns.list)

  if (guns.loading)
    return <p>Loading...</p>

  const filteredEntities = items.list.filter((entity) => {
    const name = entity.name;
    return name.toLowerCase().includes(query.toLowerCase());
  })

  return (
    <>
      <div className={styles.gallery}>
        {
          filteredEntities.map((entity) => (
            <Sprite 
              key={entity.id}
              entity={entity}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              openModal={openModal}
            />
          ))
        }
      </div>

      <Modal {...{ modal, setModal }} />
    </>
  );
}

function Sprite({ entity, handleMouseEnter, handleMouseLeave, openModal }) {
  return (
    <div
      className={styles.container}
      onMouseEnter={() => handleMouseEnter(entity.id)}
      onMouseLeave={() => handleMouseLeave()}
    >
      <button
        className={styles.button}
        onClick={() => openModal(entity)}
      >
        <Image
          width={scale * entity.icon.width}
          height={scale * entity.icon.height}
          unoptimized
          className={styles.sprite}
          alt={entity.name}
          src={entity.icon.src}
          decoding="async"
          loading="lazy"
          data-file-width={entity.icon.width}
          data-file-height={entity.icon.height}
        />
      </button>
    </div>
  )
}

function Modal({ modal, setModal }) {
  function closeModal() {
    setModal({
      isOpen: false,
      entity: null,
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
            {strategies[entityName]
              ? strategies[entityName](modal.entity)
              : <p>No strategy found for {entityName}</p>}
          </div>
        </div>
      )}
    </>
  )
}
