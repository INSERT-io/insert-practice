import {
  Control,
  FieldValues,
  FieldPath,
  Controller,
  useWatch,
  useFormContext,
} from "react-hook-form";

export type Props<TFieldValues extends FieldValues> = Omit<
  React.ComponentProps<"input">,
  "name"
> & {
  control: Control<TFieldValues>;
  name: FieldPath<TFieldValues>;
};

const FormDateInput = <TFieldValues extends FieldValues>({
  control,
  name,
}: Props<TFieldValues>) => {
  const { setValue } = useFormContext();
  const value = useWatch({ control, name });

  const deleteReactHookFormValue = () => {
    // @ts-expect-error setValueの型が正しく推論されないため、型エラーが発生する
    setValue(name, "");
  };

  const setReactHookFormCurrentDate = () => {
    // 今日の日付をPath<TFieldValue>型にしてセット
    // anyのエラーを無視
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setValue(name, new Date().toISOString().split("T")[0] as any);
  };

  const deleteElementValue = () => {
    Array.from(document.getElementsByName(name)).forEach((element) => {
      if (element instanceof HTMLInputElement) {
        element.value = "";
      }
    });
  };

  const setElementCurrentDate = () => {
    Array.from(document.getElementsByName(name)).forEach((element) => {
      if (element instanceof HTMLInputElement) {
        element.valueAsDate = new Date();
      }
    });
  };

  const alertDialog = () => {
    Array.from(document.getElementsByName(name)).forEach((element) => {
      if (element instanceof HTMLInputElement) {
        alert(`element.value=${element.value}\nreact-hook-form value=${value}`);
      }
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Controller
        control={control}
        name={name}
        render={({ field }) => <input type="date" {...field} />}
      />
      <div>
        <button onClick={deleteReactHookFormValue}>
          delete react-hook-form value
        </button>
        <button onClick={deleteElementValue}>delete element value</button>
      </div>
      <div>
        <button onClick={setReactHookFormCurrentDate}>
          react-hook-form set current date
        </button>
        <button onClick={setElementCurrentDate}>
          element set current date
        </button>
      </div>
      <div>
        <button onClick={alertDialog}>alert value</button>
      </div>
    </div>
  );
};

export default FormDateInput;
