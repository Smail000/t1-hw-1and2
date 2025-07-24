
import { FontWeight, FontSize, fontColor } from "@/app/styles";

type TextProps = {
    tag: "p" | "span",
    weight: FontWeight
    size: FontSize,
    children: React.ReactElement | string
}

export default function Text({ tag: Tag, weight, size, children }: TextProps) {

    return (
        <Tag className={`${weight} ${size} ${fontColor}`}>
            { children }
        </Tag>
    )
}
