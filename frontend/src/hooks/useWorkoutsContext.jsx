import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutsContext = () => {
  // use Context not Create dummy
  const context = useContext(WorkoutsContext);

  if (!context) {
    throw Error("useWorkoutsContext must be used inside the WorkoutsContextProvider");
  }

  return context;
};
