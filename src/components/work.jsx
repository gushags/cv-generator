import { useState } from 'react';
import Field from './field';

function Work({ edit }) {
  const [workExperience, setWorkExperience] = useState([
    { company: '', position: '', responsibility: '', datesWorked: '' },
  ]);

  const handleChange = (index, field, value) => {
    const updatedList = [...workExperience];
    updatedList[index][field] = value;
    setWorkExperience(updatedList);
  };

  const addWork = () => {
    setWorkExperience([
      ...workExperience,
      { company: '', position: '', responsibility: '', datesWorked: '' },
    ]);
  };

  if (edit) {
    return (
      <div className='work'>
        <h2>Work section</h2>
        {workExperience.map((job, index) => (
          <div key={index}>
            <Field
              label='Company'
              value={job.company}
              onChange={(e) => handleChange(index, 'company', e.target.value)}
            />
            <Field
              label='Position'
              value={job.position}
              onChange={(e) => handleChange(index, 'position', e.target.value)}
            />
            <Field
              type='text'
              label='Responsibilities'
              value={job.responsibility}
              onChange={(e) =>
                handleChange(index, 'responsibility', e.target.value)
              }
            />
            <Field
              type='text'
              label='Dates Worked'
              value={job.datesWorked}
              onChange={(e) =>
                handleChange(index, 'datesWorked', e.target.value)
              }
            />
          </div>
        ))}
        <button onClick={addWork}>Add More Work</button>
      </div>
    );
  } else {
    return (
      <>
        <h2>Work Experience</h2>
        {workExperience.map((job, index) => (
          <div key={index}>
            <h3>{job.company}</h3>
            <h3>{job.position}</h3>
            <h3>{job.responsibility}</h3>
            <h3>{job.datesWorked}</h3>
          </div>
        ))}
      </>
    );
  }
}

export default Work;
