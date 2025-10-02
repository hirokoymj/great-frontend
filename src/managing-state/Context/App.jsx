import { createContext, useContext } from 'react';
import './App.css';

const ThemeContext = createContext(null);

export default function App() {
  return (
    <ThemeContext value="dark">
      <Form />
    </ThemeContext>
  );
}

function Form() {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

//className = "panel" + theme
function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  return (
    <section className={`panel-${theme}`}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}
//className = "button" + theme
function Button({ children }) {
  const theme = useContext(ThemeContext);
  return <section className={`button-${theme}`}>{children}</section>;
}
