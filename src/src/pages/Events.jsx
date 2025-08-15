import Reveal from "../Reveal.jsx";
import calendarIcon from "../assets/calendar.png";

export default function Events() {
  return (
    <main style={{maxWidth: 1100, margin: "0 auto", padding: "24px 20px"}}>
      {/* Header */}
      <header style={{display: "flex", alignItems: "center", gap: 12, marginBottom: 18}}>
        <div className="events-icon-wrap">
          <img src={calendarIcon} alt="Calendar" className="events-icon" />
        </div>
        <div>
          <h1 className="events-title">Events &amp; Activities</h1>
          <p className="events-subtitle">Stay updated with all DECA chapter events</p>
        </div>
      </header>

      {/* Card */}
      <Reveal>
        <section className="events-card" role="status" aria-live="polite" tabIndex="0">
          <div className="events-card-calendar" aria-hidden="true">
            {/* Simple calendar glyph */}
            <div className="cal-bar" />
            <div className="cal-body" />
          </div>
          <h2 className="events-card-title">No Events Scheduled</h2>
          <p className="events-card-text">
            Our calendar is currently clear. Please check back soon for updates on upcoming meetings,
            competitions, and workshops!
          </p>
        </section>
      </Reveal>
    </main>
  );
}
