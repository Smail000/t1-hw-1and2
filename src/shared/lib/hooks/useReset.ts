import { useCallback, useEffect, useState } from 'react';

type UseDropdownResetProps = {
    resetKey?: string | number;
    onReset: () => void;
};

export const useReset = ({ resetKey, onReset }: UseDropdownResetProps) => {
    useEffect(() => {
        onReset();
    }, [resetKey, onReset]);
};

export const useResetKey = () => {
    const [ key, setResetKey ] = useState<number>(1);
    const trigger = useCallback(() => setResetKey(prev => prev+1), []);
    return { key, trigger }
}