
import { FontWeight, FontSize, baseFontColor } from "./fonts";

type TextProps = {
    tag: "p" | "span",
    weight: keyof typeof FontWeight
    size: keyof typeof FontSize,
    children: React.ReactElement | string
}

export default function Text({ tag: Tag, weight, size, children }: TextProps) {

    return (
        <Tag className={
                `${FontWeight[weight]} ` +
                `${FontSize[size]} ` +
                `${baseFontColor}`
            }
        >
            { children }
        </Tag>
    )
}
