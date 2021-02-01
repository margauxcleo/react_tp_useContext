import { useState } from "react";
import React from 'react';
import ColoredBox from "./components/ColoredBox/ColoredBox";
// un export doit toujours se faire ici par rapport au scope (la portée)
export const ThemeContext = React.createContext();

function App() {
  // Correction 
  
  const [darkTheme, setDarkTheme] = useState(true);

  const handleChangeTheme = (e) => {
    e.preventDefault();
    setDarkTheme(!darkTheme);
  }

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={handleChangeTheme}>Activer Dark Theme</button>
        <ColoredBox />
      </ThemeContext.Provider>
    </>
  );



// Mon code (non terminé ne fonctionne pas)

  // const backgrounds = {
  //   grey: {
  //     backgroundColor: "grey",
  //   },
  //   blue: {
  //     backgroundColor: "blue"
  //   }
  // };

  // const [background, setBackground] = useState(backgrounds.grey);
  // export const BackgroundTheme = React.createContext(backgrounds.grey);

  // const handleOnClick = (e) => {
  //   e.preventDefault();
  //   setBackground(backgrounds.blue);
  // }

  // return (
  //   <>
  //     <BackgroundTheme.Provider value={backgrounds}>
  //       <button onClick={handleOnClick} background={background}>Cliquer ici pour changer la couleur de fond</button>
  //       <ChildComponent background={background}/>
  //     </BackgroundTheme.Provider>
  //   </>
  // );

  // Custom Hook
//   import React from "react";
// import Compteur from "./components/Compteur";
// function App() {
//   return (
//     <>
//       <Compteur />
//     </>
//   );
// }

// ex pour le HOC
// import React from "react";
// import Hello from "./components/Hello";
// function App() {
//   return (
//     <>
//       <Hello name="blabla" nickname="bleble" />
//     </>
//   );
// }
// export default App;

};

export default App;
