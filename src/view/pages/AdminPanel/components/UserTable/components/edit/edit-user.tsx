import { useRouter } from "next/router";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Dialog, Icons } from "@@view/components";
import * as styles from "./styles";
import * as buttonStyles from "../../../../../../components/Button/styles"; // TODO: remove it (encapsulation problem)
import { Api } from "@@core/api/client";
import { UserRole } from "../../columns";

interface EditUserProps {
  id: string;
  fullname: string;
  actualRole: UserRole;
}

type EditUserInputs = {
  role: UserRole;
};

type SubmitState = "idle" | "submitting" | "success";

export default function EditUser(props: EditUserProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<EditUserInputs>();

  const [submitting, setSubmitting] = useState<SubmitState>("idle");
  const router = useRouter();

  const onSubmit: SubmitHandler<EditUserInputs> = async (data) => {
    setSubmitting("submitting");

    try {
      const response = await Api.updateUser({ id: props.id, role: data.role });

      if (!response.success) {
        throw new Error(response.error);
      }

      toast.success("User updated successfully.");
      setTimeout(() => {
        router.reload();
      }, 1000);
    } catch (error) {
      setSubmitting("idle");
      toast.error("An error occured, please try again later.");
    }
  };

  return (
    <Dialog fullWidth={true}>
      <Dialog.Trigger>
        <div css={styles.editIcon}>
          <Icons.Edit />
        </div>
      </Dialog.Trigger>
      <Dialog.Title>
        <div>Edit user</div>
      </Dialog.Title>
      <Dialog.Description>
        <span>
          You are editing user <strong>{props.fullname}</strong>.
        </span>
      </Dialog.Description>
      <Dialog.Body>
        <div css={styles.bodyContainer}>
          <form css={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
            <label css={styles.label}>Role</label>
            <select defaultValue={props.actualRole} css={styles.select} {...register("role", { required: true })}>
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
            </select>

            {errors.role && <span css={styles.errorMsg}>A role is required</span>}

            <div css={styles.spinnerContainer}>
              <input
                css={[buttonStyles.root, buttonStyles.rootFullWidth, styles.inputSubmit]}
                type="submit"
                value={submitting !== "idle" ? "" : "Update user"}
                disabled={!!errors.role || submitting === "submitting" || submitting === "success"}
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
      </Dialog.Body>
    </Dialog>
  );
}
