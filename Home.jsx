import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import './Home.css';

const Home = () => {
  const services = [
    {
      title: 'Hair Styling',
      desc: 'Expert cuts and styling tailored to your unique look.',
      img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Coloring',
      desc: 'Premium hair coloring, balayage, and highlights.',
      img: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Makeup',
      desc: 'Flawless makeup application for your special occasions.',
      img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Spa & Relax',
      desc: 'Rejuvenating facial and body spa treatments.',
      img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      review: 'Absolutely love my new haircut! The staff here is so professional and the salon is gorgeous.',
    },
    {
      name: 'Emily Davis',
      review: 'Best facial I have ever had. The spa environment is so relaxing and luxurious.',
    },
    {
      name: 'Jessica Smith',
      review: 'They did my bridal makeup and it was flawless. Highly recommend GlowUp for any special event!',
    },
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Enhance Your Beauty ✨
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Premium salon services for your perfect look
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/booking" className="btn btn-primary hero-btn">
              Book Appointment
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section services-preview">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div 
                className="service-card card" 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="service-img-wrapper">
                  <img src={service.img} alt={service.title} />
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <Link to="/services" className="service-link">
                    Explore <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center" style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/services" className="btn btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Featured Styles */}
      <section className="section featured-styles">
        <div className="container">
          <div className="featured-content">
            <motion.div 
              className="featured-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Experience the Luxury</h2>
              <p>Step into our world of beauty and relaxation. We use only premium products and the latest techniques to ensure you leave looking and feeling your absolute best.</p>
              <ul className="featured-list">
                <li>Professional & Experienced Stylists</li>
                <li>Premium Quality Products</li>
                <li>Relaxing & Luxurious Environment</li>
              </ul>
              <Link to="/about" className="btn btn-primary mt-4">Discover Our Story</Link>
            </motion.div>
            <motion.div 
              className="featured-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800" alt="Salon Interior" />
              <div className="featured-badge">
                <span>10+</span>
                <p>Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials">
        <div className="container">
          <h2 className="section-title">Client Love</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                className="testimonial-card card" 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="var(--primary-color)" color="var(--primary-color)" />
                  ))}
                </div>
                <p className="review-text">"{testimonial.review}"</p>
                <h4 className="reviewer-name">- {testimonial.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container cta-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready for your Glow Up?</h2>
            <p>Book your appointment today and let us take care of you.</p>
            <Link to="/booking" className="btn btn-primary btn-lg">Book Now</Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
