import { Link } from "react-router-dom";

export default function PeopleList({ people }) {
  return (
    <section className="people-list">
      {/* div - good candidate for a PeopleCard */}
      {people.map((person, idx) => (
        <Link to={`/people/${person._id}`}>
          <div className="people-card" key={person._id}>
            <h3>{person.name}</h3>
            <img
              className="profile-image"
              src={person.image}
              alt={person.name}
            />
            <p>{person.title}</p>
          </div>
        </Link>
      ))}
    </section>
  );
}
