import React from 'react';
import "./Projects.scss";
import IMG1 from '../../Assets/Ecom.png';

const Projects = () => {
const projects = [
    {
        id:1,
        image:IMG1,
        title:"E-commerce App",
        github:'https://github.com/Jubail0/Mern-Ecommerce-App-Frontend',
        demo:'https://my-shop-ecommerce.onrender.com'
    }
  
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
