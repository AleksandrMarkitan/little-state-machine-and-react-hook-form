import "./App.css";

import { StateMachineProvider, createStore } from "little-state-machine";
import toast, { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";

import { FormBlock } from "./components/FormBlock";
import { ButtonBlock } from "./components/ButtonBlock";
import { ReactQueryExample } from "./components/ReactQueryExample";

createStore({
  yourDetail: {
    firstName: "test",
    lastName: "testest",
    submitCounter: 0,
    buttonClickCounter: 0,
    blocking: false,
  },
});

const notify = () => toast("Here is your toast.");
const queryClient = new QueryClient();

const App = () => (
  <StateMachineProvider>
    <QueryClientProvider client={queryClient}>
      <FormBlock />
      <ButtonBlock notify={notify} />
      <ReactQueryExample />
      <Toaster />
    </QueryClientProvider>
  </StateMachineProvider>
);

export default App;
