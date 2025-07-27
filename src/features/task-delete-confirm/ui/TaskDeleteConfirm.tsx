import { IconButton } from "@/shared/ui/button"
import { Layout } from "@/shared/ui/layout"
import { Text } from "@/shared/ui/typography"

type TaskDeleteConfirmProps = {
    onConfirm: () => void
    onRefute: () => void
}

export default function TaskDeleteConfirm({ onConfirm, onRefute }: TaskDeleteConfirmProps) {
    return (
        <div className="w-full h-screen bg-white/70 absolute top-0 left-0 flex justify-center items-center">
            <Layout as="div" color="light" padding="medium" gap="medium" direction="column" className="items-center !w-[400px]">
                <Text tag="span" size="large" weight="medium">Вы уверены, что ходите удалить эту задачу?</Text>
                <div className="flex flex-row flex-wrap gap-[24px] justify-between w-full">
                    <IconButton as="X" bgcolor="dark" onClick={onRefute}/>
                    <IconButton as="Check" bgcolor="dark" onClick={onConfirm}/>
                </div>
            </Layout>
        </div>
    )
}
