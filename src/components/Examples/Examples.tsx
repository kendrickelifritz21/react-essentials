import { useState, ReactElement } from 'react';

import TabButton from "./TabButton"
import Example, { ExampleProps } from "./Example"
import { EXAMPLES } from "../../data"
import Section from '../Section';
import Tabs from '../Tabs';

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState<ExampleProps>();

  function handleClick(selectedButton: ExampleProps) {
    setSelectedTopic(selectedButton);
  }

  let tabContent: ReactElement = <p>Please select a topic</p>

  if (selectedTopic) {
    tabContent = (
      <Example {...selectedTopic}></Example>
    )
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton isSelected={selectedTopic === EXAMPLES.components} onClick={() => handleClick(EXAMPLES.components)}>Components</TabButton>
            <TabButton isSelected={selectedTopic === EXAMPLES.jsx} onClick={() => handleClick(EXAMPLES.jsx)}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === EXAMPLES.props} onClick={() => handleClick(EXAMPLES.props)}>Props</TabButton>
            <TabButton isSelected={selectedTopic === EXAMPLES.state} onClick={() => handleClick(EXAMPLES.state)}>State</TabButton>
          </>
        }>
        {tabContent}
      </Tabs>

    </Section>
  );
}