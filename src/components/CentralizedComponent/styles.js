import styled from "styled-components";

export const StyledBackground = styled.main`
  background-color: rgb(245, 247, 250);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: fit-content;
  border-radius: 5px;
  border: 2px solid rgb(218, 226, 232);
  transition: 0.5s;
  /* box-shadow: 0 0 5px grey; */

  @media screen and (min-width: 1000px){
    flex-direction: row;
  }
`;
