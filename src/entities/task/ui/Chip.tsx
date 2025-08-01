import type { TaskCategory, TaskPriority, TaskStatus } from "@/entities/task/model/task.types"
import { Layout } from "@/shared/ui/layout"
import { Text } from "@/shared/ui/typography"

type ChipProps = {
    as: TaskCategory | TaskStatus | TaskPriority
}

export default function Chip({ as }: ChipProps) {
    return (
        <Layout color="dark" padding="small">
            <Text size="base" tag="span" weight="medium" unselectible>{ as }</Text>
        </Layout>
    )
}
