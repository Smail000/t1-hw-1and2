
import { FontSize, FontWeight } from "@/app/styles"
import { Icon } from "@/shared/ui/icon";
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
                <Icon as="Check" />
                <Icon as="Chevron" />
            </div>
        </>
    )
}
