import {
  AlertCircle,
  Award,
  Calendar, Clock4,
  DollarSign,
  Film,
  Globe,
  Heart,
  MapPin,
  Skull,
  Smile,
  Star, TrendingUp,
  Tv,
  User,
  Users,
  Zap
} from 'lucide-react';
import React from 'react';
import Header from "../../components/Header/Header";
import { landingPageMessages } from '../../constants/messages';
import '../LandingPage/LandingPage.css';
import Button from '../../components/Buttons/Button';
import Label from '../../components/Label/Label';

interface Recommendation {
  title: string;
  role: string;
  genre: string;
  description: string;
  location: string;
  duration: string;
  budget: string;
  match: string;
  tags: string[];
  image: string;
}

interface CastingCall {
  title: string;
  role: string;
  urgent: boolean;
  director: string;
  date: string;
  time: string;
  due: string;
  required: string[];
}

interface KpiCardProps {
  Icon: React.ElementType;
  iconColor: string;
  value: number | string;
  label: string;
  change: string;
  changeColor: string;
}

const KpiCard: React.FC<KpiCardProps> = ({ Icon, iconColor, value, label, change, changeColor }) => (
  <div className="kpi-card">
    <div className="kpi-icon-box">
      <Icon size={80} color={iconColor} />
    </div>
    <h2>{value}</h2>
    <p className="kpiLabel">{label}</p>
    <span className={`change ${changeColor}`}>{change}</span>
  </div>
);

const LandingPage: React.FC = () => {
  const recommendations: Recommendation[] = [
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

  const castingCalls: CastingCall[] = [
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

  return (
    <>
      <Header></Header>
      
      <main className="home-layout">
        
        <section className="welcome section">
            <div className="Group1">
                <h1>
                    {landingPageMessages.welcomeTitle}<span className="highlight">{landingPageMessages.welcomeHighlight}</span>
                </h1>
                <p>
                   {landingPageMessages.welcomeDescription}</p>
                <div className="info">
                    <span><Star size={22} color="#ff7a00" style={{ marginRight: '6px' }} /> {landingPageMessages.rating}</span>
                    <span><Calendar size={22} color="#ff7a00"  style={{ marginRight: '6px' }} /> {landingPageMessages.auditionsThisMonth}</span>
                    <span><MapPin size={22}  color="#ff7a00" style={{ marginRight: '6px' }} /> {landingPageMessages.location}</span>
                </div>
                <Button
                  label={landingPageMessages?.viewOpportunitiesButton || "View New Opportunities"}
                  variant="primary"
                  styles={{bgColor: "#FF7F00",color: "#522104",width: "371px",height: "50px",border: "none",borderRadius: "8px",fontFamily: "'Garet', sans-serif",fontSize: "22px",
                fontWeight: 500,margin: "0.5rem 0 1rem 0",padding: "0",textAlign: "center",hoverBgColor: "#e65c00",hoverColor: "#522104",transition: "all 0.2s ease",
                  }}
                  onClick={() => console.log("View New Opportunities clicked")}
                />
            </div>
        </section>

        
        <section className="kpi-grid section">
          {[
    {
      Icon: TrendingUp,
      iconColor: '#4dd17a',
      label: '{landingPageMessages.activeApplicationsLabel}',
      value: '{landingPageMessages.activeApplicationsValue}',
      change: '{landingPageMessages.activeApplicationsChange}',
      changeColor: 'green',
    },
    {
      Icon: Clock4,
      iconColor: '#ff7a00',
      label: '{landingPageMessages.pendingResponsesLabel}',
      value: '{landingPageMessages.pendingResponsesValue}',
      change: '{landingPageMessages.pendingResponsesChange}',
      changeColor: 'orange',
    },
    {
      Icon: Users,
      iconColor: '#4dabf7',
      label: '{landingPageMessages.profileViewsLabel}',
      value: '{landingPageMessages.profileViewsValue}',
      change: '{landingPageMessages.profileViewsChange}',
      changeColor: 'blue',
    },
    {
      Icon: Award,
      iconColor: '#cc5de8',
      label: '{landingPageMessages.successRateLabel}',
      value: '{landingPageMessages.successRateValue}',
      change: '{landingPageMessages.successRateChange}',
      changeColor: 'purple',
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

       
        <section className="recommendations section">
            <div className="rec-header">
                <div className="rec-header-text">
                    <h2>{landingPageMessages.recommendationsTitle}</h2>
                    <p>{landingPageMessages.recommendationsSubtitle}</p>
                </div>
                <Button
                  label={landingPageMessages?.viewAllRecommendationsButton || "View All Recommendations"}
                  variant="primary"
                  styles={{
                    bgColor: "#FF7F00",
                    color: "#522104",
                    width: "330px",
                    height: "50px",
                    border: "none",
                    borderRadius: "8px",
                    fontFamily: "'Garet', sans-serif",
                    fontSize: "20px",
                    fontWeight: 500,
                    margin: "0.5rem 0 1rem 0",
                    padding: "0",
                    textAlign: "center",
                    
                    hoverBgColor: "#e65c00",
                    hoverColor: "#522104",
                    transition: "all 0.2s ease",
                  }}
                  onClick={() => console.log("View All Recommendations clicked")}
                />
            </div>


            <div className="rec-grid">
                {recommendations.map((rec, idx) => (
                    <div className="rec-card" key={idx}>
                        <div className="rec-top">
                            <img src={rec.image} alt={rec.title} className="rec-img" />
                            <div className="match">
                                {rec.match} {landingPageMessages.matchText}
                            </div>
                        </div>
                        <div className="rec-bottom">
                            <div className="title-row">
                                <h3>{rec.title}</h3>
                                <span className="genre">{rec.genre}</span>
                            </div>
                            <p className="role">{rec.role}</p>
                            <p className="desc">{rec.description}</p>
                            <p className="meta-item"><MapPin size={18} color="#ffa94d" style={{ marginRight: '6px' }} />{rec.location}</p>
                            <p className="meta-item"><Clock4 size={18} color="#ffa94d" style={{ marginRight: '6px' }} />{rec.duration}</p>
                            <p className="meta-item"><DollarSign size={18} color="#ffa94d" style={{ marginRight: '6px' }} />{rec.budget}</p>
                            <p className="requirements-label">{landingPageMessages.requirementsLabel}</p>
                            <div className="tags">
                                {rec.tags.map((t, i) => (
                                <span key={i}>{t}</span>
                                ))}
                            </div>
                            <Button
                              label={landingPageMessages?.applyNowButton || "Apply Now"}
                              variant="primary"
                              stickToBottom 
                              fullWidth
                              styles={{
                                width: "400px",
                                height: "50px",
                                bgColor: "#F16510",
                                color: "#231003",
                                fontWeight: 500,
                                fontSize: "18px",
                                fontFamily: "'Garet', sans-serif",
                                borderRadius: "8px",
                                padding: "0",
                                margin: "0 auto",
                              }}
                              onClick={() => console.log("Apply Now clicked")}
                            />

                            
                        </div>
                    </div>
                ))}
            </div>
        </section>


        <section className="casting-calls section">
            <div className="casting-container">
                <div className="casting-header">
                    <div>
                        <h2>{landingPageMessages.castingCallsTitle}</h2>
                        <p>{landingPageMessages.castingCallsSubtitle}</p>
                    </div>
                    <Button
                  label={landingPageMessages?.viewAllCastingCallsButton ||"View All Casting Calls"}
                  variant="primary"
                  styles={{
                    bgColor: "#FF7F00",
                    color: "#522104",
                    width: "270px",
                    height: "45px",
                    border: "none",
                    borderRadius: "8px",
                    fontFamily: "'Garet', sans-serif",
                    fontSize: "20px",
                    fontWeight: 500,
                    margin: "0.5rem 0 1rem 0",
                    padding: "0",
                    textAlign: "center",
                   
                    hoverBgColor: "#e65c00",
                    hoverColor: "#522104",
                    transition: "all 0.2s ease",
                  }}
                  onClick={() => console.log("View All Casting Calls clicked")}
                />
                    
                </div>

                {castingCalls.map((call, idx) => (
                    <div className="call-card" key={idx}>
                        <div className="call-main">
                            <div className="call-info">
                                <h3>
                                    {call.title}{' '}
                                    {call.urgent && <span className="urgent">{landingPageMessages.urgentLabel}</span>}
                                </h3>
                                <p className="role">{call.role}</p>
                                <p className="description">
                                    {landingPageMessages.castingCallsDescription}
                                </p>
                                <div className="call-meta">
                                    <span><User size={18} color="#FF7F00" style={{ marginRight: '6px' }} />{landingPageMessages.directorLabel} {call.director}</span>
                                    <span><Calendar size={18} color="#FF7F00" style={{ marginRight: '6px' }} />{call.date}</span>
                                    <span><Clock4 size={18} color="#FF7F00" style={{ marginRight: '6px' }} /> {call.time}</span>
                                    <span><AlertCircle size={18} color="#FF7F00"  style={{ marginRight: '6px' }} /> {landingPageMessages.dueLabel} {call.due}</span>
                                </div>
                                <div className="required-tags">
                                    {landingPageMessages.requiredLabel} {call.required.map((r, i) => (
                                    <span key={i} className="tag">{r}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="call-actions">
                                <button className="primary-btn">{landingPageMessages.confirmAuditionButton}</button>
                                <button className="secondary-btn">{landingPageMessages.viewDetailsButton}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>


        <section className="categories section">
          <div className="categories-header">
              <div className="title-block">
                <h2>{landingPageMessages?.categoriesTitle || "Browse by Categories"}</h2>
      <p>{landingPageMessages?.categoriesSubtitle || "Explore opportunities across different types of productions and genres"}</p>
    </div>
              <div className="view-all-wrapper">
                <Button
                  label={landingPageMessages?.viewAllCategoriesButton || "View All Categories"}
                  variant="primary"
                  styles={{
                    bgColor: "#FF7F00",
                    color: "#522104",
                    width: "250px",
                    height: "45px",
                    border: "none",
                    borderRadius: "8px",
                    fontFamily: "'Garet', sans-serif",
                    fontSize: "20px",
                    fontWeight: 500,
                    margin: "0.5rem 0 1rem 0",
                    padding: "0",
                    textAlign: "center",
                    hoverBgColor: "#e65c00",
                    hoverColor: "#522104",
                    transition: "all 0.2s ease",
                  }}
                  onClick={() => console.log("View All Categories clicked")}
                />
              </div>

          </div>
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
                    <span className="sub">{landingPageMessages.availableRoles}</span>
                    </p>
                    <Button
                      label={landingPageMessages?.browseRolesButton ||"Browse Roles"}
                      variant="primary"
                      styles={{
                        bgColor: "#FFFFFF",
                        color: "#562504",
                        border: "none",
                        borderRadius: "3.61px",
                        fontWeight: 600,
                        fontSize: "19px",
                        width: "100%",
                        padding: "0.4rem 0",
                        lineHeight: "1.2",
                      }}
                      onClick={() => console.log("Browse Roles clicked")}
                    />

                   
                </div>
                ))}
            </div>
        </section>

        
      </main>
    </>
  );
};

export default LandingPage;
