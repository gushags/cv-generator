import { useState } from 'react';
// import './App.css';
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
        <h1>Create a CV</h1>
        <button className='edit' onClick={handleEdit}>
          Edit
        </button>
        <button className='submit' onClick={handleSubmit}>
          Submit
        </button>
        <hr />
        <Contact edit={edit} />
        <Education edit={edit} />
        <Work edit={edit} />
        <hr />
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
