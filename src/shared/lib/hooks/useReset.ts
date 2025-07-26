import { useCallback, useEffect, useState } from 'react';

type UseDropdownResetProps = {
    resetKey?: string | number;
    onReset: () => void;
};

/* Хук для автоматического вызого функции при изменении данных */
export const useReset = ({ resetKey, onReset }: UseDropdownResetProps) => {
    useEffect(() => {
        onReset();
    }, [resetKey, onReset]);
};

/* Хук используется в связке с useReset,
    нужен для получения ключа и функции для его изменения */
export const useResetKey = () => {
    const [ key, setResetKey ] = useState<number>(1);
    const trigger = useCallback(() => setResetKey(prev => prev+1), []);
    return { key, trigger }
}