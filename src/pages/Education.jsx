function Education() {
  return (
    <section className="education">

      <div className="education-container">

        <div className="education-heading">
          <p>My Academic Journey</p>
          <h1>Education</h1>
        </div>

        <div className="education-cards">

          <div className="education-card">

            <div className="education-card-header">
              <span className="education-level">
                University Education
              </span>

              <span className="education-year">
                Present
              </span>
            </div>

            <h2>Daffodil International University (DIU)</h2>

            <p>
              <strong>Department:</strong> Software Engineering
            </p>

            <p>
              <strong>Current Average CGPA:</strong> 3.88
            </p>

          </div>

          <div className="education-card">

            <div className="education-card-header">
              <span className="education-level">
                Higher Secondary Certificate
              </span>

              <span className="education-year">
                2022
              </span>
            </div>

            <h2>Afazuddin College</h2>

            <p>
              <strong>Result:</strong> 4.67
            </p>

            <p>
              <strong>Year:</strong> 2022
            </p>

          </div>

          <div className="education-card">

            <div className="education-card-header">
              <span className="education-level">
                Secondary School Certificate
              </span>

              <span className="education-year">
                2020
              </span>
            </div>

            <h2>
              Dhamrai Hardinge Government High School and College
            </h2>

            <p>
              <strong>Result:</strong> 4.78
            </p>

            <p>
              <strong>Year:</strong> 2020
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;