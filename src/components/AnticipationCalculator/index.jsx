import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import { FlexComponent, FlexForm, StyledButton } from "./styles";
import * as yup from "yup";
import { useContext, useState } from "react";
import { AnticipationContext } from "../../providers/anticipation";
import { toast } from "react-toastify";

export default function AnticipationCalculator() {
  const { calculateAnticipation } = useContext(AnticipationContext);
  const [showDays, setShowDays] = useState(false);

  const formSchema = yup.object().shape({
    amount: yup
      .string()
      .transform((value) => {
        // eslint-disable-next-line no-self-compare
        return +value === +value ? value : "";
      })
      .min(4, "No mínimo 1000")
      .required("Apenas números aceitos"),
    installments: yup
      .string()
      .transform((value) => {
        // eslint-disable-next-line no-self-compare
        return +value === +value ? value : "";
      })
      .transform((value) => (+value > 0 ? value : ""))
      .min(1, "Apenas números a cima de 0")
      .required("Apenas números"),
    mdr: yup
      .string()
      .transform((value) => {
        // eslint-disable-next-line no-self-compare
        return +value === +value ? value : "";
      })
      .transform((value) => (+value >= 0 ? value : ""))
      .min(1, "Apenas números maiores ou iguais a 0")
      .required("Apenas números"),
    days: yup
      .string()
      .default("1,15,30,90")
      .transform((value) => {
        value = value.split(",").map((day) => +day);
        // eslint-disable-next-line no-self-compare
        if (value.some((day) => +day !== +day)) {
          return "";
        }
        return value.join(",");
      })
      .required("Apenas números separados por vírgula"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  function onSubmitFunction(data) {
    if (!showDays) {
      delete data.days;
    } else {
      data.days = data.days.split(",").map((day) => +day);
    }
    const resolve = new Promise((resolve, reject) => {
      calculateAnticipation(data, resolve, reject);
    });
    toast.promise(resolve, {
      pending: "Aguarde",
      success: "Sucesso",
      error: "Erro interno no servidor",
    });
  }

  return (
    <FlexForm onSubmit={handleSubmit(onSubmitFunction)}>
      <Input
        label="Informe o valor da venda *"
        placeholder="Digite o valor da venda"
        name="amount"
        error={errors.amount}
        register={register}
      />
      <Input
        label="Em quantas parcelas *"
        placeholder="Digite a quantidade de parcelas"
        name="installments"
        error={errors.installments}
        register={register}
      />
      <Input
        label="Percentual de MDR *"
        placeholder="Informe o percentual de MDR"
        name="mdr"
        error={errors.mdr}
        register={register}
      />
      <FlexComponent align="center" justify="space-between">
        <label htmlFor="days">Escolher os dias</label>
        <input type="checkbox" onClick={() => setShowDays(!showDays)} />
      </FlexComponent>
      {showDays && (
        <Input
          label="Dias (números separados por vírgula)"
          placeholder="Escolha os dias"
          name="days"
          error={errors.days}
          register={register}
        />
      )}
      <StyledButton type="submit" background="#99990">Simular</StyledButton>
    </FlexForm>
  );
}
