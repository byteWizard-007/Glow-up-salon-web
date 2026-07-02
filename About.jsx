import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import './About.css';

const About = () => {
  return (
    <PageTransition>
      <div className="page-header">
        <img src="https://images.unsplash.com/photo-1521590832167-7bfc17454f5e?auto=format&fit=crop&q=80&w=1920" alt="About Us" />
        <div className="page-header-content">
          <motion.h1 
            className="page-header-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            About GlowUp
          </motion.h1>
          <motion.p 
            className="page-header-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Our Story & Vision
          </motion.p>
        </div>
      </div>

      <section className="section about-story">
        <div className="container">
          <div className="story-grid">
            <motion.div 
              className="story-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800" alt="Salon History" />
              <div className="story-experience">
                <h2>10+</h2>
                <p>Years of Beauty</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="story-content"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title" style={{ textAlign: 'left' }}>The GlowUp Journey</h2>
              <p className="lead-text">
                Founded in 2014, GlowUp Salon began with a simple mission: to provide a luxurious sanctuary where beauty and wellness converge.
              </p>
              <p>
                Over the past decade, we have grown from a small neighborhood salon to a premier destination for top-tier beauty services. Our commitment to excellence, continuous education, and using only the highest quality products has earned us the trust of thousands of clients.
              </p>
              <p>
                We believe that beauty is not just about how you look, but how you feel. Our meticulously designed space and attentive staff ensure that every visit is a rejuvenating experience that leaves you glowing from the inside out.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section about-values">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <motion.div className="value-card" whileHover={{ y: -10 }}>
              <h3>Excellence</h3>
              <p>We strive for perfection in every cut, color, and treatment.</p>
            </motion.div>
            <motion.div className="value-card" whileHover={{ y: -10 }}>
              <h3>Innovation</h3>
              <p>Constantly updating our skills with the latest industry trends.</p>
            </motion.div>
            <motion.div className="value-card" whileHover={{ y: -10 }}>
              <h3>Sustainability</h3>
              <p>Using eco-friendly and cruelty-free premium products.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section team-cta text-center" style={{ textAlign: 'center', backgroundColor: 'var(--accent-pink)' }}>
        <div className="container">
          <h2>Meet The Experts Behind The Magic</h2>
          <p style={{ maxWidth: '600px', margin: '1rem auto 2rem', color: 'var(--text-muted)' }}>
            Our talented team of stylists, colorists, and therapists are passionate about their craft and dedicated to your satisfaction.
          </p>
          <Link to="/team" className="btn btn-primary">Meet Our Team</Link>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
