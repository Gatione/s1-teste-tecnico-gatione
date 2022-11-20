import { useContext, useEffect, useState } from "react";
import { AnticipationContext } from "../../providers/anticipation";
import { FlexComponent } from "./styles";

export default function AmountReceived() {
  const { anticipation } = useContext(AnticipationContext);
  const [anticipationDays, setAnticipationDays] = useState([]);
  const [anticipationValues, setAnticipationValues] = useState([]);

  useEffect(() => {
    setAnticipationDays(Object.keys(anticipation));
    setAnticipationValues(Object.values(anticipation));
  }, [anticipation]);

  return (
    anticipation && (
      <FlexComponent
        direction="column"
        background="rgb(245, 247, 250)"
        color="blue"
        justify="center"
        align="center"
        padding="20px"
        gap="20px"
      >
        <h3>
          <i>VOCÊ RECEBERÁ:</i>
        </h3>
        <FlexComponent direction="column">
          {anticipation &&
            anticipationDays.map((day, index) => (
              <p key={index}>
                <i>
                  {day === "1" ? "Amanhã" : `Em ${day} dias`}:{" "}
                  <strong>R$ {anticipationValues[index]},00</strong>
                </i>
              </p>
            ))}
        </FlexComponent>
      </FlexComponent>
    )
  );
}
