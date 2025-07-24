import Check from '@/shared/assets/icons/Check.svg';
import Chevron from '@/shared/assets/icons/Chevron.svg';
import Edit from '@/shared/assets/icons/Edit.svg';
import Search from '@/shared/assets/icons/Search.svg';
import X from '@/shared/assets/icons/X.svg';

const icons = { Check, Chevron, Edit, Search, X };

type TitleProps = {
    as: keyof typeof icons
}

export default function Icon({ as }: TitleProps) {

    return (
        <img src={icons[as]} className='size-[24px] select-none' />
    )
}
