import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { formatErrorMessage, ret } from "@@core/base";
import { Button, Dialog, Forms } from "@@view/components";
import * as styles from "./styles";
import { useStore } from "react-redux";
import { RootState } from "@@store";
import { useAppSelector } from "@@view/hooks";

export interface ProjectFileDialogProps {
  open: boolean;
  mode: "save" | "load";
  handler: (password: string, name?: string) => Promise<string | null>;
  onOpenChange: (value: boolean) => void;
}

export const ProjectFileDialog: FC<ProjectFileDialogProps> = (props) => {
  const specs = useAppSelector((state) => state.project.specs);

  // Today as string in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];
  const form = useForm<{ name?: string; password: string }>({
    defaultValues: {
      name: `${specs.title} - ${today}`,
      password: "",
    },
  });

  useEffect(() => {
    if (props.mode === "save") {
      form.reset({
        name: `${specs.title} - ${today}`,
        password: "",
      });
    }
  }, [specs]);

  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const canSubmit = form.formState.isValid && !submitting;

  useEffect(() => {
    if (props.open) {
      return;
    }
    form.reset();
    setSubmitting(false);
    setErrorMessage("");
  }, [props.open, form]);

  return (
    <Dialog open={props.open} background={"white"} onOpenChange={props.onOpenChange}>
      <Dialog.Title>
        {ret(() => {
          switch (props.mode) {
            case "load":
              return "Load the project";
            case "save":
              return "Save the project";
          }
        })}
      </Dialog.Title>
      <Dialog.Body>
        <div css={styles.body}>
          <form
            onSubmit={form.handleSubmit(async ({ name, password }) => {
              console.log("submit", password);
              if (password.length < 7) {
                setErrorMessage("Password must be at least 7 characters");
                return;
              }
              setSubmitting(true);
              setErrorMessage("");
              try {
                const errorMessage = await props.handler(password, name);

                if (errorMessage) {
                  setErrorMessage(errorMessage);
                  return;
                }

                props.onOpenChange(false);
              } catch (err) {
                setErrorMessage(formatErrorMessage(err));
              } finally {
                setSubmitting(false);
              }
            })}
          >
            {props.mode === "save" && (
              <Forms.Label title={"File name"}>
                <Forms.Input
                  control={form.control}
                  name={"name"}
                  type={"text"}
                  autoComplete={"off"}
                  rules={{
                    required: true,
                  }}
                />
              </Forms.Label>
            )}
            <Forms.Label title={"File password"}>
              <Forms.Input
                control={form.control}
                name={"password"}
                type={"password-like"}
                autoComplete={"off"}
                rules={{
                  required: true,
                }}
              />
            </Forms.Label>
            <div css={styles.error}>{errorMessage}</div>
            <div css={styles.buttons}>
              <Button
                title={ret(() => {
                  switch (props.mode) {
                    case "load":
                      return "Load";
                    case "save":
                      return "Save";
                  }
                })}
                type={"submit"}
                disabled={!canSubmit}
              />
            </div>
          </form>
        </div>
      </Dialog.Body>
    </Dialog>
  );
};
