import { useStateMachine } from "little-state-machine";

import { Button } from "../components/Button";

export function ButtonBlock() {
  const {
    state: {
      yourDetail: { buttonClickCounter },
    },
  } = useStateMachine();
  return (
    <div>
      <Button />
      <p>{buttonClickCounter}</p>
    </div>
  );
}
