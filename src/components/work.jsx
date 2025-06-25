import { useState } from 'react';
import Field from './field';

function Work({ edit }) {
  const [workExperience, setWorkExperience] = useState([
    { company: '', position: '', responsibility: '', datesWorked: '' },
  ]);

  const handleChange = (index, field, value) => {
    const updatedWork = [...workExperience];
    updatedWork[index][field] = value;
    setWorkExperience(updatedWork);
  };

  const addWork = () => {
    setWorkExperience([
      ...workExperience,
      { company: '', position: '', responsibility: '', datesWorked: '' },
    ]);
  };

  if (edit) {
    return (
      <div id='work'>
        <h2>Work section</h2>
        {workExperience.map((job, index) => (
          <div key={index}>
            <hr />
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
            <label>
              Responsibilities
              <textarea
                type='text'
                label='Responsibilities'
                value={job.responsibility}
                onChange={(e) =>
                  handleChange(index, 'responsibility', e.target.value)
                }
              />
            </label>
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
      <section id='work-container'>
        <h2>Work Experience</h2>
        {workExperience.map((job, index) => (
          <div key={index}>
            <div className='job-container'>
              <div>
                <h3>{job.company}</h3>
                <p>
                  <em>{job.position}</em>
                </p>
              </div>
              <div>
                <h3>{job.datesWorked}</h3>
              </div>
            </div>
            <div className='responsibility'>
              <p>{job.responsibility}</p>
            </div>
          </div>
        ))}
      </section>
    );
  }
}

export default Work;
