import { useState } from 'react';

import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcepts/CoreConcepts';
import { CORE_CONCEPTS, EXAMPLES } from './data';
import TabButton from './components/Examples/TabButton';
import Examples, { ExamplesProps } from './components/Examples/Examples'

function App() {
  const [selectedTopic, setSelectedTopic] = useState<ExamplesProps>();

  function handleClick(selectedButton: ExamplesProps) {
    setSelectedTopic(selectedButton);
  }

  return (
    <>
      <div>
        <Header />
        <main>
          <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
              {CORE_CONCEPTS.map((coreConcept) => (
                <CoreConcept {...coreConcept} />
              ))}
            </ul>
          </section>
          <section id="examples">
            <h2>Examples</h2>
            <menu>
              <TabButton isSelected={selectedTopic === EXAMPLES.components} onClick={() => handleClick(EXAMPLES.components)}>Components</TabButton>
              <TabButton isSelected={selectedTopic === EXAMPLES.jsx} onClick={() => handleClick(EXAMPLES.jsx)}>JSX</TabButton>
              <TabButton isSelected={selectedTopic === EXAMPLES.props} onClick={() => handleClick(EXAMPLES.props)}>Props</TabButton>
              <TabButton isSelected={selectedTopic === EXAMPLES.state} onClick={() => handleClick(EXAMPLES.state)}>State</TabButton>
            </menu>
            {!selectedTopic ? (
              <p>Please select a topic</p>
            ) : (
              <Examples {...selectedTopic}></Examples>
            )}
          </section>
        </main>
      </div>
    </>
  );
}

export default App
