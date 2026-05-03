import "../../styles/Team.css";

const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Camila Mera",
      role: "Nutricionista",
      image: "/src/assets/imgs/team-member2.avif",
    },
    {
      id: 2,
      name: "Francisco Sagredo",
      role: "Preparador físico",
      image: "/src/assets/imgs/team-member1.avif",
    },
    {
      id: 3,
      name: "Miguel Negron",
      role: "Nutricionista",
      image: "/src/assets/imgs/team-member3.avif",

    },
  ];
  return (
    <>
      <section className="team-section">
        <h4 className="team-subtitle">¿Quienes somos?</h4>
        <h3 className="team-title">NUESTRO EQUIPO</h3>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-imageWrapper">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-image"
                />
              </div>
              <div className="team-info">
                <span className="team-role">{member.role}</span>
                <h3 className="team-name">{member.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TeamPage;
