import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IT Executive</h4>
                <h5>KoderLabs</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              System support and server management
              with network insfrastucture.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Befiler</h4>
                <h5>2+ years · Karachi</h5>
              </div>
              <h3>2024–24</h3>
            </div>
            <p>
              Managing day-to-day IT operations, providing technical support to users,
               troubleshooting hardware, software, and network issues, maintaining systems and devices,
               ensuring smooth network performance, handling installations and configurations,
                monitoring system security, and supporting 
              overall business continuity through reliable IT management.
            </p>
          </div>
          {/* <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Consultant</h4>
                <h5>Genpact Headstrong </h5>
              </div>
              <h3>2016–17</h3>
            </div>
            <p>
              Sep 2016 – Nov 2017. Developed and maintained WCF services consumed
              by the UI; deployment support across environments; NUnit tests and
              coverage; bug fixes from QA and users; database work.
            </p>
          </div> */}
         
        </div>
      </div>
    </div>
  );
};

export default Career;
