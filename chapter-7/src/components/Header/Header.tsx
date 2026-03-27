import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header(){
  return (
    <>
      <header className={styles.header}>
        <Link to="/">Blog</Link>
        <Link to="/contact/">お問い合わせ</Link>
      </header>
    </>
  )
}