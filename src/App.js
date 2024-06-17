import React, { useState } from 'react';
import Header from "./components/Header";
import NotesListBody from './components/NotesListBody';

function App() {
  const [minimizedMenu, setMinimizedMenu] = useState(false);

  const handleMinimizedToggle = () => {
        setMinimizedMenu(prevState => !prevState);
  };

 
  return (
    <div className="App">
     <Header handleListView={handleMinimizedToggle} />
     <NotesListBody minimizedMenu={minimizedMenu}/>

    </div>
  );
}
export default App;
