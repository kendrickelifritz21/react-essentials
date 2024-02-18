import { PropsWithChildren } from "react";

export type SectionProps = {
    title: string,
    id: string
}

export default function Section({ title, id, children }: PropsWithChildren<SectionProps>) {
    return (
        <section id={id}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}