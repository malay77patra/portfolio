import { Element } from 'react-scroll';
import { Stars } from './components/Reviewes';
import { Pimg } from './components/Helpers';
import Navigator from './components/Nagigator';
import SocialMedia from './components/SocialMedia';
import Progress from './components/Progress';
import malayImg from './assets/malay.jpeg'
import flameidePng from './assets/flameide.png'
import malayPatra from './assets/malayPatra.png'
import liveHtml from './assets/live-html.png'
import Roundbtn from './components/Roundbtn';
import './styles/App.css';


export default function App() {
  return (
    <main>
      <div className='wrapper' id='wrapper'>
        <section className="profile-sec">
          <div>
            <div className='profile'>
              <img src={malayImg} alt='Profile Picture' className='malay-img' />
              <span>
                <h1>Malay Patra</h1>
                <h4>Full Stack Web Developer</h4>
              </span>
            </div>
            <p className='desc'>Seamlessly integrate web & AI for efficient business solutions.</p>
            <Navigator />
            <SocialMedia />
          </div>
        </section>
        <section className="content">
          {/* badge */}
          <a href="https://malaypatrav2.vercel.app" target="_blank" rel="noopener noreferrer">
            <button className="btn-new">
              <span>New Version</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 74 74"
                height="34"
                width="34"
              >
                <circle strokeWidth="3" stroke="black" r="35.5" cy="37" cx="37"></circle>
                <path
                  fill="black"
                  d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                ></path>
              </svg>
            </button>
          </a>
          {/* badge */}
          <Element name="about">
            <div className='heading'>ABOUT</div>
            <p>I'm a <span className='h'>Python expert</span>. I build web apps and automation software using the <span className="h">MERN stack</span> & Python. I also integrate <span className="h">AI & GPT</span> like LLm or APIs into prebuilt softwarews, focusing on solving problems that businesses face. Over the past two years, I have been working as a freelancer, including a notable stint with Vino AI. I possess strong skills in mathematics and physics, which complement my technical expertise. I am actively seeking new opportunities to leverage my skills and help more businesses overcome their challenges.</p>
            <p>Get your issues solved now ✨</p>
            <Roundbtn text="RESUME" link="https://drive.google.com/file/d/1KIIvBZnJ1M9YltAVd6pnbtVzHrXXa5u2/view?usp=sharing" />
          </Element>
          <Element name="experties">
            <div className='heading'>EXPERTIES</div>
            <p>My focus is on building software that simplifies and grows your business. Whether you need a landing page, a complex dashboard, or task automation, I am here to help. My skills are:</p>
            <Progress />
          </Element>
          <Element name="experience">
            <div className='heading'>EXPERIENCE</div>
            <div className='card-group'>
              <div className='card'>
                <div className="time">2023 — Present</div>
                <div className="desc">
                  <h3><a href='https://www.upwork.com/freelancers/malayp3?mp_source=share'>Freelancer - Python expert - AI & ML Integration - MERN Web, Upwork</a></h3>
                  <p>Experienced Full Stack Developer with expertise in Python, Node.js, React.js, and MERN stack. Skilled in crafting efficient backend systems, user-friendly frontends, and integrating AI solutions for automation. I prioritize client satisfaction and thrive on solving complex problems through innovative web development and automation.</p>
                  <div className="tags">
                    <span className="tag">Python</span>
                    <span className="tag">Automation</span>
                    <span className="tag">MERN</span>
                    <span className="tag">AI & ML</span>
                    <span className="tag">GPT API</span>
                    <span className="tag">Web Scrapping</span>
                  </div>
                </div>
              </div>
              <div className='card'>
                <div className="time">2024 — Present</div>
                <div className="desc">
                  <h3><a href='https://www.linkedin.com/company/codeclub-ju/posts/?feedView=all'>Member, JUCC (Jadavpur University Coding Club)</a></h3>
                  <p>Active member of JUCC, Jadavpur University’s premier coding club, collaborating with peers on innovative programming projects, coding competitions, and workshops. Contributed to the club’s knowledge-sharing initiatives and engaged in team problem-solving, improving both technical and collaborative skills.</p>
                  <div className="tags">
                    <span className="tag">C/C++</span>
                    <span className="tag">Competetive Programming</span>
                    <span className="tag">DSA</span>
                  </div>
                </div>
              </div>
              <div className='card'>
                <div className="time">2023 — 2023</div>
                <div className="desc">
                  <h3><a href="https://vinoai.com/">AI Integration Developer, Vino.ai</a></h3>
                  <p>Built an automated document generator leveraging GPT-4 API. Received a 5-star review from the client for exceptional performance and results.</p>
                  <div className="tags">
                    <span className="tag">Python</span>
                    <span className="tag">GPT-3/4-o</span>
                    <span className="tag">LLM</span>
                  </div>
                </div>
              </div>

            </div>
          </Element>
          <Element name="reviews">
            <div className='heading'>REVIEWS</div>
            <p>What other people say about me?</p>
            <div className='card-group'>
              <div className="card">
                <div className='review'>
                  <div>
                    <Pimg src="none" alt="Sam taylor" />
                  </div>
                  <div>
                    <h2>Sam taylor</h2>
                    <div>"Malay was fantastic ! He followed all instructions and finished task in time and with great accuracy... He understood complex problems and solved them.. would definitely recommend him to anyone"</div>
                    <Stars rating={5} />
                  </div>
                </div>
              </div>
              <div className="card">
                <div className='review'>
                  <div>
                    <Pimg src="none" alt="Steven Pierson" />
                  </div>
                  <div>
                    <h2>Steven Pierson</h2>
                    <div>"Malay Completed the project on time and budget. He fix all issues and provided excellent support to us using his solution.Would definitely hire again"</div>
                    <Stars rating={5} />
                  </div>
                </div>
              </div>
              <div className="card">
                <div className='review'>
                  <div>
                    <Pimg src="none" alt="Bhabya Ranjan" />
                  </div>
                  <div>
                    <h2>Bhabya Ranjan</h2>
                    <div>"You are very good at Flask anb Html/Css/js wev development, I would like to hire you for long term project based jobs."</div>
                    <Stars rating={5} />
                  </div>
                </div>
              </div>
            </div>
          </Element>
          <Element name="projects">
            <div className='heading'>PROJECTS</div>
            <p>Here are some of my recent projects highlighting expertise in web applications, automation software, and AI integration.</p>
            <div className="card-group">
              <a href="https://flamecoders.github.io/flameide/">
                <div className='card'>
                  <img src={flameidePng} className='thmb' />
                  <div className="desc">
                    <h3>Flameide</h3>
                    <p>A lightweight browser-based IDE for competitive programming. No installation required!</p>
                    <div className="tags">
                      <span className="tag">Html</span>
                      <span className="tag">Css</span>
                      <span className="tag">JavaScript</span>
                    </div>
                  </div>
                </div>
              </a>
              <a href="https://live-html-zeta.vercel.app">
                <div className='card'>
                  <img src={liveHtml} className='thmb' />
                  <div className="desc">
                    <h3>Live-Html</h3>
                    <p>Live html editor right from your browser !</p>
                    <div className="tags">
                      <span className="tag">React</span>
                      <span className="tag">Vite</span>
                      <span className="tag">MERN</span>
                    </div>
                  </div>
                </div>
              </a>
              <a href="https://malaypatra.vercel.app/">
                <div className='card'>
                  <img src={malayPatra} className='thmb' />
                  <div className="desc">
                    <h3>Malay Patra, Portfolio</h3>
                    <p>Malay Patra - Full Stack Developer, Personal portfolio using React+Vite.</p>
                    <div className="tags">
                      <span className="tag">React</span>
                      <span className="tag">Vite</span>
                      <span className="tag">MERN</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </Element>
          <footer>made with ❤️ using (react+vite)</footer>
        </section>
      </div>
    </main >
  );
}

