import './ProjectCard.css'
import rocket from '../assets/rocket.svg'
import code from '../assets/code.svg'

export default function ProjectCard({ project }) {

    return (
    <div className="project-card">
        <div className="project-name">{project.name}</div>
        <div className="project-img"><img src={project.image}></img></div>
        <div className="project-description">{project.description}</div>
        <div className="project-links">
            <div className="live-link"><a href={project.live} target="_blank"><img src={rocket}></img></a></div>
            <div className="github-link"><a href={project.github} target="_blank"><img src={code}></img></a></div>
        </div>
    </div>
    )
}