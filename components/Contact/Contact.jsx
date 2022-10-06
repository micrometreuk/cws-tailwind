import { FaPhone, FaFacebook, FaWhatsapp, FaYoutube, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const phoneTitleStyles = {
  fontSize: "1.0rem",
  color: "black",
  margin: "0.1rem",
  padding: "0.1rem",
  textDecoration: "none",
};

const phoneIconStyles = {
  fontSize: "1.0rem",
  color: "olive",
  margin: "0.1rem",
  textDecoration: "none",
};

const phoneLinksStyles = {
  fontSize: "1.0rem",
  color: "teal",
  margin: "0.1rem",
  padding: "0.1rem",
  textDecoration: "none",
  display: "flex",
};
const emailIconStyles = {
  fontSize: "1.0rem",
  color: "olive",
  margin: "0.1rem",
  textDecoration: "none",
};
const emailLinksStyles = {
  fontSize: "1.0rem",
  color: "#008080",
  margin: "0.1rem",
  textDecoration: "none",
};

const socialIconStyles = {
  fontSize: "2.0rem",
  color: "black",
  margin: "0.1rem",
  padding: "0.5rem",
};
export function Contact() {
  return (
    <div className="contact-container">
      <main>
        <div className="row">
          <div className="column">
            <div className="right-column">
              <div className="contact">
                <p className="contact-description">
                  Giving us a call.
                  <br />
                  <a
                    href="tel:07445549727<"
                    title="Call evans exterior cleaning"
                    style={{ color: '#000' }} >
                    <FaPhone size={38} 
                    
                    style={{ color: 'aqua' }}
                    />
                    020-8665-4227
                  </a>
                  <br />

                  Email us at
                  <br />
                  <a
                    href="mailto:info@croydonwebservices.com"
                    title="Email info@croydonwebservices.com"
                    style={{ color: '#000' }}
                  >
                    <FaEnvelope size={38} 
                    style={{ color: 'aqua' }}
                    
                    />
                    info@croydonwebservices.com
                  </a>

                </p>

                <div>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="left-column">
              <div className="contact">
                <div className="contact-map">
                  <div className="contactimage"></div>
                </div>
                <div className="contact-details">
                  <p className="business-description">
                    Business Hours
                    <br />
                    Monday-Friday from 09:00am - 5pm
                    <br />
                    Saturday and Sunday Closed
                  </p>
                </div>
                <div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <style jsx>{`
        .contactimage{
          background-image: 
            
            url(./1.webp);
          background-repeat: no-repeat;
          background-size: auto;
          width: 100%;
          min-height: 38vh;
          min-width: 42vh;


        }
        .contact-container {
          padding: 0.1rem;
          margin-top: 2.0rem;
           border: 0.1rem solid teal;

        }

        main {
          padding: 0.1rem;
          margin 0.1rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

        }

        .row {
          padding: 0.1rem;
          margin: 0.1rem;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          width: 100%;
          align-items: center;
          justify-content: center;
        }

        .column {
          margin: 0.9rem;
          flex-basis: 45%;
          padding: 0.2rem;
          display: flex;
          flex-direction: column;
          flex-basis: 100%;
          flex: 1;
          text-align: left;
          text-decoration: none;
          transition: color 0.15s ease, border-color 0.15s ease;
          background-color: white;
           border: 0.2rem solid white;
        }
          .contact-description{
          margin: 0;
          font-size: 1.25rem;

        }

          .contact-map{
           border: 0.1rem solid teal;
          padding: 0.2rem;
          margin 0.1rem;
        }
        .business-description {

          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
                code {
          padding: 0.75rem;
          color: #008080;
          font-size: 1.1rem;
        }

      `}</style>
    </div>
  );
}
export default Contact;
