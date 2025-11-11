import "./Home.css"

export default function HomePageButtons() {
    return (
        <div className= "home-buttons">
            <a href = "/KaluhinArtemCV.pdf" target = "_blank" download>CV</a>
            <a href = "https://github.com/KaluginArtem">GitHub</a>
            <a href = "https://www.linkedin.com/in/artem-kaluhin-761556255/">LinkedIn</a>
            <a href = "mailto:kalugin.atr.i@gmail.com">EMail</a>
            <a href = "https://t.me/kaluhin_art_i">Telegram</a>
        </div>
    );
}