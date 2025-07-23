
import { Weight, Color, Size } from "../../../app/styles";

type TextProps = {
    tag: "p" | "span",
    weight: Weight,
    color: Color,
    size: Size,
    children: React.ReactElement | string
}

export default function Text({ tag: Tag, weight, color, size, children }: TextProps) {

    return (
        <Tag
            style={{
                color: color,
                fontSize: size,
                fontWeight: weight
            }}
        >
            { children }
        </Tag>
    )
}
