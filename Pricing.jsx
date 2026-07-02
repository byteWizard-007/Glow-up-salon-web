import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import './Pricing.css';

const Pricing = () => {
  const pricingData = [
    {
      category: 'Hair Styling',
      items: [
        { name: 'Women\'s Haircut', price: '$80+' },
        { name: 'Men\'s Haircut', price: '$45+' },
        { name: 'Blowout', price: '$50+' },
        { name: 'Updo / Styling', price: '$85+' },
      ]
    },
    {
      category: 'Color Services',
      items: [
        { name: 'Single Process', price: '$120+' },
        { name: 'Partial Highlights', price: '$150+' },
        { name: 'Full Highlights', price: '$200+' },
        { name: 'Balayage / Ombre', price: '$220+' },
        { name: 'Color Correction', price: 'Consultation' },
      ]
    },
    {
      category: 'Makeup & Beauty',
      items: [
        { name: 'Full Face Makeup', price: '$100' },
        { name: 'Bridal Makeup', price: '$250+' },
        { name: 'Lash Extensions', price: '$150' },
        { name: 'Brow Shaping', price: '$35' },
      ]
    },
    {
      category: 'Spa Treatments',
      items: [
        { name: 'Signature Facial', price: '$120' },
        { name: 'Anti-Aging Facial', price: '$150' },
        { name: 'Relaxation Massage (60m)', price: '$110' },
        { name: 'Deep Tissue Massage (60m)', price: '$130' },
      ]
    }
  ];

  return (
    <PageTransition>
      <div className="page-header">
        <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1920" alt="Pricing" />
        <div className="page-header-content">
          <motion.h1 
            className="page-header-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Service Menu
          </motion.h1>
          <motion.p 
            className="page-header-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Transparent Pricing
          </motion.p>
        </div>
      </div>

      <section className="section pricing-page">
        <div className="container">
          <div className="pricing-grid">
            {pricingData.map((section, index) => (
              <motion.div 
                className="pricing-card card"
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h2>{section.category}</h2>
                <div className="pricing-list">
                  {section.items.map((item, i) => (
                    <div className="pricing-item" key={i}>
                      <span className="item-name">{item.name}</span>
                      <span className="item-dots"></span>
                      <span className="item-price">{item.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="pricing-cta text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p>Prices may vary based on hair length, thickness, and stylist level.</p>
            <Link to="/booking" className="btn btn-primary">Book Your Appointment</Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Pricing;
