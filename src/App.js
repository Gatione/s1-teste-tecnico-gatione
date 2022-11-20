import { ToastContainer } from "react-toastify";
import AmountReceived from "./components/AmountReceived";
import { FlexComponent } from "./components/AmountReceived/styles";
import AnticipationCalculator from "./components/AnticipationCalculator";
import CentralizedComponent from "./components/CentralizedComponent";
import GlobalStyle from "./styles/global";
import 'react-toastify/dist/ReactToastify.css';
import "./styles/copy.css"

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ToastContainer autoClose={2500} />
      <CentralizedComponent>
        <FlexComponent direction="column" padding="25px 30px" gap="20px">
          <h2>Simule sua Antecipação</h2>
          <AnticipationCalculator />
        </FlexComponent>
        <AmountReceived />
      </CentralizedComponent>
    </div>
  );
}

export default App;
