import Check from '@/shared/assets/icons/Check.svg';
import Chevron from '@/shared/assets/icons/Chevron.svg';
import Edit from '@/shared/assets/icons/Edit.svg';
import Search from '@/shared/assets/icons/Search.svg';
import X from '@/shared/assets/icons/X.svg';
import Trash from "@/shared/assets/icons/Trash.svg"
import Plus from "@/shared/assets/icons/Plus.svg"

const icons = { Check, ChevronDown: Chevron, ChevronUp: Chevron, Edit, Search, X, Trash, Plus };

type TitleProps = {
    as: keyof typeof icons
}

export default function Icon({ as }: TitleProps) {

    return (
        <img src={icons[as]} className={`size-[24px] select-none` +
            `pointer-events-none ${ as === "ChevronUp" && "scale-y-[-1]" }`}
            alt={`${as} icon`}
        />
    )
}
