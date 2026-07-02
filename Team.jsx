import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Elena Rodriguez',
      role: 'Master Stylist & Founder',
      exp: '15 Years Exp.',
      img: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Senior Colorist',
      exp: '10 Years Exp.',
      img: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 3,
      name: 'Sophia Williams',
      role: 'Lead Makeup Artist',
      exp: '8 Years Exp.',
      img: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Spa Therapist',
      exp: '12 Years Exp.',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
    }
  ];

  return (
    <PageTransition>
      <div className="page-header">
        <img src="https://images.unsplash.com/photo-1522337360788-8b13fee7a3af?auto=format&fit=crop&q=80&w=1920" alt="Our Team" />
        <div className="page-header-content">
          <motion.h1 
            className="page-header-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Experts
          </motion.h1>
          <motion.p 
            className="page-header-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Passionate About Your Beauty
          </motion.p>
        </div>
      </div>

      <section className="section team-page">
        <div className="container">
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <motion.div 
                className="team-card card"
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="team-img-wrapper">
                  <img src={member.img} alt={member.name} />
                  <div className="team-social">
                    <a href="#"><Instagram size={18} /></a>
                    <a href="#"><Twitter size={18} /></a>
                    <a href="#"><Linkedin size={18} /></a>
                  </div>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-exp">{member.exp}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Team;
