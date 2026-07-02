import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const servicesList = [
    {
      id: 1,
      title: 'Precision Haircut',
      desc: 'Expert cutting techniques tailored to your face shape, lifestyle, and hair texture. Includes consultation, wash, cut, and a professional blowout.',
      price: 'From $80',
      img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 2,
      title: 'Luxury Hair Coloring',
      desc: 'Transform your look with our premium coloring services. From full color to balayage, highlights, and color correction.',
      price: 'From $150',
      img: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 3,
      title: 'Rejuvenating Facial',
      desc: 'Deep cleansing, exfoliation, and hydration treatments customized for your skin type to restore your natural glow.',
      price: 'From $120',
      img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 4,
      title: 'Professional Makeup',
      desc: 'Flawless makeup application for weddings, events, or a night out. We use high-end products for a long-lasting finish.',
      price: 'From $100',
      img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 5,
      title: 'Signature Spa',
      desc: 'Relax and unwind with our signature spa treatments, including full-body massages and aromatherapy.',
      price: 'From $140',
      img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800',
    }
  ];

  return (
    <PageTransition>
      <div className="page-header">
        <img src="https://images.unsplash.com/photo-1521590832167-7bfc17454f5e?auto=format&fit=crop&q=80&w=1920" alt="Services" />
        <div className="page-header-content">
          <motion.h1 
            className="page-header-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Services
          </motion.h1>
          <motion.p 
            className="page-header-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Indulge in Luxury
          </motion.p>
        </div>
      </div>

      <section className="section services-page">
        <div className="container">
          <div className="services-list">
            {servicesList.map((service, index) => (
              <motion.div 
                className={`service-row ${index % 2 !== 0 ? 'reverse' : ''}`}
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="service-row-img">
                  <img src={service.img} alt={service.title} />
                  <div className="service-price-badge">{service.price}</div>
                </div>
                <div className="service-row-content">
                  <h2>{service.title}</h2>
                  <p>{service.desc}</p>
                  <Link to="/booking" className="btn btn-outline">Book This Service</Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Services;
