// import "./App.css";
import "../../styles/FilmProjectDetails/FilmProjectDetails.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const movie = {
  title: "Drive",
  posterUrl:
    "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/249/2023/12/19103252/602vevIURmpDfzbnv5Ubi6wIkQm.jpg",
  genres: "Drama/Romance",
  synopsis:
    "This action drama follows a mysterious man who has multiple jobs as a garage mechanic, a Hollywood stuntman and a getaway driver seems to be trying to escape his shady past as he falls for his neighbor - whose husband is in prison and who's looking after her child alone. Meanwhile, his garage mechanic boss is trying to set up a race team using gangland money, which implicates our driver as he is to be used as the race team's main driver. Our hero gets more than he bargained for when he meets the man who is married to the woman he loves.",
  director: "Nicolas Winding Refn",
  filmingDates: {
    start: "2010-09-25",
    end: "2010-11-12",
  },
  budget: "$15 million",
  productionTime: "7 weeks",
  productionCompanies: [
    "Bold Films",
    "Marc Platt Productions",
    "OddLot Entertainment",
  ],
  filmingLocations: [
    "Los Angeles, California, USA",
    "Downtown LA",
    "Echo Park",
    "Griffith Park",
  ],
  availableRoles: [
    {
      roleName: "Supporting Male Lead",
      description:
        "Charming and witty character who becomes Sarah's love interest.",
      requirements: [
        "Age: 25-35",
        "emotional range",
        "subtle expression",
        "chemistry with male lead",
      ],
      payRange: [55000, 75000],
      availability: true,
    },
    {
      roleName: "Standard",
      description:
        "Irene’s husband, recently released from prison, trying to go straight.",
      requirements: [
        "Age: 30-40",
        "intense screen presence",
        "physical acting",
        "stunt coordination experience",
      ],
      payRange: [35000, 45000],
      availability: false,
    },
  ],
};

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
