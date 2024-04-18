import Link from "next/link";
import style from "./page.module.css";
import Featured from "../components/Featured/Featured";
import Category from "../components/category/Category";
import CardList from "../components/cardList/CardList";
import Menu from "../components/menu/Menu";

export default function Home() {
  return (
    <div className={style.container}>
      <Featured />
      <Category />
      <div className={style.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
