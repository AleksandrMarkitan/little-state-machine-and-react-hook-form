import { useStateMachine } from "little-state-machine";

import { changeButtonCounter } from "../actions/changeButtonCounter";

export function Button() {
  const {
    state: {
      yourDetail: { buttonClickCounter },
    },
    actions,
  } = useStateMachine({ changeButtonCounter });

  const clickHandler = () => {
    actions.changeButtonCounter({
      buttonClickCounter: buttonClickCounter + 1,
    });
  };

  return <button onClick={clickHandler}>Change Change</button>;
}
