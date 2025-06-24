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
      <>
        <h2>Contact Information</h2>
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
      </>
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

function Education({ edit }) {
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [dateOfStudy, setDate] = useState('');

  const handleSchool = (e) => setSchool(e.target.value);
  const handleDegree = (e) => setDegree(e.target.value);
  const handleDateOfStudy = (e) => setDate(e.target.value);

  if (edit) {
    return (
      <div className='education'>
        <h2>Education section</h2>
        <Field label='School' value={school} onChange={handleSchool} />
        <Field label='Field of Study' value={degree} onChange={handleDegree} />
        <Field label='Dates' value={dateOfStudy} onChange={handleDateOfStudy} />
      </div>
    );
  } else {
    return (
      <>
        <h2>Education</h2>
        <h3>{school}</h3>
        <h3>{degree}</h3>
        <h3>{dateOfStudy}</h3>
      </>
    );
  }
}
function Work({ edit }) {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [resp, setResp] = useState('');
  const [datesWorked, setDatesWorked] = useState('');

  const handleCompany = (e) => setCompany(e.target.value);
  const handlePosition = (e) => setPosition(e.target.value);
  const handleResp = (e) => setResp(e.target.value);
  const handleDatesWorked = (e) => setDatesWorked(e.target.value);

  if (edit) {
    return (
      <>
        <h2>Work section</h2>
        <Field label='Company' value={company} onChange={handleCompany} />
        <Field label='Position' value={position} onChange={handlePosition} />
        <Field
          type='text'
          label='Responsibilities'
          value={resp}
          onChange={handleResp}
        />
        <Field
          type='text'
          label='Dates Worked'
          value={datesWorked}
          onChange={handleDatesWorked}
        />
      </>
    );
  } else {
    return (
      <>
        <h2>Work Experience</h2>
        <h3>{company}</h3>
        <h3>{position}</h3>
        <h3>{datesWorked}</h3>
      </>
    );
  }
}

function Field({ type = 'text', label, value, onChange }) {
  return (
    <>
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} />
    </>
  );
}
export default App;
