
import { FontSize, FontWeight } from "@/app/styles"
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
        </>
    )
}
