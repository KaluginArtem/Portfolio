export default function Skill({ name, level }) {
    const totalBars = 3;
    return (
        <li>
            <div className="skill-name">{name}</div>
            <div className="skill-level">
                {[...Array(totalBars)].map((_, i) => (
                    <div
                        key={i}
                        className={`skill-bar ${i < level ? 'active' : ''}`}
                    ></div>
                ))}
            </div>
        </li>
    );
}