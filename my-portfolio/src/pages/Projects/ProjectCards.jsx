import "./Projects.css"

export default function ProjectCards(props) {
    return (
        <div className="project-card">
            <h2>{props.title}</h2>
            <p>{props.stack}</p>
            <p>{props.description}</p>
            <a href = {props.link}>View Projects</a>
        </div>
    );
}