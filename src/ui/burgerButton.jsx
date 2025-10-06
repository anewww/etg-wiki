import stylesBurgerMenu from "@/src/ui/burgerMenu.module.css";
import stylesLayout from "@/src/app/layout.module.css";
import BurgerIcon from "@/public/icons/burger-menu.svg";

export default function BurgerButton({ isOpened, onClick }) {
  return (
    <button className={`${stylesBurgerMenu.button}`} onClick={onClick}>
      <BurgerIcon className={`${stylesBurgerMenu.iconOpen}`} />
    </button>
  );
}