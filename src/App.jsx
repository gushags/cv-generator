import { useState } from 'react';
import './App.css';
import Contact from './components/contact';
import Education from './components/education';
import Work from './components/work';

function App() {
  const [edit, setEdit] = useState(true);

  function handleEdit() {
    setEdit(true);
  }
  function handleSubmit() {
    setEdit(false);
  }

  return (
    <>
      <main>
        <Contact edit={edit} />
        <Education edit={edit} />
        <Work edit={edit} />
        <button className='edit' onClick={handleEdit}>
          Edit
        </button>
        <button className='submit' onClick={handleSubmit}>
          Submit
        </button>
      </main>
    </>
  );
}

export default App;
