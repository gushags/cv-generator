import { useState } from 'react';
// import './App.css';
import Contact from './components/contact';
import Education from './components/education';
import Work from './components/work';

function App() {
  const [edit, setEdit] = useState(true);
  const [container, setContainer] = useState('edit-container');

  function handleEdit() {
    setEdit(true);
    setContainer('edit-container');
  }
  function handleSubmit() {
    setEdit(false);
    setContainer('cv-container');
  }

  function Buttons() {
    if (edit) {
      return (
        <>
          <h1>Create a Resume</h1>
          <button className='submit' onClick={handleSubmit}>
            Build Resume
          </button>
        </>
      );
    } else {
      return (
        <button className='edit' onClick={handleEdit}>
          Edit Resume
        </button>
      );
    }
  }

  return (
    <div id={container}>
      <Buttons />
      <hr />
      <Contact edit={edit} />
      <Education edit={edit} />
      <Work edit={edit} />
    </div>
  );
}

export default App;
