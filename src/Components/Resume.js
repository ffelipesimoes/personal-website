import React from 'react'
import profileImg from '../assets/profile.jpg'
import RadarChartRecharts from './recharts/RadarChart'

export const Resume = () => {
  return (
    <>
      <div className="resume">
        <div className="resume_left">
          <div className="resume_profile">
            <img src={profileImg} alt="profile_pic" />
          </div>
          <div className="resume_content">
            <div className="resume_item resume_info">
              <div className="title">
                <p className="bold">Felipe Simões</p>
                <p className="regular">Web3 Developer</p>
              </div>

              <div className="resume_item resume_about">
                <div className="title">
                  <p className="bold">Career Objective</p>
                </div>
                <p>
                  I'm a big lover of Blockchain projects building the road to
                  the next generation of business integrating business and
                  people for Web 3.0
                </p>
              </div>
            </div>

            <div className="resume_item resume_skills">
              <div className="title">
                <p className="bold">Languages</p>
              </div>
              <ul>
                <li>
                  <div className="skill_name">HTML</div>
                  <div className="skill_progress">
                    <span
                      style={{
                        width: '80%'
                      }}
                    ></span>
                  </div>
                  <div className="skill_per">80%</div>
                </li>
                <li>
                  <div className="skill_name">CSS</div>
                  <div className="skill_progress">
                    <span
                      style={{
                        width: '70%'
                      }}
                    ></span>
                  </div>
                  <div className="skill_per">70%</div>
                </li>
                <li>
                  <div className="skill_name">React</div>
                  <div className="skill_progress">
                    <span
                      style={{
                        width: '70%'
                      }}
                    ></span>
                  </div>
                  <div className="skill_per">70%</div>
                </li>
                <li>
                  <div className="skill_name">NodeJs</div>
                  <div className="skill_progress">
                    <span
                      style={{
                        width: '60%'
                      }}
                    ></span>
                  </div>
                  <div className="skill_per">60%</div>
                </li>
                <li>
                  <div className="skill_name">Solidity</div>
                  <div className="skill_progress">
                    <span
                      style={{
                        width: '82%'
                      }}
                    ></span>
                  </div>
                  <div className="skill_per">82%</div>
                </li>
              </ul>
            </div>

            <div className="resume_item resume_skills">
              <div className="title">
                <p className="bold">Stack</p>

                <RadarChartRecharts />
              </div>
            </div>
            <div className="resume_item resume_social">
              <div className="title">
                <p className="bold">Social</p>
              </div>
              <ul>
                <li>
                  <div className="icon">
                    <i className="fab fa-facebook-square"></i>
                  </div>
                  <div className="data">
                    <a
                      className="semi-bold"
                      href="https://github.com/ffelipesimoes"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </li>
                <li>
                  <div className="icon"></div>
                  <div className="data">
                    <a
                      className="semi-bold"
                      href="https://twitter.com/lipotrovisk"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twitter
                    </a>
                  </div>
                </li>

                <li>
                  <div className="icon">
                    <i className="fab fa-linkedin"></i>
                  </div>
                  <div className="data">
                    <a
                      className="semi-bold"
                      href="https://www.linkedin.com/in/ffelipesimoes/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Linkedin
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
