import { useReset } from "@/shared/lib/hooks";
import { Icon } from "@/shared/ui/icon";
import { Layout } from "@/shared/ui/layout";
import { Text } from "@/shared/ui/typography";
import { useCallback, useEffect, useRef, useState } from "react";


type DropdownProps = {
    title: string,
    items: string[]
    onSwitch?: (item: string) => void;
    className?: string,
    resetKey?: number
    defaultValue?: string
    disallowNoneValue?: boolean
}

const noneValue = "Нет";

export default function Dropdown({ title, items, onSwitch, className, resetKey, defaultValue, disallowNoneValue=false }: DropdownProps) {
    defaultValue = ( items.includes(defaultValue as string) ? defaultValue : noneValue ) as string
    if (disallowNoneValue && defaultValue === noneValue) defaultValue = items[0];

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [dropdownState, setDropdownState] = useState<string>(defaultValue);

    // Реализация сброса Dropdown
    const onReset = useCallback(() => {
        setDropdownState(defaultValue)
    }, [])

    useReset({
        resetKey,
        onReset: onReset
    });

    // Закрытие Dropdown при нажатии на людой другой элемент
    const dropdownRef = useRef<HTMLDivElement>(null);
    const dropdownMenuRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
          dropdownMenuRef.current && !dropdownMenuRef.current.contains(event.target as Node)) {
            setIsOpen(false);
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
      }, []);

    return (
        <div className="relative">
            <Layout as="button" direction="row" padding="base" color="dark" gap="base" doHover onClick={() => {
                setIsOpen(!isOpen);
            }} className={`justify-between ${className}`} ref={dropdownRef as never}>
                <Text size="medium" tag="span" weight="medium" unselectible>{
                    dropdownState === noneValue ? title : dropdownState
                }</Text>
                <Icon as={isOpen ? "ChevronUp" : "ChevronDown"} />

            </Layout>
            {
                isOpen ? <Layout as="div" color="dark" padding="base" gap="base" direction="column"
                    className="absolute top-[calc(120%)] w-fit items-center z-10"
                    ref={dropdownMenuRef as never}
                >
                    {( !disallowNoneValue ? [noneValue, ...items] : items ).map(value =>
                        <Layout as="button" padding="small" doHover color="dark" className="w-full flex justify-center" key={value}
                            onClick={() => {
                                setIsOpen(false);
                                setDropdownState(value);
                                onSwitch?.(value);
                            }}
                        >
                            <Text tag="span" weight="medium" size="base">{value}</Text>
                        </Layout>)
                    }
                </Layout> : <></>
            }
        </div>
    )
}
