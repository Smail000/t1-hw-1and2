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
    defaultValue?: string
}

export const placeholderFontColor = "placeholder-[color:#4F6D9A]"

export default function Input({ icon, placeholder, onChange, resetKey, className, defaultValue="" }: InputProps) {
    const [ inputValue, setInputValue ] = useState<string>(defaultValue);

    // Реализация сброса Input
    const onReset = useCallback(() => {
        setInputValue(defaultValue)
    }, [])
    
    /*
        Тут defaultValue не указан в зависимостях, потому что 
        в фичах defaultValue и активное значение совпадают,
        что вызвало бы постоянное стирание поля
    */

    // Hook для сброса состояния по вызову
    useReset({
        resetKey,
        onReset: onReset
    });

    return (
        <Layout as="div" color="dark" doHover padding="base" direction="row" gap="base" className={className}>
            { icon ? <Icon as={icon} /> : <></> }
            <input type="text"
                placeholder={placeholder}
                className={`focus:outline-none focus:border-transparent w-full ${placeholderFontColor}`}
                value={inputValue}
                onChange={event => {
                    setInputValue(event.target.value);
                    onChange?.(event.target.value);
                }}
            />
        </Layout>
    )
}
