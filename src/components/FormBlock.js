import { useStateMachine } from "little-state-machine";

import { Form } from "../components/Form";

export function FormBlock() {
  const {
    state: {
      yourDetail: { firstName, lastName, age, submitCounter },
    },
  } = useStateMachine();
  return (
    <div>
      <Form />
      <div>
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{age}</p>
        <p>{submitCounter}</p>
      </div>
    </div>
  );
}
