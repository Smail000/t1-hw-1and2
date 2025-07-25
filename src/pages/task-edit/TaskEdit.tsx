import TaskDetails from "@/features/task-details/ui/TaskDetails";
import { useParams } from "react-router";

export default function TaskEdit() {
    const params = useParams();

    return (
        <div className="w-full h-screen bg-white/70 absolute top-0 left-0 flex justify-center items-center">
            <TaskDetails id={Number(params.id) || -1} />
        </div>
    )
}
