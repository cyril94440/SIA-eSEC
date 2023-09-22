import { useRouter } from "next/router";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Dialog, Icons } from "@@view/components";
import * as styles from "./add-user-styles";
import * as buttonStyles from "../../../../../../components/Button/styles"; // TODO: remove it (encapsulation problem)

type AddUserInputs = {
  email: string;
  role: "USER" | "ADMIN";
};

type SubmitState = "idle" | "submitting" | "success";

export default function AddUser() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AddUserInputs>();

  const [submitting, setSubmitting] = useState<SubmitState>("idle");
  const router = useRouter();

  const onSubmit: SubmitHandler<AddUserInputs> = async (data) => {
    setSubmitting("submitting");

    try {
      await fetch("/api/mail/add-user", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.status === 200) return res.json();
          throw new Error("Failed to send email");
        })
        .then(() => {
          setSubmitting("success");
          toast.success("Email sent successfully! Page will reload.");
          setTimeout(() => {
            router.reload();
          }, 1000);
          return;
        });
    } catch (error) {
      setSubmitting("idle");
      toast.error("An error occured, please try again later.");
    }
  };

  return (
    <Dialog fullWidth={true}>
      <Dialog.Trigger>
        <div css={styles.newUser}>New User</div>
      </Dialog.Trigger>
      <Dialog.Title>
        <div>Add a new user</div>
      </Dialog.Title>
      <Dialog.Description>
        Enter the email and the role of the user you want to add, then click the button below. <br />
        The user will receive an email containing a link to complete his profile with his full name and password.
      </Dialog.Description>
      <Dialog.Body>
        <div css={styles.bodyContainer}>
          <form css={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
            <label css={styles.label}>Email</label>
            <input
              css={styles.input}
              placeholder="john@doe.com"
              type="email"
              {...register("email", { required: true })}
            />
            {errors.email && <span css={styles.errorMsg}>Email is required</span>}

            <label css={styles.label}>Role</label>
            <select css={styles.select} {...register("role", { required: true })}>
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
            </select>

            {errors.role && <span css={styles.errorMsg}>A role is required</span>}

            <div css={styles.spinnerContainer}>
              <input
                css={[buttonStyles.root, buttonStyles.rootFullWidth, styles.inputSubmit]}
                type="submit"
                value={submitting !== "idle" ? "" : "Add user"}
                disabled={!!(errors.email || errors.role) || submitting === "submitting" || submitting === "success"}
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
