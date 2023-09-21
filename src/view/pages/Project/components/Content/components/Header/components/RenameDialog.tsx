import { Dialog, Icons } from "@@view/components";
import { useRouter } from "next/router";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as styles from "./styles";
import toast from "react-hot-toast";
interface RenameDialogProps {
  actualTitle: string;
  handleRename: (title: string) => void;
}

type RenameProjectInputs = {
  title: string;
};

export const RenameDialog: React.FC<RenameDialogProps> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RenameProjectInputs>({
    defaultValues: {
      title: props.actualTitle,
    },
  });
  const [open, setOpen] = React.useState(false);

  const onSubmit: SubmitHandler<RenameProjectInputs> = async (data) => {
    try {
      props.handleRename(data.title);
      toast.success("Project title updated!");
      setOpen(false);
    } catch (error) {
      toast.error("An error occured, please try again later.");
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <div css={styles.iconContainer}>
          <Icons.Edit />
        </div>
      </Dialog.Trigger>
      <Dialog.Title>
        <div>Edit project title</div>
      </Dialog.Title>
      <Dialog.Description>Update the title of your project by entering a new one below.</Dialog.Description>
      <Dialog.Body>
        <div css={styles.bodyContainer}>
          <form css={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
            <label css={styles.label}>Project title</label>
            <input
              css={styles.input}
              placeholder="Your project title"
              type="text"
              {...register("title", { required: true })}
            />
            {errors.title && <span css={styles.errorMsg}>Title is required</span>}
            <div css={styles.spinnerContainer}>
              <input
                css={[styles.buttonRoot, styles.buttonRootFullWidth, styles.inputSubmit]}
                type="submit"
                value={"Update"}
                disabled={!!errors.title}
              />
            </div>
          </form>
        </div>
      </Dialog.Body>
    </Dialog>
  );
};
