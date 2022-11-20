import styled from "styled-components";

export const FlexComponent = styled.div`
  display: flex;
  flex-wrap: ${(props) => props.wrap || "wrap"};
  flex-direction: ${(props) => props.direction || "row"};
  gap: ${(props) => props.gap || "0"};
  align-items: ${(props) => props.align || "auto"};
  justify-content: ${(props) => props.justify || "unset"};
  padding: ${(props) => props.padding || "0"};
  background-color: ${(props) => props.background || "unset"};
  color: ${(props) => props.color || "#000"};
  p {
    margin: 10px;
    color: blue;
  }
`;
