import { useState } from 'react';
import Field from './field';

function Education({ edit }) {
  const [educationList, setEducationList] = useState([
    { school: '', degree: '', dateOfStudy: '' },
  ]);

  const handleChange = (index, field, value) => {
    const updatedList = [...educationList];
    updatedList[index][field] = value;
    setEducationList(updatedList);
  };

  const addEducation = () => {
    setEducationList([
      ...educationList,
      { school: '', degree: '', dateOfStudy: '' },
    ]);
  };

  if (edit) {
    return (
      <div id='education'>
        <h2>Education section</h2>
        {educationList.map((edu, index) => (
          <div key={index}>
            <hr />
            <Field
              label='School'
              value={edu.school}
              onChange={(e) => handleChange(index, 'school', e.target.value)}
            />
            <Field
              label='Degree'
              value={edu.degree}
              onChange={(e) => handleChange(index, 'degree', e.target.value)}
            />
            <Field
              label='Date of Study'
              value={edu.dateOfStudy}
              onChange={(e) =>
                handleChange(index, 'dateOfStudy', e.target.value)
              }
            />
          </div>
        ))}
        <button onClick={addEducation}>Add More Education</button>
      </div>
    );
  } else {
    return (
      <>
        <h2>Education</h2>
        {educationList.map((edu, index) => (
          <div key={index}>
            <h3>{edu.school}</h3>
            <h3>{edu.degree}</h3>
            <h3>{edu.dateOfStudy}</h3>
          </div>
        ))}
      </>
    );
  }
}

export default Education;
