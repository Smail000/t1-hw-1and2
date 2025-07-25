import { useCallback, useEffect, useState } from 'react';

type UseDropdownResetProps = {
    resetKey?: string | number;
    onReset: () => void;
};

export const useDropdownReset = ({ resetKey, onReset }: UseDropdownResetProps) => {
    useEffect(() => {
        onReset();
    }, [resetKey, onReset]);
};

export const useDropdownResetKey = () => {
    const [ resetKey, setResetKey ] = useState<number>(1);
    const dropdownReset = useCallback(() => setResetKey(prev => prev+1), []);
    return { resetKey, dropdownReset }
}