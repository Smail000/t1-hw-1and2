import { useReset } from "@/shared/lib/hooks/useReset";
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
}

const noneValue = "Нет";

export default function Dropdown({ title, items, onSwitch, className, resetKey }: DropdownProps) {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [dropdownState, setDropdownState] = useState<string>(noneValue);

    // Реализация сброса Dropdown
    const onReset = useCallback(() => {
        setDropdownState(noneValue)
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
                    className="absolute top-[calc(120%)] w-full items-center"
                    ref={dropdownMenuRef as never}
                >
                    {[noneValue, ...items].map(value =>
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
