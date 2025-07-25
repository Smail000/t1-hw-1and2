
import { FontSize, FontWeight } from "@/app/styles"
import { IconButton } from "@/shared/ui/button";
import { Title, Text } from "@/shared/ui/typography";

export function HomePage() {
    return (
        <>
            <Title
                tag="h1"
                weight={FontWeight.semibold}
                size={FontSize.large}
            >Documentation for some app</Title>
            <Text
                tag="p"
                weight={FontWeight.medium}
                size={FontSize.base}
            >Тут находиться некоторая текст-рыба для описания задачи, но проблема в том, что описание не несет никакой смысловой нагрузки в данном случае, а вообще она должна быть.</Text>
            <div className="flex flex-row p-[10px] gap-[10px]">
                <IconButton as="X" bgcolor="base" />
                <IconButton as="Check" bgcolor="base" />
                <IconButton as="ChevronDown" bgcolor="dark" />
                <IconButton as="ChevronUp" bgcolor="dark" />
                <IconButton as="Search" bgcolor="dark" onClick={() => {console.log(1)}} />
            </div>
        </>
    )
}
