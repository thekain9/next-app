import React from 'react';

function Contact() {
  return (
    <div className="contact">
        <div className='contact-form'>
            <div className='title-container'>
                <h1>CONTACT</h1>
            </div>
            <form>
                <div className="input-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                </div>
                
                <div className="input-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                </div>

                <div className="input-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>
                </div>

                <button type="submit">Send Message</button>
            </form>
      </div>

      <style jsx>{`
        .contact {
            width: 100%;
              align-items: center;
              font-family: 'Montserrat', sans-serif;
        }

        .contact-form  {
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

        .contact-form h1 {
              color: #3279A6;
              font-family: 'Montserrat', sans-serif;
              font-weight: 800;
              font-size: 80px;
              padding: 20px;
              margin: 20px;
            }
        
        form {
            padding-top: 60px;
        }

        .input-group {
            font-family: 'Montserrat', sans-serif;
          width: 100%;
          max-width: 500px;
          margin-bottom: 20px;
        }

        label {
        font-family: 'Montserrat', sans-serif;
          display: block;
          margin-bottom: 10px;
        }

        input, textarea {
            font-family: 'Montserrat', sans-serif;
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 1rem;
        }

        button {
            font-family: 'Montserrat', sans-serif;
          padding: 10px 20px;
          font-size: 1rem;
          background-color: #2C4373;
          color: #fff;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        button:hover {
          background-color: #1A2A5B;
        }
      `}</style>
    </div>
  );
}

export default Contact;
