import { formatDistanceToNow } from "date-fns";

const WorkoutDetails = ({ workout }) => {
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
    </div>
  );
};
export default WorkoutDetails;
