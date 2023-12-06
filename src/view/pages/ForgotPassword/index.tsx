import { NextPage } from "next";
import Head from "next/head";
import { formatPageTitle } from "@@core/base";
import * as styles from "./styles";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";
import { SubmitHandler, useForm } from "react-hook-form";
import { Icons } from "@@view/components";
import * as buttonStyles from "../../components/Button/styles";
import { Api } from "@@core/api/client";
import Link from "next/link";

type ForgotPasswordInputs = {
  email: string;
};

type SubmitState = "idle" | "submitting" | "success";

export const ForgotPassword: NextPage = () => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState<SubmitState>("idle");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ForgotPasswordInputs>();

  const onSubmit: SubmitHandler<ForgotPasswordInputs> = async (data) => {
    setSubmitting("submitting");
    try {
      const response = await Api.sendForgotPasswordMail({ email: data.email });

      if (!response.success) {
        throw new Error(response.error);
      }

      setSubmitting("success");
      toast.success("Email sent successfully! Redirecting to login page...");
      setTimeout(() => {
        router.push("/login");
      }, 1000);
      return;
    } catch (error) {
      setSubmitting("idle");
      toast.error("An error occured, please verify your inputs and try again.");
    }
  };

  return (
    <>
      <Head>
        <title>{formatPageTitle("Forgot password")}</title>
      </Head>
      <div css={styles.container}>
        <div css={styles.logo}>
          <Icons.App />
        </div>
        <div css={styles.title}>Forgot Password</div>
        <div css={styles.description}>Enter your email below. You will receive a link to reset your password.</div>
        <form css={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
          <label css={styles.label}>Email</label>
          <input
            css={styles.input}
            placeholder="Your email address"
            type="email"
            {...register("email", { required: true })}
          />
          {errors.email && <span css={styles.errorMsg}>Email is required</span>}

          <div css={styles.spinnerContainer}>
            <input
              css={[buttonStyles.root, buttonStyles.rootFullWidth, styles.inputSubmit]}
              type="submit"
              value={submitting !== "idle" ? "" : "Send email"}
              disabled={!!errors.email || submitting === "submitting" || submitting === "success"}
            />
            {submitting === "submitting" && <span css={[styles.spinner]}></span>}
            {submitting === "success" && (
              <div css={styles.successIcon}>
                <Icons.Check />
              </div>
            )}
          </div>
          <Link href="/login">
            <a css={styles.backToLogin}>Back to login page</a>
          </Link>
        </form>
      </div>
    </>
  );
};
