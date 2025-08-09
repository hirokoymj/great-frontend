import { useState } from 'react';

const text = {
  html: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',
  css: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.',
  js: 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
};
const activeStyle = { color: 'blue' };
const inactiveStyle = { color: 'white' };

export default function Tabs() {
  const [active, setActive] = useState('html');

  const handleChangeTab = (tabName) => {
    setActive(tabName);
  };

  return (
    <div>
      <div>
        <button
          onClick={() => handleChangeTab('html')}
          style={active === 'html' ? activeStyle : inactiveStyle}>
          HTML
        </button>
        <button
          onClick={() => handleChangeTab('css')}
          style={active === 'css' ? activeStyle : inactiveStyle}>
          CSS
        </button>
        <button
          onClick={() => handleChangeTab('js')}
          style={active === 'js' ? activeStyle : inactiveStyle}>
          JavaScript
        </button>
      </div>
      <div>{active && <p>{text[active]}</p>}</div>
    </div>
  );
}

//   <div>
//     {active === 'html' && (
//       <p>
//         The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed
//         in a web browser.
//       </p>
//     )}
//     {active === 'css' && (
//       <p>
//         Cascading Style Sheets is a style sheet language used for describing the presentation of a document written
//         in a markup language such as HTML or XML.
//       </p>
//     )}
//     {active === 'js' && (
//       <p>
//         JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the
//         World Wide Web, alongside HTML and CSS.
//       </p>
//     )}
//   </div>
