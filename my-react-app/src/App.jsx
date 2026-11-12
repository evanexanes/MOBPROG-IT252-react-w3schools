/*
Program name: App.jsx
Description: Root component of the W3Schools React exercises. It shows the course greeting,
   the SoCITFest tagline and my name. main.jsx mounts it into the page.
Author: Exanes, Evan Prens
Date Compiled: 11/05/2026
======================================================================
Date           Description                      Programmer name
======================================================================
11/05/2026     Initial Implementation           EPPE
11/09/2026     Added header and comments        EPPE
11/12/2026     Updated greeting and tagline     EPPE
======================================================================
*/

// The only component so far. It returns the markup React puts inside #root.
function App() {
  return (
    <div className="App">
      <h1>Hello MOBPROG-IT252 World!</h1>
      <h2>Happy 2026 SoCITFest!</h2>
      <h3>Evan Exanes</h3>
    </div>
  );
}

export default App;