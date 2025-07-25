
import { FontWeight, FontSize, baseFontColor } from "./fonts";

type TextProps = {
    tag: "p" | "span",
    weight: keyof typeof FontWeight
    size: keyof typeof FontSize
    children?: React.ReactElement | string
    unselectible?: boolean
    doWrap?: boolean
}

export default function Text({ tag: Tag, weight, size, children, unselectible=false, doWrap=false }: TextProps) {

    return (
        <Tag className={
                `${FontWeight[weight]} ` +
                `${FontSize[size]} ` +
                `${baseFontColor} ` +
                `${unselectible && "select-none"} ` +
                `${ doWrap && "wrap-anywhere" }`
            }
        >
            { children }
        </Tag>
    )
}
