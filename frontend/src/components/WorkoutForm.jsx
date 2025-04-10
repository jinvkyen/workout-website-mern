import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutForm = () => {
  // use context
  const { dispatch } = useWorkoutsContext();

  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");
  const [loads, setLoads] = useState("");
  const [error, setError] = useState("");
  const [emptyFields, setEmptyFields] = useState([]);

  const handleAddWorkout = async (e) => {
    e.preventDefault();

    const workout = { title, reps, loads };

    // api fetching
    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }

    if (response.ok) {
      setError(null);
      setEmptyFields([]);
      setTitle("");
      setReps("");
      setLoads("");
      dispatch({ type: "CREATE_WORKOUT", payload: json });
      console.log("New Workout Added", json);
    }
  };

  return (
    <form className='create' onSubmit={handleAddWorkout}>
      <h3 className='text-blue-700 text-xl font-semibold text-center'>Add New Workout</h3>

      <label className='mt-4'>Exercise Title: </label>
      <input
        className={emptyFields.includes("title") ? "error" : ""}
        type='text'
        name='title'
        id=''
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label>Repititions: </label>
      <input
        className={emptyFields.includes("reps") ? "error" : ""}
        type='number'
        name='reps'
        id=''
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />
      <label>Loads (in kg): </label>
      <input
        className={emptyFields.includes("loads") ? "error" : ""}
        type='number'
        name='loads'
        id=''
        onChange={(e) => setLoads(e.target.value)}
        value={loads}
      />
      <button>Add Workout</button>
      {error && <div className='error'>{error}</div>}
    </form>
  );
};
export default WorkoutForm;
