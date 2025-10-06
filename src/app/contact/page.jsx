import container from "@/src/app/baseContainer.module.css";
import styles from "@/src/app/contact/page.module.css"

export default function ContactPage() {
  return (
    <div className={`${container.baseContainer}`}>
      <div className={`${styles.contacts}`}>
        <h2>Contact</h2>
        For feedback, suggestions, or bug reports, feel free to reach out ⇩
        <br />
        <a href="mailto:etg.wiki.info@gmail.com">etg.wiki.info@gmail.com</a>
        <br />
        <br />
        <h2>GitHub</h2>
        You may view and share this project on GitHub with attribution under the <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC BY-NC-ND 4.0</a> license ⇩
        <br />
        <a href="#">Source code</a>
      </div>
    </div>
  );
}