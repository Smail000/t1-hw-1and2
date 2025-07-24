
import { FontWeight, FontSize, fontColor } from "@/app/styles";

type TitleProps = {
    tag: "h1" | "h3",
    weight: FontWeight,
    size: FontSize,
    children: React.ReactElement | string
}

export default function Title({ tag: Tag, weight, size, children }: TitleProps) {

    return (
        <Tag className={`${weight} ${size} ${fontColor}`}>
            { children }
        </Tag>
    )
}
