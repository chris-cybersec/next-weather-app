import { getData } from "@/actions";
import Content from "@/app/components/content";
import styles from "@/app/styles/min/Result.module.css";
import { Suspense } from "react";

const Result = async ({ params }) => {
  const { latitude, longitude,name } = params;
  // console.log(longitude)

  const data = await getData(latitude, longitude);

  const { temperature, weathercode, time } = data.current_weather;
  console.log(data);
  return (
    <div className={styles.container}>
    <h3>{name}</h3>
      <div className={styles.content}>
        <Suspense fallback={"Loading ..."}>
          <Content time={time.slice(-5, 16)} temp={temperature} code={weathercode}/>
        </Suspense>
      </div>
    </div>
  );
};

export default Result;
