import { formatDistanceToNow } from "date-fns";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import {Trash} from "@phosphor-icons/react"

const WorkoutDetails = ({ workout }) => {

  const { dispatch } = useWorkoutsContext();

  const handleDelete = async () => {
    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'DELETE_WORKOUT', payload: json });
    }
  };

  return (
    <div className='workout-details'>
      <h4 className='font-bold text-xl'>{workout.title}</h4>
      <p>
        <strong>Repitions:</strong> {workout.reps}
      </p>
      <p>
        <strong>Loads(kg):</strong> {workout.loads}
      </p>
      <p>Created {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>

      <span onClick={handleDelete} className=''>
        <Trash size={20} color="red"/>
      </span>
    </div>
  );
};
export default WorkoutDetails;
