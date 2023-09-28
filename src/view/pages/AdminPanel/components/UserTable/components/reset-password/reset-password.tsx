import { FC } from "react";
import toast from "react-hot-toast";
import AlertDialog from "view/components/AlertDialog";
import { Icons } from "view/components/Icons";
import * as styles from "./styles";
import { Api } from "@@core/api/client";

interface ResetPasswordProps {
  id: string;
  fullname: string;
  userEmail: string;
}

export const ResetPassword: FC<ResetPasswordProps> = (props) => {
  const handleResetPassword = async () => {
    try {
      const response = await Api.sendResetPasswordMail({
        email: props.userEmail,
      });

      if (!response.success) {
        throw new Error(response.error);
      }

      toast.success("Email sent successfully!");
      return;
    } catch (error) {
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
        <span css={styles.fullname}>{props.fullname}</span>.
      </AlertDialog.Description>
      <AlertDialog.Action>
        <button css={styles.confirmButton} onClick={handleResetPassword}>
          Confirm
        </button>
      </AlertDialog.Action>
    </AlertDialog>
  );
};
