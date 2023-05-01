import React from 'react';
import "./Projects.scss";
import IMG1 from '../../Assets/Ecom.png';
import IMG2 from "../../Assets/weatherApp.png";
import IMG3 from "../../Assets/youtube.jpeg";
import IMG4 from "../../Assets/easybank.png";
import IMG5 from "../../Assets/meme.png";

const Projects = () => {
const projects = [
    {
        id:1,
        image:IMG1,
        title:"E-commerce App",
        github:'https://github.com/Jubail0/Mern-Ecommerce-App-Frontend',
        demo:'https://my-shop-ecommerce.onrender.com',
        type:"mern"
    },
    {
        id:2,
        image:IMG2,
        title:"Basic Weather App",
        github:'https://github.com/Jubail0/Weather-App-Backend',
        demo:'https://weather-app-c0g1.onrender.com',
        type:"mern"
    },
    {
        id:3,
        image:IMG3,
        title:"Youtube clone",
        github:'https://github.com/Jubail0/React-YT-Clone',
        demo:'https://youtube-clone-gr37.onrender.com',
        type:"react"
    },
    {
        id:4,
        image:IMG4,
        title:"Easybank Lading Page",
        github:'https://github.com/Jubail0/Easybank-Landing-Page',
        demo:'https://easybank-yrrj.onrender.com',
        type:"static"
    },
    {
        id:5,
        image:IMG5,
        title:"Basic Meme generator",
        github:'https://github.com/Jubail0/React-Meme-Generator',
        demo:'https://meme-generator-react.onrender.com',
        type:"react"
    },
  
]
    return (
        <section id='projects'>
            <h5>My Recent Work</h5>
            <h2>Projects</h2>
            <div className="container projects__container">
                {
                    projects.map(({id,image,title,github,demo})=>
                <article className='projects__item' key={id}>
                    <div className="projects__item-image">
                    <img src={image} alt='Coming...'/>
                    </div>
                        <h3>{title}</h3>
                        <div className="project_items_cta">
                        <a href={github} target="_blank" rel="noreferrer noopener" className='btn'>Github</a>
                        <a href={demo} target="_blank" rel="noreferrer noopener" className='btn btn-primary'>Live Demo</a>
                        </div>
                </article>
                )
                }
            </div>
        </section>
    )
}

export default Projects
