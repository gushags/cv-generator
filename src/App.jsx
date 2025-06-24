import { use, useState } from 'react';
import './App.css';

function App() {
  const [edit, setEdit] = useState(true);
  return (
    <>
      <main>
        <Contact />
        <Education />
        <Work />
        <button className='edit'>Edit</button>
        <button className='submit'>Submit</button>
      </main>
    </>
  );
}

function Contact() {
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

  return (
    <>
      <h2>Contact Information</h2>
      <ContactField
        type='text'
        label='Name'
        value={name}
        onChange={handleName}
      />
      <h3>{name}</h3>
      <ContactField
        type='text'
        label='Address'
        value={address}
        onChange={handleAddress}
      />
      <h3>{address}</h3>
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
