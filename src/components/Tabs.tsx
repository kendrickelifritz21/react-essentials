import React, { PropsWithChildren, ReactElement} from "react";

export type TabsProps = {
    buttons: ReactElement,
    ButtonsContainer?: keyof React.JSX.IntrinsicElements
}

export default function Tabs({ buttons, ButtonsContainer="menu", children }: PropsWithChildren<TabsProps>) {
    return <>
        <ButtonsContainer>
            {buttons}
        </ButtonsContainer>
        {children}
    </>
}