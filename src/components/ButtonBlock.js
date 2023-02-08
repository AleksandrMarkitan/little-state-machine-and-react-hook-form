import { useStateMachine } from "little-state-machine";

import BlockUi from "react-block-ui";
import "react-block-ui/style.css";

import { Button, BlockingButton } from "../components/Button";

export function ButtonBlock() {
  const {
    state: {
      yourDetail: { buttonClickCounter, blocking },
    },
  } = useStateMachine();

  return (
    <div>
      <Button />
      <p>{buttonClickCounter}</p>

      <div>
        <BlockUi tag="div" blocking={blocking}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </BlockUi>
        <BlockingButton />
      </div>
    </div>
  );
}
