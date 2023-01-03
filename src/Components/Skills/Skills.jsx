import React from 'react'
import "./Skills.scss"
import {GoVerified} from 'react-icons/go'
const Skills = () => {
  

    return (
        <section id='skills'>
            <h5>The Skills That I have</h5>
            <h2>My Experience</h2>

            <div className="container skills_container">
                <div className='skills_frontend'>
                    <h3>Frontend Development</h3>
                    <div className="frontend__content">
                        <article className='skills_details'>
                            <GoVerified className="skills__icon"/>
                            <div>
                            <h4>HTML</h4>
                            <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='skills_details'>
                            <GoVerified className="skills__icon"/>
                            <div>
                            <h4>CSS</h4>
                            <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='skills_details'>
                            <GoVerified className="skills__icon"/>
                             <div>
                            <h4>JAVASCRIPT</h4>
                            <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='skills_details'>
                            <GoVerified className="skills__icon"/>
                            <div>
                            <h4>REACT JS</h4>
                            <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='skills_details'>
                            <GoVerified className="skills__icon"/>
                           <div>
                            <h4>SASS</h4>
                            <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='skills_details'>
                            <GoVerified className="skills__icon"/>
                            <div>
                            <h4>BOOTSTRAP</h4>
                            <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='skills_details'>
                            <GoVerified className="skills__icon"/>
                            <div>
                            <h4>MATERIAL UI</h4>
                            <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                    </div>

                </div>
                <div className='skills_backend'>
                <h3>Backend Development</h3>
                    <div className="backend_content">
                        <article className='skills_details'>
                            <GoVerified className="skills__icon"/>
                            <div>
                            <h4>NODE JS</h4>
                            <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='skills_details'>
                            <GoVerified className="skills__icon"/>
                            <div>
                            <h4>EXPRESS JS</h4>
                            <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='skills_details'>
                            <GoVerified className="skills__icon"/>
                            <div>
                            <h4>MONGO DB</h4>
                            <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='skills_details'>
                            <GoVerified className="skills__icon"/>
                            <div>
                            <h4>MONGOOSE</h4>
                            <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>

            </div>
           
        </section>
    )
}

export default Skills
