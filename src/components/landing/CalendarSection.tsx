"use client";

import { useState } from "react";
import { Icon } from "../Icons";

export function CalendarSection() {
  const [viewMonth, setViewMonth] = useState(new Date(2026, 4, 1));
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const slots = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"];
  const taken = ["10:30", "14:00", "15:30"];
  const monthName = viewMonth.toLocaleDateString("fr-FR", { month: "long", year: "numeric" });
  const firstDay = new Date(viewMonth.getFullYear(), viewMonth.getMonth(), 1);
  const daysInMonth = new Date(viewMonth.getFullYear(), viewMonth.getMonth() + 1, 0).getDate();
  const startOffset = (firstDay.getDay() + 6) % 7;
  const todayStart = new Date(2026, 4, 6).getTime();

  type Day = { empty?: boolean; d?: number; available?: boolean; isToday?: boolean };
  const days: Day[] = [];
  for (let i = 0; i < startOffset; i++) days.push({ empty: true });
  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(viewMonth.getFullYear(), viewMonth.getMonth(), d);
    const isPast = date.getTime() >= todayStart;
    const isToday = date.getTime() === todayStart;
    const dow = date.getDay();
    const isWeekend = dow === 0 || dow === 6;
    const tooFar = (date.getTime() - todayStart) > 1000 * 60 * 60 * 24 * 45;
    const available = isPast && !isWeekend && !tooFar;
    days.push({ d, available, isToday });
  }
  const dows = ["lun", "mar", "mer", "jeu", "ven", "sam", "dim"];

  const formatSel = () => {
    if (!selectedDay) return "";
    const date = new Date(viewMonth.getFullYear(), viewMonth.getMonth(), selectedDay);
    return date.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" });
  };

  return (
    <section className="section" id="calendar">
      <div className="wrap">
        <div className="section-head">
          <div><span className="eyebrow">Agenda · 30 min · gratuit</span></div>
          <h2>Cale ta démo<br />en <span className="ital">deux</span> <span className="lime">clics.</span></h2>
        </div>
        <div className="cal-wrap">
          <div className="cal-info">
            <div className="cal-org"><span className="logo-mark" />decliq.ai</div>
            <h3>Démo perso de <span className="ital">30 minutes</span></h3>
            <div className="cal-meta">
              <div className="cal-meta-row"><Icon.Clock />30 minutes</div>
              <div className="cal-meta-row"><Icon.Cam />Visio Google Meet</div>
              <div className="cal-meta-row"><Icon.Globe />Fuseau Europe / Paris</div>
            </div>
            <div className="cal-perks">
              <div className="cal-perk"><span className="check"><Icon.Check /></span>Démo live sur ton activité</div>
              <div className="cal-perk"><span className="check"><Icon.Check /></span>Plan d&apos;attaque concret</div>
              <div className="cal-perk"><span className="check"><Icon.Check /></span>Sans engagement, sans CB</div>
            </div>
            <div className="cal-desc">
              On te montre les agents en live sur ta vraie activité. Tu repars avec un plan d&apos;attaque concret — même si tu choisis de ne pas signer.
            </div>
          </div>
          <div className="cal-picker">
            <div className="cal-picker-head">
              <h4>{monthName}</h4>
              <div className="cal-nav">
                <button className="cal-nav-btn" onClick={() => setViewMonth(new Date(viewMonth.getFullYear(), viewMonth.getMonth() - 1, 1))}><Icon.ChevL /></button>
                <button className="cal-nav-btn" onClick={() => setViewMonth(new Date(viewMonth.getFullYear(), viewMonth.getMonth() + 1, 1))}><Icon.ChevR /></button>
              </div>
            </div>
            <div className="cal-grid">
              {dows.map((d) => <div className="cal-dow" key={d}>{d}</div>)}
              {days.map((day, i) => {
                if (day.empty) return <div className="cal-day empty" key={i} />;
                const cls = day.available ? "available" : "disabled";
                const todayCls = day.isToday ? "today" : "";
                const sel = selectedDay === day.d ? "selected" : "";
                return (
                  <button
                    key={i}
                    className={`cal-day ${cls} ${todayCls} ${sel}`}
                    onClick={() => {
                      if (day.available && day.d !== undefined) {
                        setSelectedDay(day.d);
                        setSelectedSlot(null);
                      }
                    }}
                  >
                    {day.d}
                  </button>
                );
              })}
            </div>
            {selectedDay && (
              <div className="cal-slots">
                <div className="cal-slots-label">// Créneaux dispo · {formatSel()}</div>
                <div className="cal-slots-grid">
                  {slots.map((s) => {
                    const isTaken = taken.includes(s);
                    const sel = selectedSlot === s ? "selected" : "";
                    return (
                      <button
                        key={s}
                        className={`cal-slot ${isTaken ? "taken" : ""} ${sel}`}
                        onClick={() => !isTaken && setSelectedSlot(s)}
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>
                {selectedSlot && (
                  <div className="cal-confirm">
                    <div className="cal-confirm-info">
                      <div style={{ color: "var(--fg-dim)", fontSize: 11, marginBottom: 4, fontFamily: "var(--mono)", letterSpacing: ".1em", textTransform: "uppercase" }}>
                        Confirmer le créneau
                      </div>
                      <div className="when">{formatSel()} · {selectedSlot}</div>
                    </div>
                    <button className="btn btn-accent">Réserver <Icon.Arrow /></button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
