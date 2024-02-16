import { PropsWithChildren, MouseEventHandler } from "react";

type TabButtonProps = {
    onClick: MouseEventHandler<HTMLButtonElement>
}

export default function TabButton({ children, onClick }: PropsWithChildren<TabButtonProps>) {
    return (
        <li>
            <button onClick={onClick}>{children}</button>
        </li>
    );
}