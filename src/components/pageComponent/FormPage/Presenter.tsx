import FormDateInput from "@/components/form/FormDateInput";
import { FormTextInput } from "@/components/form/FormTextInput";
import { useFormContext, useWatch } from "react-hook-form";

export const Presenter: React.FC = () => {
  const { control, watch } = useFormContext();

  const huga = watch("fuga");
  const usetete = useWatch({ control, name: "tete" });
  const value = watch("hoge");

  const onSubmit = () => {
    Array.from(document.getElementsByName("hoge")).forEach((element) => {
      if (element instanceof HTMLInputElement) {
        element.value = huga;
      }
    });
  };

  const alertDialog = () => {
    Array.from(document.getElementsByName("hoge")).forEach((element) => {
      if (element instanceof HTMLInputElement) {
        alert(`element.value=${element.value}\nreact-hook-form value=${value}`);
      }
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <h1>FormPage</h1>
      <div>
        <div>
          <h3>form</h3>
          <FormTextInput control={control} name="hoge" />

          <button onClick={alertDialog}>alert element value</button>
        </div>
      </div>
      <div>
        <h4>setter</h4>
        <FormTextInput control={control} name="fuga" />
        <button onClick={onSubmit}>set Value</button>
      </div>
      <div style={{ paddingBottom: "30px" }} />
      <div>
        <FormDateInput control={control} name="piyo" />
      </div>
      <div style={{ paddingBottom: "200px" }} />
      <FormTextInput control={control} name="ababa" />
      <div>
        <h4>watch</h4>
        <FormTextInput control={control} name="fuga" />
        <p>{huga}</p>
        <div>
          <input type="checkbox" disabled={!huga} />
          {huga ? "入力あるアルよ" : "入力ないアルよ"}
        </div>
      </div>
      <div>
        <h4>useWatch</h4>
        <FormTextInput control={control} name="tete" />
        <p>{usetete}</p>
        <div>
          <input type="checkbox" disabled={!usetete} />
          {usetete ? "入力あるアルよ" : "入力ないアルよ"}
        </div>
      </div>
    </div>
  );
};
