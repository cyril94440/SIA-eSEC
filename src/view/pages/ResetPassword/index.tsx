import { NextPage } from "next";
import Head from "next/head";
import { formatPageTitle } from "@@core/base";
import * as styles from "./styles";
import { useRouter } from "next/router";
import { useState } from "react";
import { JwtPayload } from "jsonwebtoken";
import toast from "react-hot-toast";
import { SubmitHandler, useForm } from "react-hook-form";
import { Icons } from "@@view/components";
import * as buttonStyles from "../../components/Button/styles";

type ResetPasswordInputs = {
  oldPassword: string;
  password: string;
  confirmPassword: string;
};

type SubmitState = "idle" | "submitting" | "success";

export const ResetPassword: NextPage = () => {
  const router = useRouter();
  const { token } = router.query as JwtPayload;
  const [submitting, setSubmitting] = useState<SubmitState>("idle");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ResetPasswordInputs>();

  const onSubmit: SubmitHandler<ResetPasswordInputs> = async (data) => {
    setSubmitting("submitting");
    try {
      const response = await fetch("/api/auth/reset-password", {
        body: JSON.stringify({
          token: token as string,
          oldPassword: data.oldPassword,
          password: data.password,
        }),
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error();
      }
      setSubmitting("success");
      toast.success("Your password has been reset successfully! Redirecting to dashboard...");
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
      return;
    } catch (error) {
      setSubmitting("idle");
      console.log("Error : ", error);
      toast.error("An error occured, please verify your inputs and try again.");
    }
  };

  return (
    <>
      <Head>
        <title>{formatPageTitle("Reset your password")}</title>
      </Head>
      <div css={styles.container}>
        <div css={styles.logo}>
          <Icons.App />
        </div>
        <div css={styles.title}>Reset Password</div>
        <div css={styles.description}>Please fill in the form below to reset your password</div>
        <form css={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
          <label css={styles.label}>Old password</label>
          <input
            css={styles.input}
            placeholder="Your old password"
            type="password"
            {...register("oldPassword", { required: true })}
          />
          {errors.oldPassword && <span css={styles.errorMsg}>Old password is required</span>}

          <label css={styles.label}>New Password</label>
          <input
            css={styles.input}
            placeholder="Your super secret password"
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && <span css={styles.errorMsg}>Password is required</span>}

          <label css={styles.label}>Confirm New Password</label>
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
              value={submitting !== "idle" ? "" : "Reset"}
              disabled={
                !!(errors.oldPassword || errors.password || errors.confirmPassword) ||
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
