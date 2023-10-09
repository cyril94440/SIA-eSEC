import { NextPage } from "next";
import Head from "next/head";
import { formatPageTitle } from "@@core/base";
import { Icons } from "@@view/components";
import * as styles from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";
import * as buttonStyles from "../../components/Button/styles";
import { useState } from "react";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import Link from "next/link";

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
  const router = useRouter();

  const [submitting, setSubmitting] = useState(false);
  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    setSubmitting(true);

    try {
      await toast
        .promise(
          signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false,
          }),
          {
            loading: "Signing in...",
            success: (data) => {
              if (!data?.ok) throw new Error("Failed to sign in");
              return "Signed in successfully";
            },
            error: "Failed to sign in. Please verify your email and password and try again.",
          }
        )
        .then((res) => {
          if (res?.ok) router.push("/dashboard");
        });
    } catch (error: any) {
      toast.error("An error occured, please try again.");
    }

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
          <Link href="/forgot-password">
            <a css={styles.forgotPassword}>Forgot password?</a>
          </Link>
          <div css={styles.spinnerContainer}>
            <input
              css={[buttonStyles.root, buttonStyles.rootFullWidth, styles.inputSubmit]}
              type="submit"
              value={submitting ? "" : "Sign in"}
              disabled={!!(errors.email || errors.password) || submitting}
            />
            {submitting && <span css={[styles.spinner]}></span>}
          </div>
          <div css={styles.signUpContainer}>
            Don&apos;t have an account?{" "}
            <a href="https://secureidentityalliance.org/contact" target="_blank" css={styles.signUp} rel="noreferrer">
              Ask for it
            </a>
          </div>
        </form>
      </div>
    </>
  );
};
