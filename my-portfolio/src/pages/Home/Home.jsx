import "./Home.css"
import HomePageButtons from "./HomePageButtons";

export default function Home() {
    return (
        <div className = "home-container">
            <h2>Artem Kaluhin - Software Developer (Full-Stack / Android)</h2>
            <HomePageButtons />
            <p>Location: Based in the UK, open to relocation</p>
            <p>Languages: English, Russian, Ukrainian</p>
        </div>
    );
}