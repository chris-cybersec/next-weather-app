import styles from "@/app/styles/min/Country.module.css";
import { getCountry } from "@/actions";
import Link from "next/link";

const Country = async ({ params }) => {
  const { country } = params;
  // console.log(country)

  const data = await getCountry(country);
  // console.log(data)
  //
  const myData = data?.map((res) => {
    const { id, name, country_code, latitude, longitude } = res;
    console.log(longitude)
    return (
      
      <Link href={`result/${latitude}/${name}/${longitude}`} className={styles.container} key={id}>
        <p>{name}</p>
        <p>{country_code}</p>
      </Link>
    );
  });
  return myData;
};

export default Country;
