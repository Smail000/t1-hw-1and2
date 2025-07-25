
const Direction = {
    row: "flex-row",
    column: "flex-col"
}

const Padding = {
    small: "py-[8px] px-[12px]",
    base: "py-[12px] px-[16px]",
    medium: "p-[24px]",
    large: "p-[40px]"
}

const Gap = {
    none: "gap-[0px]",
    base: "gap-[8px]",
    medium: "gap-[16px]"
}

const Color = {
    white: "bg-[color:#fff]",
    light: "bg-[color:#E9F7FF]",
    dark: "bg-[color:#C1DCFF]"
}

type As = "div" | "button"

const Hover = {
    white: "",
    light: "hover:bg-[color:#94BED7]",
    dark: "hover:bg-[color:#7DA0CA]"
}

type LayoutProps = {
    children: React.ReactElement | React.ReactElement[] | string
    direction?: keyof typeof Direction
    padding?: keyof typeof Padding
    gap?: keyof typeof Gap
    color?: keyof typeof Color
    as?: As
    doHover?: boolean
    doWrap?: boolean
    onClick?: (React.MouseEventHandler<HTMLDivElement> & React.MouseEventHandler<HTMLButtonElement>)
    className?: string,
    ref?: never
}

export default function Layout({
    children, direction="row", padding="base", gap="base", color="light",
    as="div", doHover=false, doWrap=false, onClick, className="", ref
}: LayoutProps) {
    const Component = as;
    return (
        <Component className={`flex rounded-[16px] w-fit h-fit select-none transition-all ` +
            `${Direction[direction]} ${Padding[padding]} ${Gap[gap]} ` +
            `${Color[color]} ${doHover && Hover[color]} ${doWrap && "flex-wrap"} ${className}`}
            onClick={onClick}
            ref={ref as never}
        >
            { children }
        </Component>
    )
}
