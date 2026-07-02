import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import './Gallery.css';

const Gallery = () => {
  const [filter, setFilter] = useState('all');

  const galleryItems = [
    { id: 1, category: 'hair', img: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800', title: 'Balayage Color' },
    { id: 2, category: 'makeup', img: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800', title: 'Bridal Makeup' },
    { id: 3, category: 'hair', img: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=800', title: 'Precision Cut' },
    { id: 4, category: 'spa', img: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800', title: 'Relaxing Spa' },
    { id: 5, category: 'makeup', img: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&q=80&w=800', title: 'Evening Glam' },
    { id: 6, category: 'hair', img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800', title: 'Blowout Styling' },
    { id: 7, category: 'spa', img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800', title: 'Facial Treatment' },
    { id: 8, category: 'makeup', img: 'https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&fit=crop&q=80&w=800', title: 'Natural Look' },
    { id: 9, category: 'hair', img: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800', title: 'Vibrant Highlights' }
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <PageTransition>
      <div className="page-header">
        <img src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=1920" alt="Gallery" />
        <div className="page-header-content">
          <motion.h1 
            className="page-header-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Gallery
          </motion.h1>
          <motion.p 
            className="page-header-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            See The Transformation
          </motion.p>
        </div>
      </div>

      <section className="section gallery-page">
        <div className="container">
          <div className="filter-container">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button 
              className={`filter-btn ${filter === 'hair' ? 'active' : ''}`}
              onClick={() => setFilter('hair')}
            >
              Hair
            </button>
            <button 
              className={`filter-btn ${filter === 'makeup' ? 'active' : ''}`}
              onClick={() => setFilter('makeup')}
            >
              Makeup
            </button>
            <button 
              className={`filter-btn ${filter === 'spa' ? 'active' : ''}`}
              onClick={() => setFilter('spa')}
            >
              Spa
            </button>
          </div>

          <motion.div layout className="gallery-grid">
            <AnimatePresence>
              {filteredItems.map(item => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="gallery-item"
                >
                  <img src={item.img} alt={item.title} />
                  <div className="gallery-overlay">
                    <h3>{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Gallery;
