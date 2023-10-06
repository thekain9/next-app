
function Skills() {
  return (
    <div>
      <div className='skills'>
        <div className='title-container'>
            <h1>MY SKILLS</h1>
        </div>
        <div className='list-box'>
        
            <ol className='list'>
            <div className='item'>
                <li>
                    <h2>Front-End</h2>
                    <span>
                    <h3>Languages and Frameworks:</h3>
                    <ul>
                        <li>ReactJS</li>
                        <li>Redux</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>NPM</li>
                        <li>JavaScript</li>
                    </ul>
                    <h3>UI Libraries and Tools:</h3>
                    <ul>
                        <li>Bootstrap</li>
                        <li>MaterialUI</li>
                        <li>Yarn</li>
                    </ul>
                    <h3>Web Technologies:</h3>
                    <ul>
                        <li>AJAX</li>
                    </ul>
                    <h3>Version Control:</h3>
                    <ul>
                        <li>Git</li>
                    </ul>
                    </span>
                </li>
            </div>
            <div className='item'>
                <li>
                    <h2>Back-End</h2>
                    <span>
                    <h3>Languages and Frameworks:</h3>
                    <ul>
                        <li>Node.js</li>
                        <li>Express.js</li>
                    </ul>
                    <h3>Databases:</h3>
                    <ul>
                        <li>MongoDB</li>
                    </ul>
                    <h3>Authentication:</h3>
                    <ul>
                        <li>JWT (JSON Web Tokens)</li>
                    </ul>
                    <h3>Deployment and Hosting:</h3>
                    <ul>
                        <li>Heroku</li>
                        <li>Hostinger</li> {/* Added Hostinger */}
                    </ul>
                    <h3>Server-Side Rendering:</h3>
                    <ul>
                        <li>Next.js</li>
                    </ul>
                    </span>
                </li>
            </div>
            <div className='item'>
                <li>
                    <h2>Design Skills</h2>
                    <span>
                    <h3>2D Design:</h3>
                    <ul>
                        <li>Photoshop - Expert</li>
                        <li>Illustrator - Proficient</li>
                        <li>Figma - Intermediate</li>
                        <li>Adobe XD (for Prototyping) - Intermediate</li>
                        <li>Drawing Skills - Proficient</li>
                    </ul>
                    <h3>3D Design:</h3>
                    <ul>
                        <li>3D Rendering and Animation - Proficient</li>
                        <li>Blender - Proficient</li>
                        <li>Houdini - Intermediate</li>
                        <li>Cinema 4D (C4D) - Proficient</li>
                        <li>Adobe After Effects - Proficient</li>
                    </ul>
                    <h3>Typographic Skills:</h3>
                    <ul>
                        <li>Adobe InDesign - Proficient</li>
                        <li>Typographic Skills - Proficient</li>
                    </ul>
                    </span>
                </li>
            </div>

            </ol>

            </div>
      </div>
      <style jsx>{`
      .home {
    width: 100%;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    color: black;
  }
  
  
  
  .skills {
    font-size: 35px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .title-container {
    background-color: #A64521;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
  }
  
  .skills h1 {
    color: #3279A6;
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-size: 80px;
    padding: 20px;
    margin: 20px;
    

  }

 .skills .list-box {
    display: flex;
    justify-content: center;
    
    

 }

 .skills {
    font-size: 35px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center; 
  }
  
  .list {
    list-style: none;
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
  }
    
    

  ol {
    padding-top: 0px;
    padding-inline-start: 0px;
    margin-block-start: 0px;
  }

  li {
    list-style-type: none;
  }

  .item {
    display: flex;
    padding: 80px;
    padding-top: 0;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
  }
  
  .list span {
    font-size: 20px;
    
  }
  
  @media only screen and (max-width: 600px) {
    
  
    .skills {
      text-align: center;
    }
    .list {
      padding: 0;
    }
  
    .skills h1 {
      font-size: 30px;
    }
  }`}</style>
    </div>
  )
}

export default Skills
