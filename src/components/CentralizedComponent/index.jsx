import { StyledBackground, StyledSection } from "./styles";

export default function CentralizedComponent({ children }) {
  return (
    <StyledBackground>
      <StyledSection>{children}</StyledSection>
    </StyledBackground>
  );
}
