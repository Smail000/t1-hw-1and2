
import { Weight, Color, Size } from "../../../app/styles";

type TitleProps = {
    tag: "h1" | "h3",
    weight: Weight,
    color: Color,
    size: Size,
    children: React.ReactElement | string
}

export default function Title({ tag: Tag, weight, color, size, children }: TitleProps) {

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
