import { NextPage } from "next";
import Head from "next/head";
import { formatPageTitle } from "@@core";
import { Icons } from "@@view/components";
import * as styles from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";
import * as buttonStyles from "../../components/Button/styles";
import { useState } from "react";

type LoginInputs = {
  email: string;
  password: string;
};

export const Login: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginInputs>();

  const [submitting, setSubmitting] = useState(false);
  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    setSubmitting(true);
    // Simulate a 1.5s delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    setSubmitting(false);
  };

  return (
    <>
      <Head>
        <title>{formatPageTitle("Login")}</title>
      </Head>
      <div css={styles.container}>
        <div css={styles.logo}>
          <Icons.App />
        </div>
        <form css={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
          <label css={styles.label}>Email</label>
          <input
            css={styles.input}
            placeholder="john@doe.com"
            type="email"
            {...register("email", { required: true })}
          />
          {errors.email && <span css={styles.errorMsg}>Email is required</span>}

          <label css={styles.label}>Password</label>
          <input
            css={styles.input}
            placeholder="Secret password"
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && <span css={styles.errorMsg}>Password is required</span>}

          <div css={styles.spinnerContainer}>
            <input
              css={[buttonStyles.root, buttonStyles.rootFullWidth, styles.inputSubmit]}
              type="submit"
              value={submitting ? "" : "Sign in"}
              disabled={!!(errors.email || errors.password) || submitting}
            />
            {submitting && <span css={[styles.spinner]}></span>}
          </div>
        </form>
      </div>
    </>
  );
};
