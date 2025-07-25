import { useReset } from "@/shared/lib/hooks"
import { Icon } from "@/shared/ui/icon"
import { Layout } from "@/shared/ui/layout"
import { useCallback, useState } from "react"

type InputProps = {
    icon?: Parameters<typeof Icon>["0"]["as"]
    placeholder?: string
    onChange?: (value: string) => void
    resetKey?: number
    className?: string
}

export const placeholderFontColor = "placeholder-[color:#4F6D9A]"

export default function Input({ icon, placeholder, onChange, resetKey, className }: InputProps) {
    const [ inputValue, setInputValue ] = useState<string>("");

    // Реализация сброса Dropdown
    const onReset = useCallback(() => {
        setInputValue("")
    }, [])

    useReset({
        resetKey,
        onReset: onReset
    });

    return (
        <Layout as="div" color="dark" doHover padding="base" direction="row" gap="base" className={className}>
            { icon ? <Icon as={icon} /> : <></> }
            <input type="text"
                placeholder={placeholder}
                className={`focus:outline-none focus:border-transparent ${placeholderFontColor}`}
                value={inputValue}
                onChange={event => {
                    setInputValue(event.target.value);
                    onChange?.(event.target.value);
                }}
            />
        </Layout>
    )
}
