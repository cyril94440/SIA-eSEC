import { useRouter } from "next/router";
import React, { FC } from "react";
import toast from "react-hot-toast";
import AlertDialog from "view/components/AlertDialog";
import { Icons } from "view/components/Icons";
import * as styles from "./styles";

interface ResetPasswordProps {
  id: string;
  username: string;
  userEmail: string;
}

type SubmitState = "idle" | "submitting" | "success";

export const ResetPassword: FC<ResetPasswordProps> = (props) => {
  const router = useRouter();
  const [submitting, setSubmitting] = React.useState<SubmitState>("idle");

  const handleResetPassword = async () => {
    setSubmitting("submitting");
    try {
      const response = await fetch("/api/mail/reset-password", {
        method: "POST",
        body: JSON.stringify({
          id: props.id,
          email: props.userEmail,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error();
      }

      setSubmitting("success");
      toast.success("Email sent successfully! Page will reload.");
      setTimeout(() => {
        router.reload();
      }, 1000);
      return;
    } catch (error) {
      setSubmitting("idle");
      toast.error("An error occured while attempting to send the email, please try again.");
    }
  };
  return (
    <AlertDialog>
      <AlertDialog.Trigger>
        <div css={styles.keyIcon}>
          <Icons.Key />
        </div>
      </AlertDialog.Trigger>
      <AlertDialog.Title>
        <div>Confirm before sending</div>
      </AlertDialog.Title>
      <AlertDialog.Description>
        Please confirm that you want to send an email to reset the password of{" "}
        <span css={styles.username}>{props.username}</span>.
      </AlertDialog.Description>
      <AlertDialog.Action>
        <button css={styles.confirmButton} onClick={handleResetPassword}>
          Confirm
        </button>
      </AlertDialog.Action>
    </AlertDialog>
  );
};
