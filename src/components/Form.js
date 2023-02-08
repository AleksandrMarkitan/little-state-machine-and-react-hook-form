import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";

import { updateName } from "../actions/updateName";

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { state, actions } = useStateMachine({ updateName });

  const onSubmit = (data) => {
    actions.updateName({
      ...data,
      submitCounter: state.yourDetail.submitCounter + 1,
    });
  };

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <input
        {...register("firstName")}
        defaultValue={state.yourDetail.firstName}
      />
      <input
        {...register("lastName", { required: true })}
        defaultValue={state.yourDetail.lastName}
      />
      {errors.lastName && <p>Last name is required.</p>}
      <input {...register("age", { pattern: /\d+/, required: true })} />
      {errors.age && <p>Please enter number for age.</p>}
      <input type="submit" />
    </form>
  );
}
