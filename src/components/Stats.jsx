import "./header.css";

export function Stats() {
  const stats = [
    { value: "100+", label: "Projets livrés" },
    { value: "50+", label: "Clients satisfaits" },
    { value: "98%", label: "Taux de satisfaction" },
    { value: "4.9", label: "Note moyenne" }
  ];

  return (
    <section className="stats">
      <div className="container stats-grid">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-item">
            <div className="stat-num">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;