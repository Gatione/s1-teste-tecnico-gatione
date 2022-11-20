import styled from "styled-components";

export const FlexForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FlexComponent = styled.div`
  display: flex;
  flex-wrap: ${(props) => props.wrap || "wrap"};
  flex-direction: ${(props) => props.direction || "row"};
  gap: ${(props) => props.gap || "0"};
  align-items: ${(props) => props.align || "auto"};
  justify-content: ${(props) => props.justify || "unset"};
  text-align: center;
`;

export const StyledButton = styled.button`
  border: none;
  padding: ${(props) => props.padding || "10px"};
  background-color: ${(props) => props.background || "unset"};
  color: blue;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  height: fit-content;
  width: ${(props) => props.width || "auto"};
  font-size: 14px;
  font-weight: 700;
  transition: 300ms;

  :hover {
    transform: scale(1.05);
  }
  :active {
    background-color: "#9995";
    transform: scale(0.95);
  }
`;
