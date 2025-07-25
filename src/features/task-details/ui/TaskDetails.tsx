import { IconButton } from "@/shared/ui/button"
import { Dropdown } from "@/shared/ui/dropdown"
import { Input } from "@/shared/ui/input"
import { Layout } from "@/shared/ui/layout"
import { Text } from "@/shared/ui/typography"
import { useNavigate } from "react-router"

type TaskDetailsProps = {
    id: number
}

export default function TaskDetails({ id }: TaskDetailsProps) {
    const navigate = useNavigate();

    return (
        <Layout as="div" color="light" padding="medium" gap="medium" direction="column" className="min-w-[410px]">
            <Input placeholder="Название..." className="w-full" />
            <Input placeholder="Описание..." className="w-full" />
            
            <div className="flex flex-row justify-between w-full items-center">
                <Text tag="span" size="large" weight="medium">Приоритет:</Text>
                <Dropdown title="Приоритет" items={["Low", "Medium", "High"]}/>
            </div>
            <div className="flex flex-row justify-between w-full items-center">
                <Text tag="span" size="large" weight="medium">Категория:</Text>
                <Dropdown title="Категория" items={["Bug", "Feature", "Documentation", "Refactor", "Test"]}/>
            </div>
            <div className="flex flex-row justify-between w-full items-center">
                <Text tag="span" size="large" weight="medium">Статус:</Text>
                <Dropdown title="Статус" items={["ToDo", "In Progress", "Done"]}/>
            </div>

            <div className="flex flex-row justify-between w-full items-center">
                <IconButton as="X" bgcolor="dark" onClick={() => navigate(-1)}/>
                <IconButton as="Check" bgcolor="dark"onClick={() => navigate(-1)}/>
            </div>
        </Layout>
    )
}
