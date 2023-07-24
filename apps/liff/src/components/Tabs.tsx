import {
    Children,
    DetailedHTMLProps,
    FC,
    HTMLAttributes,
    PropsWithChildren,
    ReactElement,
    isValidElement,
    useEffect,
} from 'react';
import { useTabs } from '../contexts/TabsContext';

type TabProps = PropsWithChildren &
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {};

const Tab: FC<TabProps> = ({ children, ...props }): ReactElement => {
    return <section {...props}>{children}</section>;
};

type TabsProps = PropsWithChildren &
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
        tabs: object;
        defaultTab: string;
        onTabSelect: (tab: string) => void;
        children?:
            | React.ReactElement<TabProps>[]
            | React.ReactElement<TabProps>;
    };

const Tabs: FC<TabsProps> = ({
    tabs,
    defaultTab,
    onTabSelect,
    children,
    className,
    ...props
}): ReactElement => {
    const { currentTab, setCurrentTab } = useTabs();

    useEffect(() => {
        setCurrentTab(defaultTab);
    }, [setCurrentTab, defaultTab]);

    return (
        <div className={`tabs ${className}`} {...props}>
            <ul className="mb-6 flex flex-row justify-around items-center">
                {Object.values(tabs).map((tabValue, index) => (
                    <li
                        className={`${
                            currentTab === tabValue ? '' : 'text-neutral-500'
                        }`}
                        key={index}
                        onClick={() => onTabSelect(tabValue)}
                    >
                        {tabValue}
                    </li>
                ))}
            </ul>
            <div className="tabs-body">
                {children &&
                    Children.map(
                        children,
                        (child: React.ReactElement<TabProps>) => {
                            if (
                                !isValidElement(child) ||
                                typeof child.type !== 'function' ||
                                child.type.name !== 'Tab'
                            ) {
                                throw new Error(
                                    'The child components should be of type Tab'
                                );
                            }
                            return child.props.id === currentTab ? child : null;
                        }
                    )}
            </div>
        </div>
    );
};

export { Tabs, Tab };
