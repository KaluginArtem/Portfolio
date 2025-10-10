import ProjectCards from "./ProjectCards";
import "./Projects.css"

export default function Projects() {
    return (
        <div className = "projects-container"> 
            <ProjectCards 
                title = "Android Gallery App with ML-Based Photo Categorization"
                stack = "Stack: Kotlin, Jetpack Compose, TensorFlow, Android SDK"
                description = "Developed an Android app that automatically classifies photos into categories (Human, Docs, Landscapes, Animals, Food, Others) using a custom TensorFlow model (~85% accuracy). Implemented UI with Jetpack Compose and optimized local data storage."
                link = "https://github.com/KaluginArtem/MLGalleryApp"/>
            <ProjectCards 
                title = "UWE UniHub (Social Web Platform)"
                stack = "Stack: Django REST Framework, PostgreSQL, Docker, JWT, Swagger"
                description = "Built a RESTful web application for UWE students with user authentication, profile management, and real-time post sharing. Designed scalable backend logic, API documentation with Swagger, and containerized deployment using Docker."
                link = "https://github.com/UWE-UniHub"/>
            <ProjectCards 
                title = "HRMS (Horizon Restaurant Management System)"
                stack = "Stack: Django, Docker, Git, PostgreSQL"
                description = "Developed backend services for a restaurant management platform, including order tracking and menu management modules. Focused on clean architecture, modularity, and maintainable code with Dockerized deployment."
                link = "https://github.com/baktygaliyevv/uwe-hrms-app"/>
            <ProjectCards 
                title = "Fiber Scheduler (C++)"
                stack = "Stack: C++, Custom Stack Management"
                description = "Implemented a cooperative multitasking system using custom stacks and context switching. Designed lightweight fiber scheduling with priority handling and context preservation."
                link = "https://github.com/KaluginArtem/Advanced-Systems-Programming-Assignment"/>
        </div>
    );
}