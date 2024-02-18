import { PropsWithChildren, MouseEventHandler } from "react";

type TabButtonProps = {
    onClick: MouseEventHandler<HTMLButtonElement>,
    isSelected: boolean
}

export default function TabButton({ onClick, isSelected, children }: PropsWithChildren<TabButtonProps>) {
    return (
        <li>
            <button className={isSelected ? "active" : ""} onClick={onClick}>{children}</button>
        </li>
    );
}