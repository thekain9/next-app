//Display of each project (image and title) individually. 

function ProjectItem({ image, name }) {  
  return (
      <div className='projectItem'>
          <div className='bgImage' style={{ backgroundImage: `url(${image})` }}></div>
          <h1>{name}</h1>
          <style jsx>{`
            .projectItem {
              border-radius: 15px;
              width: 600px;
              height: 600px;
              margin: 40px;
              box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
              text-align: center;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }

            .projectItem .bgImage {
              border-top-left-radius: 15px;
              border-top-right-radius: 15px;
              width: 500px;
              height: 500px;
              background-size: cover;
              background-repeat: no-repeat;
              background-position: center;
            }

            .projectItem .bgImage[data-image]:before {
              content: attr(data-image);
              display: none;
            }

            .projectItem .bgImage[data-image] {
              background-image: url(attr(data-image url));
            }
          `}</style>

      </div>
  );
}
export default ProjectItem;


