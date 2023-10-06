import React from 'react';


function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <div className='title-container'>
        <h1>ABOUT ME</h1>
        </div>
        <div className='prompt'>
          <p>As a freelance designer transitioning into full-stack web development, I offer a unique blend of design prowess and technical proficiency. With a strong foundation in Adobe Suite, expertise in web technologies, and a commitment to continuous learning, I'm a motivated and reliable professional ready to bridge the gap between design and technology.</p>
          <p><strong>HIGHLITS:</strong></p>
          <p><strong>Design Excellence:</strong> Proficient in Adobe Photoshop and Illustrator, I excel in crafting visually stunning designs with a keen eye for shape, color, and typography.</p>
          <p><strong>Full-Stack Web Development:</strong> I've completed a rigorous full-stack web development bootcamp, equipping me with skills in ReactJS, Redux, Node.js, and more.</p>
          <p><strong>Motivated Learner:</strong> Eager to dive deeper into web development, I stay updated with industry trends and embrace challenges as opportunities for growth.</p>
          <p><strong>Reliability:</strong> Known for meeting deadlines and delivering quality work, I bring professionalism to every project.</p>
          <p>I'm excited to contribute my creative and technical skills to your team, offering a fresh perspective and a commitment to excellence. Let's collaborate to create exceptional digital experiences.</p>
        </div>
        <style jsx>{`
            .home {
              width: 100%;
              align-items: center;
              font-family: 'Montserrat', sans-serif;
            }
            
            .about {
              width: 100%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              text-align: left;
              color: black;
            }
            
            .title-container {
              background-color: #A64521;
              border-bottom-left-radius: 50px;
              border-bottom-right-radius: 50px;
            }

            .about h1 {
              color: #3279A6;
              font-family: 'Montserrat', sans-serif;
              font-weight: 800;
              font-size: 80px;
              padding: 20px;
              margin: 20px;
            }
            
            .about .prompt {
              font-family: 'Montserrat', sans-serif;
              font-weight: 500;
              width: 60%;
              font-size: 20px;
              line-height: 26px;
              padding-top: 40px;
            }

            @media only screen and (max-width: 600px) {
              .about h1 {
                font-size: 40px;
              }
            
              .about .prompt {
                margin-top: 10px;
                font-size: 20px;
                width: 80%;
              }
            }
          `}</style>
          
        </div>
      </div>
    );
  }

export default Home;