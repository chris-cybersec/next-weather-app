"use client";

import { useRouter } from "next/navigation";

import styles from "@/app/styles/min/FormInput.module.css";
import { useForm } from "react-hook-form";
import { Roboto_Slab } from "next/font/google";
import { getCountry } from "@/actions";
const robotoSlab = Roboto_Slab({ subsets: ["latin"], weight: "200" });

const FormInput = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = async (data) => {
    // console.log(data);
    const { country } = data;
    // console.log(country)
     await getCountry(country);

    router.push(`${country}`)
    reset();
  };

  return (
    <>
      <form className={styles.container} onSubmit={handleSubmit(submitHandler)}>
        <input
          name="country"
          type="text"
          autoComplete="off"
          placeholder="pls insert your country"
          {...register("country", { required: true })}
          className={robotoSlab.className}
        />
        <div className={styles.go} onClick={handleSubmit(submitHandler)}>
          GO
        </div>
      </form>
      {errors.country && (
        <p className={styles.error}>Pls insert your Country name !!!</p>
      )}
    </>
  );
};

export default FormInput;
