import { NextPage } from "next";
import Head from "next/head";
import { formatPageTitle } from "@@core/base";
import * as styles from "./styles";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { decodeToken } from "lib/utils/decode-token";
import { JwtPayload } from "jsonwebtoken";
import toast from "react-hot-toast";
import { SubmitHandler, useForm } from "react-hook-form";
import { Icons } from "@@view/components";
import * as buttonStyles from "../../components/Button/styles";
import { Api } from "@@core/api/client";
import { signIn } from "next-auth/react";

type SignUpInputs = {
  fullname: string;
  password: string;
  confirmPassword: string;
};

type SubmitState = "idle" | "submitting" | "success";

export const Activate: NextPage = () => {
  const router = useRouter();
  const { token } = router.query;
  const [tokenPayload, setTokenPayload] = useState<JwtPayload | null>(null);
  const [submitting, setSubmitting] = useState<SubmitState>("idle");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpInputs>();

  useEffect(() => {
    if (!token) return;
    try {
      const decodedToken = decodeToken(token as string);
      if (decodedToken === null || !decodedToken.email || !decodedToken.role) throw new Error();
      setTokenPayload(decodedToken);
    } catch {
      toast.error("The token provided is either invalid or expired.");
      router.push("/login");
      return;
    }
  }, [token, router]);

  const onSubmit: SubmitHandler<SignUpInputs> = async (data) => {
    setSubmitting("submitting");
    try {
      const res = await Api.authSignup({
        token: token as string,
        email: tokenPayload?.email,
        role: tokenPayload?.role,
        fullname: data.fullname,
        password: data.password,
        confirmPassword: data.confirmPassword,
      });

      if (!res.success) {
        toast.error(res.error);
        setSubmitting("idle");
        return;
      }

      setSubmitting("success");
      toast.success("Signed up successfully. Signing in...");
      await signIn("credentials", {
        email: tokenPayload?.email,
        password: data.password,
      });
      return;
    } catch (error) {
      setSubmitting("idle");
      console.log("Error : ", error);
      toast.error("An error occured, please try again.");
    }
  };

  return (
    <>
      <Head>
        <title>{formatPageTitle("Activate your account")}</title>
      </Head>
      <div css={styles.container}>
        <div css={styles.logo}>
          <Icons.App />
        </div>
        <div css={styles.title}>Welcome to eSec !</div>
        <div css={styles.description}>Please fill the form below with your personal informations.</div>
        <form css={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
          <label css={styles.label}>Email</label>
          <input css={styles.input} value={tokenPayload?.email ?? ""} type="text" disabled={true} />
          <label css={styles.label}>Full Name</label>
          <input
            css={styles.input}
            placeholder="What should we call you?"
            type="text"
            {...register("fullname", { required: true })}
          />
          {errors.fullname && <span css={styles.errorMsg}>Full Name is required</span>}

          <label css={styles.label}>Password</label>
          <input
            css={styles.input}
            placeholder="Your super secret password"
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && <span css={styles.errorMsg}>Password is required</span>}

          <label css={styles.label}>Confirm Password</label>
          <input
            css={styles.input}
            placeholder="One more time for safety"
            type="password"
            {...register("confirmPassword", {
              required: true,
              validate: (val: string) => {
                if (watch("password") != val) {
                  return "Your passwords do no match";
                }
              },
            })}
          />
          {errors.confirmPassword && <span css={styles.errorMsg}>Passwords do not match</span>}

          <div css={styles.spinnerContainer}>
            <input
              css={[buttonStyles.root, buttonStyles.rootFullWidth, styles.inputSubmit]}
              type="submit"
              value={submitting !== "idle" ? "" : "Sign Up"}
              disabled={
                !!(errors.fullname || errors.password || errors.confirmPassword) ||
                submitting === "submitting" ||
                submitting === "success"
              }
            />
            {submitting === "submitting" && <span css={[styles.spinner]}></span>}
            {submitting === "success" && (
              <div css={styles.successIcon}>
                <Icons.Check />
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
};
