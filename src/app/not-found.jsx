import styles from "@/src/app/not-found.module.css"
import container from "@/src/app/baseContainer.module.css"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className={`${container.baseContainer}`}>
      <div className={`${styles.notFound}`}>
        <span>The page you are looking for was not found.</span>
        {/* <span><Link href="/">Back to the Home Page</Link></span> */}
      </div>
    </div>
  )
}