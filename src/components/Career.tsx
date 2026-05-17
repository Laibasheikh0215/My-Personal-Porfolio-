import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info" >
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelors Of Science in Software Engineering</h4>
                <h5>Virtual University of Pakistan</h5>
              </div>
              <h3>2025</h3>
            </div>
            <ul style={{ marginLeft: '180px' }}>
              <h5>Frontend Developer Intern  | Achievers Corner | 2025</h5>
              <li>Assisted in developing responsive user interfaces using HTML, CSS, and JavaScript.</li>
              <li>Developed reusable React components improving UI consistency.</li>
              <li>Collaborated with team members to enhance website layout and user experience</li>
            </ul>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma in Modern Web Application Development </h4>
                <h5>Saylani Mass IT Training</h5>
              </div>
              <h3>2026</h3>
            </div>
            <ul style={{ marginLeft: '180px' }}>
              <h5>Teaching Assistant - Web Development  | Achievers Corner | 2025</h5>
              <li>Taught web development concepts to beginners.</li>
              <li>Developed reusable React components improving UI consistency.</li>
              <li>Guided students in HTML, CSS, JavaScript, React.js, Tailwind and Node.js</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
