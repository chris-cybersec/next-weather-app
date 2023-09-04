import styles from "@/app/styles/min/Content.module.css";
import Image from "next/image";

const Content = ({ temp, code }) => {

// console.log(code)
  return (
    <div className={styles.container}>
      <div className={styles.code}>
        {/* <Image src={`http://localhost:3000/icons/${code}.svg`} width={200} height={200} alt="code"/> */}
        <div className={styles.top}>
    <div className={styles.icon}>
          <Image
            src={`https://3e52-83-150-56-136.ngrok-free.app/icons/${code}.svg`}
            width={200}
            height={200}
            alt="code"
          />
    </div>
          <div className={styles.temp}>{temp}&nbsp;&deg;C</div>
        </div>
      </div>
    </div>
  );
};

export default Content;
