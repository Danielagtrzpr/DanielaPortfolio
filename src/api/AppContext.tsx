import { createContext } from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { ScrollPosition } from '../types';

type AppContextProviderProps = {
    children: React.ReactNode;
};

type AppContextType = {
    scrollPosition: ScrollPosition;
};

export const AppContext = createContext({} as AppContextType);

export const AppContextProvider = ({ children }: AppContextProviderProps) => {

    const scrollPosition = useScrollPosition(); 
    
    return (
        <AppContext.Provider value={{ scrollPosition }}>
            {children}
        </AppContext.Provider>
    );
};
