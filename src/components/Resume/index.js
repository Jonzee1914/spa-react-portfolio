import React from 'react'; 

function Resume() {

return(
<section class="mb-5">
    <h2 className="resume">Resume</h2>
        <hr></hr>
       
           

        <div class="row justify-content-center" id="resume">
            <div class="mt-5 pl-5 pr-5">
                <h2>Erik Jones</h2>
            <ul>
                    <li>My core competencies in full-stack web development, graphic design, and customer experience development.</li>
                    <li>I am a driven individual with years of experience in the corporate enviroment, including leading and managing teams to success.</li>
                    <li>I possess strong creative, organizational, planning, and decision-making skills.</li>
                </ul>
        

                <p class="mt-5">
                <a href="https://www.linkedin.com/in/erik-jones-103490158/">
                    <img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="inkedIn"/></a>
                </p>
               
               <a href="" class="link">Resume Coming Soon</a>
               
            </div>
        </div>

        <div class="justify-content-center mt-5">
            <div>
                <h2>Proficiencies</h2>
                <p>HTML, CSS (Bootstrap, Bulma, HandleBars), JavaScript</p>
                <p>MERN Stack: MongoDB, Express.js, React.js, Node.js</p>
                <p>jQuery, SQL, Sequelize, NoSQL, IndexedDB, APIs, and Templating</p>
                
            </div>
    
            
        </div>
</section>
);
}

export default Resume;