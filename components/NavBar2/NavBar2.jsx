import { data } from "../../data/contact-data";

export function NavBarFooter({ name, href, ...props }) {
  const phoneLinksStyles = { fontSize: "1.0em", color: "white" };

  return (
    <>
      <div className="phonebardiv">
          {data.map((e, i) => {
            return (
              <div className="phonesdiv" key={i}>
                {e.contact.map((e, i) => {
                  return (
                    <a
                      style={phoneLinksStyles}
                      className="phoneLinksStyles"
                      href={e.href}
                      key={i}
                      title={e.title}
                    >
                      <e.icons className="phoneIconsStyles"></e.icons>
                      {e.name}
                    </a>
                  );
                })}
              </div>
            );
          })}
      </div>
      <style jsx>{`

        .phonesdiv {
          position: fixed;
          top: 0;
          right: 0;
          left: 0;
          z-index: 1030;
          width: 100%;
          height: 3rem;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          background-color: #692dd5;
          text-decoration: none;
          font-size: 1.4rem;
          margin-top: 0.1rem;
          padding: 0.1rem;
          color: inherit;
          text-decoration: none;
        }
        .phoneLinksStyles {
          font-size: 0.8rem;
          text-decoration: none;
        }

        @media (max-width: 990px) {
          .phonesdiv {
            text-decoration: none;
            font-size: 0.7rem;
              font-weight: 795;

          }
        }
      `}</style>
    </>
  );
}

export default NavBarFooter;