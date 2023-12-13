import React, { FC } from "react";
import { Icons } from "view/components/Icons";
import * as styles from "./styles";
import AlertDialog from "view/components/AlertDialog";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { Api } from "@@core/api/client";

interface DeleteUserProps {
  id: string;
  type: "user" | "invite";
}

export const DeleteUser: FC<DeleteUserProps> = (props) => {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const response =
        props.type === "user" ? await Api.deleteUser({ id: props.id }) : await Api.deleteInvite({ email: props.id });

      if (!response.success) {
        throw new Error(response.error);
      }

      toast.success(response.data.message);
      setTimeout(() => {
        router.reload();
      }, 1000);
    } catch (error) {
      toast.error((error as Error).message ?? "An error occured, please try again later.");
    }
  };

  return (
    <AlertDialog>
      <AlertDialog.Trigger>
        <div css={styles.deleteUserIcon}>
          <Icons.Thrash />
        </div>
      </AlertDialog.Trigger>
      <AlertDialog.Title>
        <div>Confirm before deleting</div>
      </AlertDialog.Title>
      <AlertDialog.Description>
        You&apos;re about to delete a user. This action can&apos;t be undone. Are you sure you want to continue?
      </AlertDialog.Description>
      <AlertDialog.Action>
        <button css={styles.deleteButton} onClick={handleDelete}>
          Delete
        </button>
      </AlertDialog.Action>
    </AlertDialog>
  );
};
