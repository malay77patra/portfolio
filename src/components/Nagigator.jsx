import { Link } from 'react-scroll';


export default function Navigator() {
    return (
        <div className='navigator'>
            <Link activeClass="active" to="about" spy={true} smooth={true} duration={250} containerId="wrapper">
                <span className='bar'></span>
                ABOUT
            </Link>
            <Link activeClass="active" to="experties" spy={true} smooth={true} duration={250} containerId="wrapper">
                <span className='bar'></span>
                EXPERTIES
            </Link>
            <Link activeClass="active" to="experience" spy={true} smooth={true} duration={250} containerId="wrapper">
                <span className='bar'></span>
                EXPERIENCE
            </Link>
            <Link activeClass="active" to="projects" spy={true} smooth={true} duration={250} containerId="wrapper">
                <span className='bar'></span>
                PROJECTS
            </Link>
        </div>
    )
}