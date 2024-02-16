import './Examples.css'

export type ExampleType = {
    components: ExamplesProps,
    jsx: ExamplesProps,
    props: ExamplesProps,
    state: ExamplesProps
}

export type ExamplesProps = {
    title: string,
    description: string,
    code: string
}

export default function Examples({ title, description, code }: ExamplesProps) {
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