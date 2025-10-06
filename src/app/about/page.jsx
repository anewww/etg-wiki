import container from "@/src/app/baseContainer.module.css";
import styles from "@/src/app/about/page.module.css"

export default function FaqPage() {
  return (
    <div className={`${container.baseContainer}`}>
      <div className={`${styles.questions}`}>
        <h2>About</h2>
        <div className={`${styles.question}`}>
          This project is a dedicated Enter the Gungeon reference site - a clean, interactive wiki and cheat sheet designed to make exploring the game’s weapons, items, and mechanics easier.
          <br />
          <br />
          Users can browse through categories, filter items, and quickly find detailed information. The interface is designed for both desktop and mobile, with intuitive search and navigation.
          <br />
          <br />
          <h3>Future plans</h3>
          <ul>
            <li>Add more categories, such as bosses, levels, and consumables.</li>
            <li>Implement advanced filters and cross-category search.</li>
            <li>Enhance user experience with better navigation and animations.</li>
            <li>Improve information from the wiki.</li>
          </ul>
          <br />
          This project aims to be a comprehensive, accessible, and constantly evolving resource for Enter the Gungeon players.
        </div>
      </div>
    </div>
  );
}