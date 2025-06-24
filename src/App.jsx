import { use, useState } from 'react';
import './App.css';

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
        <Education />
        <Work />
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

function Contact({ edit }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  function handleName(e) {
    setName(e.target.value);
  }
  function handleAddress(e) {
    setAddress(e.target.value);
  }
  function handlePhone(e) {
    setPhone(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }

  if (edit) {
    return (
      <>
        <h2>Contact Information</h2>
        <ContactField
          type='text'
          label='Name'
          value={name}
          onChange={handleName}
        />

        <ContactField
          type='text'
          label='Address'
          value={address}
          onChange={handleAddress}
        />
        <ContactField
          type='phone'
          label='Telephone'
          value={phone}
          onChange={handlePhone}
        />
        <ContactField
          type='email'
          label='Email'
          value={email}
          onChange={handleEmail}
        />
      </>
    );
  } else {
    return (
      <>
        <h2>Contact Information</h2>
        <h3>{name}</h3>
        <h3>{address}</h3>
        <h3>{phone}</h3>
        <h3>{email}</h3>
      </>
    );
  }
}

function ContactField({ type, label, value, onChange }) {
  return (
    <>
      {label}
      <input type={type} value={value} onChange={onChange} />
    </>
  );
}

function Education() {
  return (
    <>
      <h2>Education section</h2>
    </>
  );
}
function Work() {
  return (
    <>
      <h2>Work section</h2>
    </>
  );
}

export default App;
