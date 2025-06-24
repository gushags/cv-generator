import { useState } from 'react';
import Field from './field';

function Education({ edit }) {
  const [school, setSchool] = useState([]);
  const [degree, setDegree] = useState([]);
  const [dateOfStudy, setDate] = useState([]);

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

export default Education;
