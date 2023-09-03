import styles from "@/app/styles/min/Home.module.css";
import { Suspense } from "react";
import FormInput from "./components/forminput";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <Suspense fallback={"Loading ..."}>
          <FormInput />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
