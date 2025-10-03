# Context

**Summary (final)**

```js
import {createContext, useContext, useState} from "react"
//==============EX1
const ThemeContext = createContext(null)
App
<ThemeContext value={"dark"}></ThemeContext>
Panel
const theme = useContext(ThemeContext)
const className="panel-" + theme
//==============EX2
const ThemeContext = createContext(null)
App
const [theme, setTheme] = useState(null);
<ThemeContext value={{theme, setTheme}}></ThemeContext>
Button
const {theme, setTheme} = useContext(ThemeContext)
const className="button-" + theme
<Button onClick={() => {setTheme('light');}}>Switch a theme</Button>
//==============EX3
const UserContext = createContext(null)
MyApp
const [user, setUser] = useState(null);
<UserContext value={{user, setUser}}></UserContext>
LoginButton
const {user, setUser} = useContext(UserContext);
(user !== null) && (<p>You logged in as {user.name}.</p>)
<Button onClick={() => {setUser({ name: 'Advika' });}}>Log in as Advika</Button>
```

- Context lets the parent component make some information available to any component in the tree below
- Passing data deeply into the tree
- It doesn’t matter how many layers of components there are between the provider and the Button.

**References:**

- https://react.dev/reference/react/useContext
- https://react.dev/learn/passing-data-deeply-with-context

# Passing Data Deeply with Context

What “prop drilling” is
How to replace repetitive prop passing with context
Common use cases for context
Common alternatives to context

## Ex.1

**Before**

```js
<Section>
  <Heading level={3}>About</Heading>
  <Heading level={3}>Photos</Heading>
  <Heading level={3}>Videos</Heading>
</Section>
```

**After**

- It would be nice if you could pass the level prop to the <Section> component instead and remove it from the <Heading>.
- But how can the <Heading> component know the level of its closest <Section>? That would require some way for a child to “ask” for data from a parent element.

1. Create a context.
2. Use that context from the component that needs the data. (Heading will use LevelContext.)
3. Provide that context from the component that specifies the data.

```js
<Section level={3}>
  <Heading>About</Heading>
  <Heading>Photos</Heading>
  <Heading>Videos</Heading>
</Section>
```

### Final

App.js

```js
import Heading from './Heading.js';
import Section from './Section.js';

export default function Page() {
  return (
    <Section level={1}>
      <Heading>Title</Heading>
      <Section level={2}>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section level={3}>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Section level={4}>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}
```

**Section.js**

```js
import { LevelContext } from './LevelContext.js';

export default function Section({ level, children }) {
  return (
    <section className="section">
      <LevelContext value={level}>{children}</LevelContext>
    </section>
  );
}
```

**Heading.js**

```js
import { useContext } from 'react';
import { LevelContext } from './LevelContext.js';

export default function Heading({ children }) {
  const level = useContext(LevelContext);
  switch (level) {
    case 0:
      throw Error('Heading must be inside a Section!');
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    case 6:
      return <h6>{children}</h6>;
    default:
      throw Error('Unknown level: ' + level);
  }
}
```

**LevelContext.js**

```js
import { createContext } from 'react';
export const LevelContext = createContext(1);
```

## Recap

1. Create Context. `MyContext = createContext(0)`
2. Wrap children into <MyContext value={...}></MyContext>
3. `useContext(MyContext)` Hook to read it in any child component, no matter how deep.

```js
//1.
export const LevelContext = createContext(1);
//2.
export default function Heading({ children }) {
  const level = useContext(LevelContext);
  switch (level) {
    case 1:
      return <h1>{children}</h1>;
  }
}
//3.
function Section({ level, children }) {
  return (
    <section className="section">
      <LevelContext value={level}>{children}</LevelContext>
    </section>
  );
}
```

# useContext

https://react.dev/reference/react/useContext

- Passing data deeply into the tree
- It doesn’t matter how many layers of components there are between the provider and the Button.
- When a Button anywhere inside of Form calls useContext(ThemeContext), it will receive a context value.

**Update**

- Declare a state variable in the parent component, and pass the current state down as the context value to the provider.

```js
function MyPage() {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext value={theme}>
      <Form />
      <Button
        onClick={() => {
          setTheme('light');
        }}>
        Switch to light theme
      </Button>
    </ThemeContext>
  );
}
```

## Ex.2 - Update a context value

- https://react.dev/reference/react/useContext#updating-data-passed-via-context
- To update context, combine it with state.

```js
function MyPage() {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext value={theme}>
      <Form />
      <Button
        onClick={() => {
          setTheme('light');
        }}>
        Switch to light theme
      </Button>
    </ThemeContext>
  );
}
```

## Ex.3 - Updating a context value

- https://react.dev/reference/react/useContext#updating-a-value-via-context

```js
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);

export default function MyApp() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext value={theme}>
      <Form />
      <label>
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={(e) => {
            setTheme(e.target.checked ? 'dark' : 'light');
          }}
        />
        Use dark mode
      </label>
    </ThemeContext>
  );
}
```

<hr />

## Ex.3 - Updating a context value: Object

- `{ currentUser, setCurrentUser }`

```js
import { createContext, useContext, useState } from 'react';

const CurrentUserContext = createContext(null);

export default function MyApp() {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <CurrentUserContext
      value={{
        currentUser,
        setCurrentUser,
      }}>
      <Form />
    </CurrentUserContext>
  );
}

function Form({ children }) {
  return (
    <Panel title="Welcome">
      <LoginButton />
    </Panel>
  );
}

function LoginButton() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  if (currentUser !== null) {
    return <p>You logged in as {currentUser.name}.</p>;
  }

  return (
    <Button
      onClick={() => {
        setCurrentUser({ name: 'Advika' });
      }}>
      Log in as Advika
    </Button>
  );
}
function Panel({ title, children }) {}
function Button({ children, onClick }) {}
```

<hr />

## Challenge

**Challenge 1:**

[Challenge 1 of 1: Replace prop drilling with context ](https://react.dev/learn/passing-data-deeply-with-context#replace-prop-drilling-with-context)

- [Fork](https://codesandbox.io/p/sandbox/qrsw8c?file=%2Fsrc%2FApp.js)
- [Fork Answer](https://codesandbox.io/p/sandbox/np5lzm?file=%2Fsrc%2FApp.js)
- 9/28,9/30

<hr />

**Question 1:**

- Create, update and use context (currentUser, setCurrentUser)

**Answer**

```js
import {createContext, useContext, useState} from "react"
//==============EX3
const CurrentUserContext = createContext(null)
MyApp
const [currentUser, setCurrentUser] = useState(null);
<CurrentUseContext value={{currentUser, setCurrentUser}}></CurrenUserContext>
LoginButton
const {currenUser, setCurrentUser} = useContext(CurrentUserContext);
(currentUser !== null) && (<p>You logged in as {currentUser.name}.</p>)
<Button onClick={() => {setCurrentUser({ name: 'Advika' });}}>Log in as Advika</Button>
```

<hr />
