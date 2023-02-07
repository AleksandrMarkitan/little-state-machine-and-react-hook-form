import "./App.css";

import { StateMachineProvider, createStore } from "little-state-machine";

import { FormBlock } from "./components/FormBlock";
import { ButtonBlock } from "./components/ButtonBlock";

createStore({
  yourDetail: {
    firstName: "test",
    lastName: "testest",
    submitCounter: 0,
    buttonClickCounter: 0,
  },
});

const App = () => (
  <StateMachineProvider>
    <FormBlock />
    <ButtonBlock />
  </StateMachineProvider>
);

export default App;
