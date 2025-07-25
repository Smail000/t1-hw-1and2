import type { TaskCategory, TaskPriority, TaskStatus } from "@/entities/task/model/task.types"
import { Chip } from "@/entities/task/ui"
import { IconButton } from "@/shared/ui/button"
import { Layout } from "@/shared/ui/layout"
import { Text, Title } from "@/shared/ui/typography"

type TaskItemProps = {
    id: number
    title: string
    discription?: string
    chipList: [ TaskStatus, TaskCategory, TaskPriority ]
    onEdit: (id: number) => void
}

export default function TaskItem({ id, title, discription, chipList, onEdit }: TaskItemProps) {
    return (
        <Layout as="div" color="light" direction="column" padding="large" gap="medium" className="max-w-[420px] w-full">
            <Title size="large" tag="h3" weight="semibold" doWrap>{ title }</Title>
            { discription ? (<Text size="base" tag="p" weight="medium" doWrap>{ discription }</Text>) : <></> }
            <div className="flex flex-row flex-wrap gap-[8px]">
                <Chip as={chipList[0]}/>
                <Chip as={chipList[1]}/>
                <Chip as={chipList[2]}/>
            </div>
            <IconButton as="Edit" bgcolor="dark" onClick={() => onEdit(id)}/>
        </Layout>
    )
}