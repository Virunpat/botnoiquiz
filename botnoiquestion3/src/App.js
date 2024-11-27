import React from 'react';
import './App.css';
import profileImage from './Image/profile.jpg';

function App() {
  return (
    <div className="container">
      <div className="left-column">
        <header>
          <img src={profileImage} alt="Profile" />
          <h1>Virunpat Theeranuluk</h1>
          <p>Front-End</p>
        </header>

        <section>
          <h2>Contact</h2>
          <hr />
          <ul>
            <li>097-247-9454</li>
            <li>virunpat0301@gmail.com</li>
            <li>www.linkedin.com/in/virunpat</li>
          </ul>
        </section>

        <section>
          <h2>Education</h2>
          <hr />
          <h3>Auckland House School, Shimla</h3>
          <h6>India</h6>
          <h3>Bachelor of Computer Science, Major</h3>
          <h6>King Mongkut's University of Technology Thonburi</h6>
        </section>

        <section>
          <h2>Skills</h2>
          <hr />
          <ul>
            <li>HTML/CSS/JavaScript</li>
            <li>Flutter</li>
            <li>React JS/MUI</li>
            <li>SQL/Prisma</li>
            <li>Figma</li>
          </ul>
        </section>

        <section>
          <h2>Languages</h2>
          <hr />
          <ul>
            <li>Thai</li>
            <li>English</li>
          </ul>
        </section>
      </div>

      <div className="right-column">
        <section>
          <h2>About Me</h2>
          <hr />
          <div className="text-container">
            <span className="square"></span>
            <p>
              As a dedicated and motivated student pursuing a Bachelor of
              Computer Science at King Mongkut's University of Technology
              Thonburi, I am actively seeking opportunities to apply and expand
              my skills in web and mobile development, user interface design, and
              project management. With a strong passion for creating intuitive,
              user-friendly digital solutions.
            </p>
          </div>
        </section>

        <section>
          <h2>Experience:</h2>
          <hr />
          <div className="project-container">
            <div className="project-header">
              <h3 className="project-title">Melon-Health</h3>
              <span className="project-date">May 2023</span>
            </div>
            <ul className="project-details">
              <li>Designed the UX/UI interface of the website</li>
              <li>
                Developed a mini project named "Melon Health"—a pill reminder
                app with complete CRUD functionality using HTML, CSS, React JS,
                and Node.js. This app helps users manage pill intake schedules
                through an intuitive interface.
              </li>
            </ul>

            <div className="project-header">
              <h3 className="project-title">Blue Away</h3>
              <span className="project-date">May 2023</span>
            </div>
            <ul className="project-details">
              <li>
                Developed a website and a mini-game called "Wishing Star," where
                users can write their wishes on a star and send it to the sky.
                Built the frontend using MUI components to create an engaging and
                interactive experience.
              </li>
            </ul>

            <div className="project-header">
              <h3 className="project-title">Harmoni</h3>
              <span className="project-date">Aug 2023 - Dec 2023</span>
            </div>
            <ul className="project-details">
              <li>
                Designed the UX/UI interface of a reservation website, creating
                a user-friendly experience that streamlined the booking process.
              </li>
            </ul>

            <div className="project-header">
              <h3 className="project-title">MyFridge</h3>
              <span className="project-date">June 2024</span>
            </div>
            <ul className="project-details">
              <li>Designed the UX/UI interface of the application</li>
              <li>
                Developed a mobile application named "MyFridge," to remind users
                of food expiration dates, implementing authentication features
                using Flutter for the frontend and Prisma with MySQL for user
                management, contributing to improved food waste management.
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Leadership & Activities:</h2>
          <hr />
          <div className="leadership-container">
            <h1>1st Runner-Up, Playground Activities</h1>
            <ul>
              <li>
                Designed an application prototype to streamline daily routines
                and boost productivity, featuring a to-do list, reminders, a
                timetable, and a notes section for efficient life management.
              </li>
            </ul>
            <h1>Student Committee, School of Information Technology, KMUTT</h1>
            <p>Member</p>
            <ul>
              <li>
                Developed leadership, teamwork, and event planning skills as a
                member of the student committee. Played an active role in
                organizing and executing various events, contributing to the
                enhancement of student life within the School of Information
                Technology.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
