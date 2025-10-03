'use client'

import Image from "next/image";
import styles from "@/src/ui/spriteGallery.module.css";
import stylesPage from "@/src/app/page.module.css"
// import infoPanel from "./infoPanel.module.css"
import { SearchContext } from "@/src/contexts/searchContext";
import { GunsContext } from "@/src/contexts/gunsContext";
import { useContext, useMemo, useState} from "react";
import { HoverContext } from "@/src/contexts/hoverContext";
// import { QualityIcons } from "./infoPanel";
// import EntityStats from "@/src/ui/entityStats"
import { ItemsContext } from "@/src/contexts/itemsContext";
// import { strategies } from "@/src/lib/strategies/entityStrategies"
import { CategoriesContext } from "@/src/contexts/categoriesContext";
import { useStrategies } from "@/src/lib/strategies/entityStrategies";

export const scale = 3;
const entityName = "items";

export default function SpriteGallery() {
  const { query, setQuery } = useContext(SearchContext);
  // const { guns, loading } = useContext(GunsContext);
  const { hover, setHover} = useContext(HoverContext);
  const { categories, setCategories } = useContext(CategoriesContext);
  const guns = useContext(GunsContext);
  const items = useContext(ItemsContext);

  const strategies = useStrategies();

  const [ modal, setModal ] = useState({
    isOpen: false,
    entity: null,
  });

  function handleMouseEnter(hoverId, type) {
    setHover({
      isHovered: true,
      hoverId: hoverId,
      type: type,
    });
  }

  function handleMouseLeave() {
    setHover({
      isHovered: false,
      hoverId: null,
      type: null,
    });
  }

  function openModal(entity) {
    setModal({
      isOpen: true,
      entity: entity,
    });
  }

  // console.log(guns.list)

  if (strategies.loading)
    return <p>Loading...</p>

  // console.log(items.list)

  const filteredEntities = (entity) => {
    const name = entity.name;
    return name.toLowerCase().includes(query.toLowerCase());
  }

  const entityKeys = Object.keys(strategies);

  return (
    <>
      {entityKeys.map(key => {
        return categories[key] && (
          <div className={stylesPage.itemsCard} key={key}>
            <span className={stylesPage.header}>{key}<hr></hr></span>
            <div className={styles.gallery}>
              {
                strategies[key].data.list.filter(filteredEntities).map((entity) => (
                  <Sprite
                    key={entity.id}
                    entity={entity}
                    type={strategies[key].data.object.type}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                    openModal={openModal}
                  />
                ))
              }
            </div>
          </div>)
      })}
      {/* {categories.items } */}

      <Modal {...{ strategies, modal, setModal }} />
    </>
  );
}

function Sprite({ entity, type, handleMouseEnter, handleMouseLeave, openModal }) {
  return (
    <div
      className={styles.container}
      onMouseEnter={() => handleMouseEnter(entity.id, type)}
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

function Modal({ strategies, modal, setModal }) {
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
              ? strategies[entityName].render(modal.entity)
              : <p>No strategy found for {entityName}</p>}
          </div>
        </div>
      )}
    </>
  )
}
