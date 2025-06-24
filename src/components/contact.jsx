import { useState } from 'react';
import Field from './field';

function Contact({ edit }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleName = (e) => setName(e.target.value);
  const handleAddress = (e) => setAddress(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  if (edit) {
    return (
      <div id='contact'>
        <h2>Contact Information</h2>
        <hr />
        <Field label='Name' value={name} onChange={handleName} />
        <Field label='Address' value={address} onChange={handleAddress} />
        <Field
          type='phone'
          label='Telephone'
          value={phone}
          onChange={handlePhone}
        />
        <Field
          type='email'
          label='Email'
          value={email}
          onChange={handleEmail}
        />
      </div>
    );
  } else {
    // the pretty form on submit
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

export default Contact;
