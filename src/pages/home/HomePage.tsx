
import { useDropdownResetKey } from "@/shared/lib/hooks/useDropdownReset";
import { IconButton } from "@/shared/ui/button";
import { Dropdown } from "@/shared/ui/dropdown";
import { Layout } from "@/shared/ui/layout";
import { Title, Text } from "@/shared/ui/typography";

export function HomePage() {

    const { resetKey, dropdownReset } = useDropdownResetKey();

    return (
        <>
            <Title
                tag="h1"
                weight="semibold"
                size="large"
            >Documentation for some app</Title>
            <Text
                tag="p"
                weight="medium"
                size="base"
            >Тут находиться некоторая текст-рыба для описания задачи, но проблема в том, что описание не несет никакой смысловой нагрузки в данном случае, а вообще она должна быть.</Text>
            <Layout direction="row" padding="base" gap="base" color="light" className="items-center">
                <IconButton as="X" bgcolor="base" />
                <IconButton as="Check" bgcolor="base" />
                <IconButton as="ChevronDown" bgcolor="dark" />
                <IconButton as="ChevronUp" bgcolor="dark" />
                <IconButton as="X" bgcolor="dark" onClick={dropdownReset} />
                <Dropdown title="Приоритет" items={[ "Low", "Medium", "High" ]} className="min-w-[200px]" resetKey={resetKey}/>
                <Layout color="dark" padding="small">
                    <Text size="base" tag="span" weight="medium" unselectible>In Progress</Text>
                </Layout>
            </Layout>
        </>
    )
}
// <div className="flex flex-row p-[10px] gap-[10px]">