import React from 'react';
import '../LandingPage/LandingPage.css';
import { Calendar, Clock, User, AlarmClock, Search, Bell, Star , MapPin, Clock4,TrendingUp, Award , DollarSign, AlertCircle, Film,  Tv, Users, Globe, Heart, Zap, Smile, Skull } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
    const navigate = useNavigate();

    const goToProfile = () => 
    {
        navigate("/profile");
    };
    // the above navigation to profile page is temporary as i have not made changes to the icons will do upon getting options and their settings
  const recommendations = [
    {
      title: 'Drive in Manhattan',
      role: 'Supporting Male Lead',
      genre: 'Drama/Romance',
      description: 'A heartwarming story about second chances in the big city',
      location: 'New York, NY',
      duration: '3 months',
      budget: '$5M - $15M',
      match: '95%',
      tags: ['Age 25-35', 'Strong drama skills', 'NYC local greeted'],
      image: '/frontend/images/landingPage/lens.png',
    },
    {
      title: 'The Last Detective',
      role: 'Detective Partner',
      genre: 'Crime Thriller',
      description: 'A gritty crime thriller set in modern-day Los Angeles.',
      location: 'Los Angeles, CA',
      duration: '4 months',
      budget: '$15M - $20M',
      match: '82%',
      tags: ['Age 30-90', 'Action experience', 'Physical Fitness required'],
      image: '/frontend/images/landingPage/lens.png',
    },
    {
      title: "Summer's End",
      role: 'Father Figure',
      genre: 'Crime Thriller',
      description: 'An indie film about family bonds and growing up.',
      location: 'Portland, OR',
      duration: '6 weeks',
      budget: '$2M - $6M',
      match: '82%',
      tags: ['Age 35-55', 'Fatherly personality', 'Indie film experience'],
      image: '/frontend/images/landingPage/lens.png',
    },
  ];

  const castingCalls = [
    {
      title: "Ocean's Revenge",
      role: 'Tech Specialist',
      urgent: true,
      director: 'James Whpn',
      date: 'Dec 15, 2024',
      time: '2:30PM–3:30PM',
      due: 'Dec 10, 2024',
      required: ['1-min Monologue'],
    },
    {
      title: 'Shadows & Lights',
      role: 'Lead Detective',
      urgent: false,
      director: 'Ava Moren',
      date: 'Jan 5, 2025',
      time: '1:00PM–2:00PM',
      due: 'Dec 30, 2024',
      required: ['Headshot', 'Resume'],
    },
  ];

const KpiCard = ({ Icon, iconColor, value, label, change, changeColor }) => (
//   dont remove "Icon" from the above line it will give error its called in a unique way 
  <div className="kpi-card">
    <div className="kpi-icon-box">
      <Icon size={80} color={iconColor} />
    </div>
    <h2>{value}</h2>
    <p className="kpiLabel">{label}</p>
    <span className={`change ${changeColor}`}>{change}</span>
  </div>
);
  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <img src="/frontend/images/footer/FilmyAI_logo.png" alt="Filmy AI Logo" />
          <span className="logo-text">FilmyAI</span>
        </div>
        <div className="search-container">
          <div className="search-wrapper">
            <span className="search-icon"><Search size={16} style={{ marginRight: '6px' }} /></span>
            <input
              type="text"
              className="search-input"
              placeholder="Search movies, roles, directors..."
            />
          </div>
        </div>
        <div className="icons">
          <span className="icon"><Bell size={25} color="white" style={{ marginRight: '6px' }} /> </span>
            <span className="icon" onClick={goToProfile} style={{ cursor: "pointer" }}>
                <User size={25} color="white" />
            </span>

        </div>
      </header>

      <main className="home-layout">
        {/* Welcome */}
        <section className="welcome section">
          <h1>
            Welcome back, <span className="highlight">Anu!</span>
          </h1>
          <p>
            Ready to land your next big role? We’ve curated 
           
          </p>
          <p>the perfect opportunities based on your</p>
          <p> profile and experience.</p>
          <div className="info">
            <span><Star size={16} color="#ff7a00" style={{ marginRight: '6px' }} /> 4.8 Rating</span>
            <span><Calendar size={16} color="#ff7a00"  style={{ marginRight: '6px' }} /> 12 Auditions This Month</span>
            <span><MapPin size={16}  color="#ff7a00" style={{ marginRight: '6px' }} /> Los Angeles, CA</span>
          </div>
          <button className="primary-btn">View New Opportunities</button>
        </section>

        {/* KPI Grid */}
        <section className="kpi-grid section">
          {[
    {
      Icon: TrendingUp,
      iconColor: '#4dd17a',
      label: 'Active Applications',
      value: 8,
      change: '+2 this week',
      changeColor: 'green',
    },
    {
      Icon: Clock4,
      iconColor: '#ff7a00',
      label: 'Pending Responses',
      value: 5,
      change: '2 Urgent',
      changeColor: 'orange',
    },
    {
      Icon: Users,
      iconColor: '#4dabf7',
      label: 'Profile Views',
      value: 142,
      change: '+18% this month',
      changeColor: 'green',
    },
    {
      Icon: Award,
      iconColor: '#cc5de8',
      label: 'Success Rate',
      value: '73%',
      change: '+5% improvement',
      changeColor: 'green',
    },
  ].map((item, idx) => (
    <KpiCard
      key={idx}
      Icon={item.Icon}
      iconColor={item.iconColor}
      value={item.value}
      label={item.label}
      change={item.change}
      changeColor={item.changeColor}
    />
  ))}
        </section>

        {/* Recommendations */}
        <section className="recommendations section">
        <div className="rec-header">
            <div className="rec-header-text">
                <h2>Recommended for You</h2>
                <p>Curated based on your profile and preferences</p>
            </div>
            <button className="view-all-btn">View All Recommendations</button>
        </div>


        <div className="rec-grid">
            {recommendations.map((rec, idx) => (
            <div className="rec-card" key={idx}>
                <div className="rec-top">
                <img src={rec.image} alt={rec.title} className="rec-img" />
                <div className="match">{rec.match} Match</div>
                </div>
                <div className="rec-bottom">
                <div className="genre">{rec.genre}</div>
                <h3>{rec.title}</h3>
                <p className="role">{rec.role}</p>
                <p className="desc">{rec.description}</p>
                <p><MapPin size={20} color="#ffa94d" style={{ marginRight: '6px' }} />{rec.location}</p>
                <p><Clock4 size={20} color="#ffa94d" style={{ marginRight: '6px' }} />{rec.duration}</p>
                <p><DollarSign size={20} color="#ffa94d" style={{ marginRight: '6px' }} />{rec.budget}</p>
                <div className="tags">
                    {rec.tags.map((t, i) => (
                    <span key={i}>{t}</span>
                    ))}
                </div>
                <button className="primary-btn">Apply Now</button>
                </div>
            </div>
            ))}
        </div>
        </section>


        <section className="casting-calls section">
            <div className="casting-container">
        <div className="casting-header">
            <div>
            <h2>Your Casting Calls</h2>
            <p>Invitations and auditions you’ve received</p>
            </div>
            <button className="view-all-btn">View All Casting Calls</button>
        </div>

        {castingCalls.map((call, idx) => (
            <div className="call-card" key={idx}>
            <div className="call-main">
                <div className="call-info">
                <h3>
                    {call.title}{' '}
                    {call.urgent && <span className="urgent">Urgent</span>}
                </h3>
                <p className="role">{call.role}</p>
                <p className="description">
                    Seeking a charismatic actor for a tech-savvy character in action thriller.
                </p>
                <div className="call-meta">
                    <span><User size={16}  style={{ marginRight: '6px' }} />Dir: {call.director}</span>
                    <span><Calendar size={16} style={{ marginRight: '6px' }} />{call.date}</span>
                    <span><Clock4 size={16} style={{ marginRight: '6px' }} /> {call.time}</span>
                    <span><AlertCircle size={16}  style={{ marginRight: '6px' }} /> Due: {call.due}</span>
                </div>
                <div className="required-tags">
                    Required: {call.required.map((r, i) => (
                    <span key={i} className="tag">{r}</span>
                    ))}
                </div>
                </div>
                <div className="call-actions">
                <button className="primary-btn">Confirm Audition</button>
                <button className="secondary-btn">View Details</button>
                </div>
            </div>
            </div>
        ))}</div>
        </section>


        {/* Categories */}
        <section className="categories section">
        <h2>Browse by Categories</h2>
        <p>Explore opportunities across different types of productions and genres</p>
        <div className="category-grid">
            {[
            {
                label: 'Feature Films',
                roles: 8,
                icon: <Film size={40} color="white"  />,
                iconBg: '#ff7a00',
                description: 'Major studio and independent feature films'
            },
            {
                label: 'TV Series',
                roles: 24,
                icon: <Tv size={40} color="white"  />,
                iconBg: '#4dabf7',
                description: 'Television series and streaming shows'
            },
            {
                label: 'Commercials',
                roles: 45,
                icon: <Users size={40} color="white"  />,
                iconBg: '#4dd17a',
                description: 'Brand commercials and advertising campaigns'
            },
            {
                label: 'Web Series',
                roles: 10,
                icon: <Globe size={40} color="white"  />,
                iconBg: '#a259ff',
                description: 'Online content and digital series'
            },
            {
                label: 'Romance',
                roles: 5,
                icon: <Heart size={40} color="white"  />,
                iconBg: '#ff5ca8',
                description: 'Romantic comedies and drama films'
            },
            {
                label: 'Action/Thriller',
                roles: 50,
                icon: <Zap size={40} color="white"  />,
                iconBg: '#ff4d4f',
                description: 'Action-packed and suspenseful productions'
            },
            {
                label: 'Comedy',
                roles: 24,
                icon: <Smile size={40} color="white"  />,
                iconBg: '#ffd43b',
                description: 'Comedy films and lighthearted content'
            },
            {
                label: 'Horror/Sci-Fi',
                roles: 12,
                icon: <Skull size={40} color="white"  />,
                iconBg: '#adb5bd',
                description: 'Horror and science fiction productions'
            }
            ].map((cat, idx) => (
            <div className="category-card" key={idx}>
                <div className="icon-box" style={{ backgroundColor: cat.iconBg }}>{cat.icon}</div>
                <h3>{cat.label}</h3>
                <p className="desc">{cat.description}</p>
                <p className="count">
                <span className="num">{String(cat.roles).padStart(2, '0')}</span>{' '}
                <span className="sub">available roles</span>
                </p>
                <button className="browse-btn">Browse Roles</button>
            </div>
            ))}
        </div>
        <div className="view-all-wrapper">
            <button className="view-all-btn">View All Categories</button>
        </div>
        </section>

        
      </main>
    </>
  );
}
