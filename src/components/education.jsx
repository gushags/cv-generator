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
      <section id='education-container'>
        <h2>Education</h2>
        {educationList.map((edu, index) => (
          <div className='school' key={index}>
            <div>
              <h3>{edu.school}</h3>
              <p>
                <em>{edu.degree}</em>
              </p>
            </div>
            <div>
              <h3>{edu.dateOfStudy}</h3>
            </div>
          </div>
        ))}
      </section>
    );
  }
}

export default Education;
