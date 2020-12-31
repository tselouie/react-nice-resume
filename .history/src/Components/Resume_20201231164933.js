import React, { Component } from "react";

class Resume extends Component {
  getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree}
              <em className="date">{education.graduated}</em>
            </p>
            <ul>
              {education.description.map(function(item, i) {
                return (
                  <li key={i}>
                    <span>&bull; </span>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      });
      var work = this.props.data.work.map(function(work) {
        return (
          <div key={work.company}>
            <h3>
              <img src={work.img} style={{ width: "25px", height: "100%" }} />
              {work.company}
            </h3>
            <p className="info">
              {work.title} <em className="date">{work.years}</em>
            </p>

            <ul>
              {work.description.map(function(item, i) {
                return (
                  <li key={i}>
                    <span>&bull; </span>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      });

      var certifications = this.props.data.certifications.map(certification => {
        var className = "bar-expand " + certification.name.toLowerCase();
        return (
          <div key={certification.name}>
            <h3>{certification.name}</h3>
            <p className="info">
              {certification.issuer}
              <em className="date">{certification.issued}</em>
            </p>
          </div>
        );
      });

      var skills = this.props.data.skills
        .sort((a, b) => (a.level > b.level ? 1 : -1))
        .map(skills => {
          var className = "bar-expand " + skills.name.toLowerCase();
          return (
            <li key={skills.name}>
              <span
                style={{
                  width: skills.level,
                  backgroundColor: this.getRandomColor()
                }}
                className={className}
              ></span>
              <em>{skills.name}</em>
            </li>
          );
        });
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row certification">
          <div className="three columns header-col">
            <h1>
              <span>Certifications</span>
            </h1>
          </div>

          <div className="nine columns main-col">{certifications}</div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{skillmessage}</p>

            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
