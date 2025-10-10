import './Skills.css';
import Skill from './Skill';

export default function Skills() {
    return (
        <div className="skills-container">
            <div className="skills-section">
                <h2>Programming Languages</h2>
                <ul>
                    <Skill name="Kotlin" level={1} />
                    <Skill name="Python" level={3} />
                    <Skill name="C++" level={3} />
                    <Skill name="HTML & CSS" level={2} />
                    <Skill name="JavaScript" level={2} />
                    <Skill name="SQL" level={2} />
                </ul>
            </div>

            <div className="skills-section">
                <h2>Frameworks & Tools</h2>
                <ul>
                    <Skill name="Django REST Framework" level={2} />
                    <Skill name="React" level={2} />
                    <Skill name="Jetpack Compose" level={1} />
                    <Skill name="TensorFlow" level={2} />
                    <Skill name="PostgreSQL" level={2} />
                    <Skill name="Docker" level={2} />
                    <Skill name="Git" level={3} />
                    <Skill name="Swagger" level={2} />
                </ul>
            </div>

            <div className="skills-section">
                <h2>Core CS Knowledge</h2>
                <ul>
                    <Skill name="Data Structures & Algorithms" level={2} />
                    <Skill name="Object-Oriented Programming (OOP)" level={3} />
                    <Skill name="REST API Design" level={2} />
                    <Skill name="Machine Learning" level={2} />
                    <Skill name="Database Design" level={2} />
                    <Skill name="Software Architecture" level={2} />
                </ul>
            </div>

            <div className="skills-section">
                <h2>Other Skills</h2>
                <ul>
                    <Skill name="Version Control (Git/GitHub)" level={3} />
                    <Skill name="Agile Methodologies" level={2} />
                    <Skill name="Linux/CLI Basics" level={1} />
                    <Skill name="Unit Testing" level={2} />
                    <Skill name="CI/CD Concepts" level={2} />
                </ul>
            </div>
        </div>
    );
}
