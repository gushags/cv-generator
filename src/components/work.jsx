import { useState } from 'react';
import Field from './field';

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

export default Work;
