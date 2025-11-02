import { useState } from 'react';
import './styles.css';

export default function AccordionBefore() {
  const [openSection, setOpenSection] = useState({
    html: false,
    css: false,
    js: false,
  });

  const handleClick = (section) => {
    setOpenSection((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div>
      <div>
        <div onClick={() => handleClick('html')}>
          HTML <span aria-hidden={true} className="accordion-icon" />
        </div>
        {openSection.html === true && (
          <p style={{ margin: '10px' }}>
            The HyperText Markup Language or HTML is the standard markup
            language for documents designed to be displayed in a web browser.
          </p>
        )}
      </div>
      <div>
        <div onClick={() => handleClick('css')}>
          CSS <span aria-hidden={true} className="accordion-icon" />
        </div>
        {openSection.css === true && (
          <p style={{ margin: '10px' }}>
            Cascading Style Sheets is a style sheet language used for describing
            the presentation of a document written in a markup language such as
            HTML or XML.
          </p>
        )}
      </div>
      <div>
        <div onClick={() => handleClick('js')}>
          JavaScript <span aria-hidden={true} className="accordion-icon" />
        </div>
        {openSection.js === true && (
          <p style={{ margin: '10px' }}>
            JavaScript, often abbreviated as JS, is a programming language that
            is one of the core technologies of the World Wide Web, alongside
            HTML and CSS.
          </p>
        )}
      </div>
    </div>
  );
}

///set function with object
