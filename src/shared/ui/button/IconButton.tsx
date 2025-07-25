import { Icon } from "@/shared/ui/icon"

const BgColor = {
    base: "bg-[color:#E9F7FF]",
    dark: "bg-[color:#C1DCFF]"
}

type IconButtonProps = {
    as: Parameters<typeof Icon>["0"]["as"],
    bgcolor: keyof typeof BgColor
}

export default function IconButton({ as, bgcolor }: IconButtonProps) {

    return (
        <button className={`size-[48px] flex items-center justify-center ${BgColor[bgcolor]} rounded-[16px]`}>
            <Icon as={as} />
        </button>
    )
}
