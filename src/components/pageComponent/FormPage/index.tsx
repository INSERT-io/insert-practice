import { FormProvider, useForm } from "react-hook-form";
import { Presenter } from "./Presenter";

export const FormPage: React.FC = () => {
  const methods = useForm({
    mode: "all",
    defaultValues: {
      hoge: "",
    },
  });

  return (
    <FormProvider {...methods}>
      <Presenter />
    </FormProvider>
  );
};
