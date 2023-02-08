import { useStateMachine } from "little-state-machine";

import { changeButtonCounter } from "../actions/changeButtonCounter";
import { toggleBlocking } from "../actions/toggleBlocking";

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

export function BlockingButton({ notify }) {
  const {
    state: {
      yourDetail: { blocking },
    },
    actions,
  } = useStateMachine({ toggleBlocking });

  const clickHandler = () => {
    actions.toggleBlocking({
      blocking: !blocking,
    });
    notify();
  };

  return (
    <button onClick={clickHandler} color="tomato">
      Toggle Block
    </button>
  );
}
