import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";

export type Props<TFieldValues extends FieldValues> = Omit<
  React.ComponentProps<"input">,
  "name"
> & {
  control: Control<TFieldValues>;
  name: FieldPath<TFieldValues>;
};

export const FormTextInput = <TFieldValues extends FieldValues>({
  control,
  name,
}: Props<TFieldValues>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return <input {...field} />;
      }}
    ></Controller>
  );
};
