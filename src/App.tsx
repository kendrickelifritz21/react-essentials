import reactImg from './assets/react-core-concepts.png'
import { CORE_CONCEPTS } from './data';

const reactDescriptions: string[] = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max: number) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

export type CoreConceptProps = {
  title: string
  description: string
  image: string
}

function CoreConcept({title, description, image} : CoreConceptProps) {
  return (
    <li>
      <img src={image} alt={title}></img>
      <h3>{title}</h3>
      <p>{description}</p>
  </li>
  );
}

function App() {
  return (
    <>
      <div>
        <Header />
        <main>
          <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
              {CORE_CONCEPTS.map((coreConcept) => (
                <CoreConcept {...coreConcept}/>
              ))}
            </ul>
          </section>
          <br />
          <br />
          <h2>Time to get started!</h2>
        </main>
      </div>
    </>
  );
}

export default App
