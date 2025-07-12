import './FilmProjectDetails.css';
import Header from '../../components/Header/Header';
import { useState } from 'react';
import { movieDrive as movie } from '../../assets/data/constants.js';

import { Users, Calendar, Star, Clock, Building, MapPin } from 'lucide-react';

function FilmProjectDetails() {
  return (
    <>
      <Header />
      <div className="FilmProjectDetails">
        {/* Change to Reusable Component */}
        <button>
          <i class="fa-solid fa-arrow-left back-button" /> Back to Movies
        </button>

        <FilmOverview film={movie} />
        <Synopsis synopsis={movie.synopsis} />
        <AvailableRoles roles={movie.availableRoles} />
      </div>
    </>
  );
}

function FilmOverview({ film }) {
  return (
    <section className="film-overview">
      <img src={film.posterUrl} alt={`${film.title} poster`} className="film-poster" />
      <FilmDetails film={film} />
    </section>
  );
}

function FilmDetails({ film }) {
  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="film-details">
      <h1 className="film-title">{film.title}</h1>
      <h2 className="film-genres">{film.genres}</h2>
      <div className="column-container">
        <p>
          <Users className="icon-color" /> Director: {movie.director}
        </p>
        <p>
          <Calendar className="icon-color" /> {formatDate(film.filmingDates.start)} -{' '}
          {formatDate(film.filmingDates.end)}
        </p>
        <p>
          <Star className="icon-color" /> Budget: {movie.budget}
        </p>
        <p>
          <Clock className="icon-color" /> {movie.productionTime} production
        </p>
      </div>
      <h4>
        <Building className="icon-color" /> Production Companies
      </h4>
      <div>
        {film.productionCompanies.map((company, i) => (
          <InfoTag key={i} text={company} />
        ))}
      </div>
      <h4>
        <MapPin className="icon-color" /> Filming Locations
      </h4>
      <div>
        {film.filmingLocations.map((location, i) => (
          <InfoTag key={i} text={location} />
        ))}
      </div>
    </div>
  );
}

function InfoTag({ text, className = '' }) {
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
    <div className="available-roles">
      <h2 className="">Available Roles</h2>
      <div className="role-listings">
        {roles.map((role, i) => (
          <Role key={i} role={role} isFilled={filledRoles[i]} onApply={() => handleApply(i)} />
        ))}
      </div>
    </div>
  );
}

function Role({ role, isFilled, onApply }) {
  return (
    <article className={`listing ${isFilled ? 'role-filled' : ''}`}>
      <header className="role-header">
        <h3 className="role-title">{role.roleName}</h3>
        <span className={`role-badge ${isFilled ? 'badge-filled' : 'badge-open'}`}>
          {isFilled ? 'Filled' : 'Open'}
        </span>
      </header>

      <p className="role-description">{role.description}</p>

      <p className="requirements-title">Requirements:</p>
      <div className="tags-container">
        {role.requirements.map((requirement, i) => (
          <InfoTag key={i} text={requirement} className="tag-pill" />
        ))}
      </div>

      <span className="pay-range">
        ${role.payRange[0].toLocaleString()} - ${role.payRange[1].toLocaleString()}
      </span>

      {!isFilled && (
        <button onClick={onApply} className="apply-button">
          Apply Now
        </button>
      )}
    </article>
  );
}

export default FilmProjectDetails;
