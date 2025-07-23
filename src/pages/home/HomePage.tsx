
import { Color, Size, Weight } from "../../app/styles"
import Title from "../../shared/ui/typography"

export function HomePage() {
    return (
        <Title
            tag="h1"
            weight={Weight.semibold}
            color={Color.darkblue}
            size={Size["extra-large"]}
        >Hello, world!</Title>
    )
}
