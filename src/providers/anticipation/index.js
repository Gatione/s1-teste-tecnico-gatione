import { createContext, useState } from "react";
import Api from "../../Service/api";

export const AnticipationContext = createContext([]);

export function AnticipationProvider({ children }) {
  const [anticipation, setAnticipation] = useState("");

  function calculateAnticipation(data, resolve, reject) {
    Api.post("", data)
      .then((response) => {
        setAnticipation(response.data);
        setTimeout(resolve);
      })
      .catch((err) => {
        setTimeout(reject)
        console.log(err.response.data);
      });
  }

  return (
    <AnticipationContext.Provider
      value={{ anticipation, calculateAnticipation }}
    >
      {children}
    </AnticipationContext.Provider>
  );
}
