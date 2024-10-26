import { Element } from 'react-scroll';
import { Stars } from './components/Reviewes';
import { Pimg } from './components/Helpers';
import Navigator from './components/Nagigator';
import SocialMedia from './components/SocialMedia';
import Progress from './components/Progress';
import malayImg from './assets/malay.jpeg'
import flameidePng from './assets/flameide.png'
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
          <Element name="about">
            <div className='heading'>ABOUT</div>
            <p>I'm a <span className='h'>Python expert</span>. I build web apps and automation software using the <span className="h">MERN stack</span> & Python. I also integrate <span className="h">AI & GPT</span> like LLm or APIs into prebuilt softwarews, focusing on solving problems that businesses face. Over the past two years, I have been working as a freelancer, including a notable stint with Vino AI. I possess strong skills in mathematics and physics, which complement my technical expertise. I am actively seeking new opportunities to leverage my skills and help more businesses overcome their challenges.</p>
            <p>Get your issues solved now ✨</p>
            <Roundbtn text="RESUME" link="https://drive.google.com/file/d/1SeHWLv_f2UishZONI587RHgelHmx3QQU/view?usp=sharing" />
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
                <div className="time">2021 — Present</div>
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
                <div className="time">2022 — 2022</div>
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
            <p>Below is an reviews on people say about me ?</p>
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
            </div>
          </Element>
          <footer>made with ❤️ using (react+vite)</footer>
        </section>
      </div>
    </main >
  );
}

