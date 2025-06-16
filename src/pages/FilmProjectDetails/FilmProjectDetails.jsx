// import "./App.css";
import "../../styles/FilmProjectDetails/FilmProjectDetails.css";
import { movieDrive as movie } from "../../assets/data/constants.js";
import { Link } from "react-router-dom";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <FilmOverview film={movie} />
      <Synopsis synopsis={movie.synopsis} />
      <AvailableRoles roles={movie.availableRoles} />
    </div>
  );
}

function FilmOverview({ film }) {
  return (
    <div className="film-overview">
      <div className="film-poster-container">
        <img
          src={film.posterUrl}
          alt={`${film.title} poster`}
          className="film-poster"
        />
      </div>
      <div className="film-details-container">
        <FilmDetails film={film} />
      </div>
    </div>
  );
}

function FilmDetails({ film }) {
  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div>
      <h1>{film.title}</h1>
      <h2>{film.genres}</h2>
      <div className="film-icon i">
        <p>
          <i class="fa-regular fa-user"></i> Director: {movie.director}
        </p>
        <p>
          <i class="fa-regular fa-calendar"></i>{" "}
          {formatDate(film.filmingDates.start)} -{" "}
          {formatDate(film.filmingDates.end)}
        </p>
        <p>
          <i class="fa-regular fa-star"></i> Budget: {movie.budget}
        </p>
        <p>
          <i class="fa-regular fa-clock"></i> {movie.productionTime} production
        </p>
        <div className="producers">
          <h3>
            <i class="fa-regular fa-building"></i> Production Companies
          </h3>
          <div>
            {film.productionCompanies.map((company, i) => (
              <InfoTag key={i} text={company} />
            ))}
          </div>
        </div>
        <div className="locations">
          <h3>
            <i class="fa-solid fa-location-dot"></i> Filming Locations
          </h3>
          <div>
            {film.filmingLocations.map((location, i) => (
              <InfoTag key={i} text={location} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoTag({ text, className = "" }) {
  return <span className={`info-tag ${className}`}>{text}</span>;
}

function Synopsis({ synopsis }) {
  return (
    <div className="synopsis">
      <h2>Synopsis</h2>
      <p>{synopsis}</p>
    </div>
  );
}

function AvailableRoles({ roles }) {
  // useState is needed here, where role availability status is displayed
  const [filledRoles, setFilledRoles] = useState(
    roles.reduce((acc, role, index) => {
      acc[index] = !role.availability;
      return acc;
    }, {})
  );

  const handleApply = (roleIndex) => {
    setFilledRoles((prev) => ({
      ...prev,
      [roleIndex]: true,
    }));
  };

  return (
    <div>
      <h2 className="">Available Roles</h2>
      <div className="role-listings">
        {roles.map((role, i) => (
          <Role
            key={i}
            role={role}
            isFilled={filledRoles[i]}
            onApply={() => handleApply(i)}
          />
        ))}
      </div>
    </div>
  );
}

function Role({ role, isFilled, onApply }) {
  return (
    <div className={`listing ${isFilled ? "role-filled" : ""}`}>
      <div className="role-header">
        <h3 className="role-title">{role.roleName}</h3>
        <span
          className={`role-badge ${isFilled ? "badge-filled" : "badge-open"}`}
        >
          {isFilled ? "Filled" : "Open"}
        </span>
      </div>

      <p className="role-description">{role.description}</p>

      <div className="role-requirements">
        <p className="requirements-title">Requirements:</p>
        <div className="tags-container">
          {role.requirements.map((requirement, i) => (
            <InfoTag key={i} text={requirement} className="tag-pill" />
          ))}
        </div>
      </div>

      <p className="pay-range">
        Pay Range: ${role.payRange[0].toLocaleString()} - $
        {role.payRange[1].toLocaleString()}
      </p>

      {!isFilled && (
        <div className="apply-button-wrapper">
          <button onClick={onApply} className="apply-button">
            Apply Now
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
