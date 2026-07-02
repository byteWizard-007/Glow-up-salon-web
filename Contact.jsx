import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <PageTransition>
      <div className="page-header">
        <img src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=1920" alt="Contact Us" />
        <div className="page-header-content">
          <motion.h1
            className="page-header-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Get In Touch
          </motion.h1>
          <motion.p
            className="page-header-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            We'd Love to Hear From You
          </motion.p>
        </div>
      </div>

      <section className="section contact-page">
        <div className="container">
          <div className="contact-wrapper">
            <motion.div
              className="contact-details"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Visit Our Salon</h2>
              <p className="contact-intro">Experience luxury and let us pamper you. Reach out for any inquiries.</p>

              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="icon-wrapper">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3>Location</h3>
                    <p>6/11 mansion street opp gst office,Coimbatore <br />Tamil Nadu, India</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="icon-wrapper">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3>Phone & WhatsApp</h3>
                    <p>+91 97881 88858</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="icon-wrapper">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3>Email</h3>
                    <p>vipesalone@gmail.com</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="icon-wrapper">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3>Hours</h3>
                    <p>Mon - Fri: 9:00 AM - 8:00 PM<br />Sat: 10:00 AM - 6:00 PM<br />Sun: Closed</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="contact-form-container card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Send a Message</h2>
              {submitted ? (
                <div className="success-message">
                  <h3>Message Sent!</h3>
                  <p>We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary submit-btn">
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.5966453986877!2d-118.40375938478147!3d34.08112108059868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1628100000000!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Maps Location"
        ></iframe>
      </section>
    </PageTransition>
  );
};

export default Contact;
