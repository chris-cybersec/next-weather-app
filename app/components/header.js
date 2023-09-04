import Link from "next/link";

import { ImGithub } from "react-icons/im";
import styles from "@/app/styles/min/Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <Link href={"/"} className={styles.left}>next-meteo</Link>
      <div className={styles.right}>
        <Link href="https://github.com/chris-cybersec/next-weather-app"><ImGithub /></Link>
      </div>
    </div>
  );
};

export default Header;
