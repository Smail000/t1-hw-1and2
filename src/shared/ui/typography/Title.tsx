
import { FontWeight, FontSize, baseFontColor } from "./fonts";

type TitleProps = {
    tag: "h1" | "h3",
    weight: keyof typeof FontWeight,
    size: keyof typeof FontSize,
    children: React.ReactElement | string
}

export default function Title({ tag: Tag, weight, size, children }: TitleProps) {

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
