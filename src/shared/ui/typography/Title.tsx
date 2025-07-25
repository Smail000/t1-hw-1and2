
import { FontWeight, FontSize, baseFontColor } from "./fonts";

type TitleProps = {
    tag: "h1" | "h3",
    weight: keyof typeof FontWeight,
    size: keyof typeof FontSize,
    children: React.ReactElement | string
    doWrap?: boolean
}

export default function Title({ tag: Tag, weight, size, children, doWrap=false }: TitleProps) {

    return (
        <Tag className={
                `${FontWeight[weight]} ` +
                `${FontSize[size]} ` +
                `${baseFontColor} ` +
                `${doWrap && "wrap-anywhere"}`
            }
        >
            { children }
        </Tag>
    )
}
