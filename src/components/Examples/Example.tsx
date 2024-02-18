import './Examples.css'

export type ExampleType = {
    components: ExampleProps,
    jsx: ExampleProps,
    props: ExampleProps,
    state: ExampleProps
}

export type ExampleProps = {
    title: string,
    description: string,
    code: string
}

export default function Example({ title, description, code }: ExampleProps) {
    return (
        <div id="tab-content">
            <h3>{title}</h3>
            <p>{description}</p>
            <pre>
                <code>{code}</code>
            </pre>
        </div>
    );
}