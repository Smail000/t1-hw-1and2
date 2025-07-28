
// Утилиты для работы с localStorage
export const loadState = <T>(key: string): T | undefined => {
    try {
        const serialized = localStorage.getItem(key);
        return serialized ? JSON.parse(serialized) : undefined;
    } catch (e) {
        console.warn('Failed to load state', e);
        return undefined;
    }
};

export const saveState = <T>(key: string, value: T) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.warn('Failed to save state', e);
    }
};