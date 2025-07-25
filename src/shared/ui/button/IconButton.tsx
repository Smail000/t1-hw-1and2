import { Icon } from "@/shared/ui/icon"

const BgColor = {
    base: "bg-[color:#E9F7FF] hover:bg-[color:#94BED7]",
    dark: "bg-[color:#C1DCFF] hover:bg-[color:#7DA0CA]"
}

type IconButtonProps = {
    as: Parameters<typeof Icon>["0"]["as"],
    bgcolor: keyof typeof BgColor,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function IconButton({ as, bgcolor, onClick }: IconButtonProps) {

    return (
        <button className={`size-[48px] flex items-center select-none transition-all ` +
            `justify-center ${BgColor[bgcolor]} rounded-[16px]`}
            onClick={onClick}
        >
            <Icon as={as} />
        </button>
    )
}
