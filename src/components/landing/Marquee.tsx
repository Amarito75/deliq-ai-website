import * as React from "react";

export function Marquee() {
  const items = ["Mails triés", "Devis envoyés", "Posts publiés", "Factures relancées", "RDV calés", "Avis traités", "Leads qualifiés", "CR rédigés"];
  return (
    <div className="marquee">
      <div className="marquee-track">
        <span>
          {items.map((t, i) => (
            <React.Fragment key={i}>
              {t}
              <span className="dot" />
            </React.Fragment>
          ))}
        </span>
        <span>
          {items.map((t, i) => (
            <React.Fragment key={"b" + i}>
              {t}
              <span className="dot" />
            </React.Fragment>
          ))}
        </span>
      </div>
    </div>
  );
}
