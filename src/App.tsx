import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcepts/CoreConcepts';
import { CORE_CONCEPTS } from './data';
import TabButton from './components/TabButton';

function App() {
  function handleClick() {
    console.log('Hello World');
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
              <TabButton onClick={handleClick}>Components</TabButton>
              <TabButton onClick={handleClick}>JSX</TabButton>
              <TabButton onClick={handleClick}>Props</TabButton>
              <TabButton onClick={handleClick}>State</TabButton>
            </menu>
          </section>
        </main>
      </div>
    </>
  );
}

export default App
