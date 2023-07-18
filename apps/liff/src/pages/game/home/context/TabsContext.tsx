import { NextComponentType, NextPageContext } from 'next';
import { useContext, useState, createContext } from 'react';

type TabContextType = {
    currentTab: string | null;
    setCurrentTab: React.Dispatch<React.SetStateAction<string | null>>;
};

const ITabsContextState = {
    currentTab: null,
    setCurrentTab: () => {},
};

export const TabsContext = createContext<TabContextType>(ITabsContextState);

export const useTabs = () => {
    const { currentTab, setCurrentTab } = useContext(TabsContext);

    if (!TabsContext) {
        throw new Error('useTabs should be used inside TabsProvider');
    }

    return {
        currentTab,
        setCurrentTab,
    };
};
