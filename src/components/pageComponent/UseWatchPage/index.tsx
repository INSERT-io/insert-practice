import {
  FormProvider,
  useForm,
  useFormContext,
  useWatch,
} from "react-hook-form";
import React from "react";

type FormInputs = {
  firstName: string;
  lastName: string;
};

const Hoge = () => {
  const { watch, register } = useFormContext();
  const firstName = watch("firstName");

  return (
    <>
      <input {...register("firstName")} placeholder="firstName" />
      <p>{firstName || "empty value"}</p>
    </>
  );
};

const Fuga = () => {
  const { register } = useFormContext();
  const lastName = useWatch({ name: "lastName" });

  return (
    <>
      <input {...register("lastName")} placeholder="lastName" />
      <p>{lastName || "empty value"}</p>
    </>
  );
};

export const UseWatchPage = () => {
  const methods = useForm<FormInputs>();

  return (
    <FormProvider {...methods}>
      <Hoge />
      <Fuga />
    </FormProvider>
  );
};
