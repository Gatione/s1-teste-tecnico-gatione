import { Container, InputContainer } from "./styles";

export default function Input({ id, label, error, register, name, ...rest }) {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <InputContainer error={error} {...rest} {...register(name)} />
      {error && <span>{error.message}</span>}
    </Container>
  );
}
