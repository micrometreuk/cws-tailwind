import { FaPhone, FaFacebook, FaWhatsapp, FaYoutube, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

export function Contact() {
  return (
    <div className="contact-container bg-white rounded-lg dark:bg-gray-800">
      <main>
        <div className="row">
          <div className="column">
            <div className="right-column">
              <div className="contact">
                <p className="contact-description">
                  Giving us a call.
                  <br />
                  <a
                    href="tel:020-8665-4227<"
                    title="Call"
                  >
                    <FaPhone size={38}

                      style={{ color: 'indigo' }}
                    />
                    020-8665-4227
                  </a>
                  <br />

                  Email us at
                  <br />
                  <a
                    href="mailto:info@croydonwebservices.com"
                    title="Email info@croydonwebservices.com"
                  >
                    <FaEnvelope size={38}
                      style={{ color: 'indigo' }}

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