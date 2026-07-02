import { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import './Booking.css';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: ''
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
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        notes: ''
      });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <PageTransition>
      <div className="page-header">
        <img src="https://images.unsplash.com/photo-1522337360788-8b13fee7a3af?auto=format&fit=crop&q=80&w=1920" alt="Book Appointment" />
        <div className="page-header-content">
          <motion.h1
            className="page-header-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Book Appointment
          </motion.h1>
          <motion.p
            className="page-header-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Reserve Your Time
          </motion.p>
        </div>
      </div>

      <section className="section booking-page">
        <div className="container">
          <div className="booking-wrapper">
            <motion.div
              className="booking-info"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Ready for your transformation?</h2>
              <p>Fill out the form to request an appointment. We will contact you to confirm your booking.</p>

              <div className="booking-hours">
                <h3>Opening Hours</h3>
                <ul>
                  <li><span>Monday - Friday</span> <span>9:00 AM - 8:00 PM</span></li>
                  <li><span>Saturday</span> <span>10:00 AM - 6:00 PM</span></li>
                  <li><span>Sunday</span> <span>Closed</span></li>
                </ul>
              </div>

              <div className="booking-contact-details">
                <p><strong>Need immediate assistance?</strong></p>
                <p>Call us: +91 97881 88858</p>
              </div>
            </motion.div>

            <motion.div
              className="booking-form-container card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {submitted ? (
                <div className="success-message">
                  <h3>Thank You! ✨</h3>
                  <p>Your appointment request has been received. Our team will contact you shortly to confirm the details.</p>
                </div>
              ) : (
                <form className="booking-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Select Service *</label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="" disabled>Choose a service</option>
                      <option value="haircut">Haircut & Styling</option>
                      <option value="coloring">Hair Coloring</option>
                      <option value="makeup">Professional Makeup</option>
                      <option value="facial">Spa & Facial</option>
                      <option value="bridal">Bridal Package</option>
                    </select>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="date">Preferred Date *</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="time">Preferred Time</label>
                      <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="notes">Additional Notes</label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows="4"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Any special requests or stylist preference?"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary submit-btn">
                    Confirm Booking
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Booking;
