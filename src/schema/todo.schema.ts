import * as yup from "yup";

export const todoSchema = yup.object({
  task: yup.string().required("Task is required"),
  isCompleted: yup.boolean().required("isCompleted is required"),
});
