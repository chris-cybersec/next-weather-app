import { getData } from "@/actions";
import Content from "@/app/components/content";
import DaysContent from "@/app/components/dayscontent";
import styles from "@/app/styles/min/Result.module.css";
import Link from "next/link";
import { Suspense } from "react";

const Result = async ({ params }) => {
  const { latitude, longitude, name } = params;

  const data = await getData(latitude, longitude);

  const { temperature, weathercode } = data.current_weather;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href={"/"} className={styles.home}>
          Home
        </Link>
        <h3>{name}</h3>
      </div>
      <div className={styles.content}>
        <Suspense fallback={"Loading ..."}>
          <Content temp={temperature} code={weathercode} />
        </Suspense>
      </div>
      <div className={styles.days}>
        <Suspense fallback={"Loading ..."}>
          <DaysContent dailyData={data.daily} />
        </Suspense>
      </div>
    </div>
  );
};

export default Result;
