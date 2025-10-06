import container from "@/src/app/baseContainer.module.css";
import styles from "@/src/app/faq/page.module.css"

export default function FaqPage() {
  return (
    <div className={`${container.baseContainer}`}>
      <div className={`${styles.questions}`}>
        <h2>How to use this website?</h2>
        <p className={`${styles.question}`}>
          Actually, it’s pretty simple. At the top, you can choose a category — weapons or items. You can display both categories at the same time, just one of them, or none at all. In the future, more categories will be added, such as bosses, levels, and pickup items.
          <br />
          <br />
          The search bar lets you search for items by name across all active categories. On desktop, you can hover over an item to view its details, or click it. On mobile, you can view details by tapping the item.
        </p>
      </div>
    </div>
  );
}