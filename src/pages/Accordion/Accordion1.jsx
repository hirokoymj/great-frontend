import { useState } from 'react';

const useAccordionToggle = () => {
  const [section, setSection] = useState({
    html: false,
    css: false,
    js: false,
  });

  const toggle = (section) => {
    setSection((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return [section, toggle];
};

export default function Accordion1() {
  const [section, toggle] = useAccordionToggle();

  return (
    <div>
      <div>
        <div onClick={() => toggle('html')}>
          HTML <span aria-hidden={true} className="accordion-icon" />
        </div>
        {section['html'] && (
          <div>
            The HyperText Markup Language or HTML is the standard markup
            language for documents designed to be displayed in a web browser.
          </div>
        )}
      </div>
      <div>
        <div onClick={() => toggle('css')}>
          CSS <span aria-hidden={true} className="accordion-icon" />
        </div>
        {section['css'] && (
          <div>
            Cascading Style Sheets is a style sheet language used for describing
            the presentation of a document written in a markup language such as
            HTML or XML.
          </div>
        )}
      </div>
      <div>
        <div onClick={() => toggle('js')}>
          JavaScript <span aria-hidden={true} className="accordion-icon" />
        </div>
        {section['js'] && (
          <div>
            JavaScript, often abbreviated as JS, is a programming language that
            is one of the core technologies of the World Wide Web, alongside
            HTML and CSS.
          </div>
        )}
      </div>
      <div style={{ display: `${section['html']} ? "block" : "none"` }}>
        aaa
      </div>
    </div>
  );
}

// export default function Accordion1() {
//   const [section, setSection] = useState({
//     html: false,
//     css: false,
//     js: false,
//   });

//   const handleClick = (section) => {
//     setSection((prev) => ({
//       ...prev,
//       [section]: !prev[section],
//     }));
//   };
//   return (
//     <div>
//       <div>
//         <div onClick={() => handleClick('html')}>
//           HTML <span aria-hidden={true} className="accordion-icon" />
//         </div>
//         {section['html'] && (
//           <div>
//             The HyperText Markup Language or HTML is the standard markup
//             language for documents designed to be displayed in a web browser.
//           </div>
//         )}
//       </div>
//       <div>
//         <div onClick={() => handleClick('css')}>
//           CSS <span aria-hidden={true} className="accordion-icon" />
//         </div>
//         {section['css'] && (
//           <div>
//             Cascading Style Sheets is a style sheet language used for describing
//             the presentation of a document written in a markup language such as
//             HTML or XML.
//           </div>
//         )}
//       </div>
//       <div>
//         <div onClick={() => handleClick('js')}>
//           JavaScript <span aria-hidden={true} className="accordion-icon" />
//         </div>
//         {section['js'] && (
//           <div>
//             JavaScript, often abbreviated as JS, is a programming language that
//             is one of the core technologies of the World Wide Web, alongside
//             HTML and CSS.
//           </div>
//         )}
//       </div>
//       <div style={{ display: `${section['html']} ? "block" : "none"` }}>
//         aaa
//       </div>
//     </div>
//   );
// }

///My mistake 09-09-2025
///  <div style={{ display: `${section[html]} ? "block" : "none"` }}>
