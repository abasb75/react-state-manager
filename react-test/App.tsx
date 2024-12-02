
import Header from './comps/header';

import AddNote from './comps/addnote';
import Notes from './comps/notes';
import { useStateSelector } from './state';

function App() {

  const darkMode = useStateSelector(state=>state.darkMode);

  return (
    <main className='w-full h-[100vh]' style={{backgroundColor:darkMode?'#434343':'#f1f1f1'}}>
      <Header />
      <AddNote  />
      <Notes />
    </main>
  );

}

export default App
