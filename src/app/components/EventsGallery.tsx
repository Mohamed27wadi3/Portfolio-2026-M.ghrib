import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Masonry from 'react-responsive-masonry';
import { X, ZoomIn } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const events = [
  {
    title: 'IngeHack CTF 4.0',
    query: 'cybersecurity ctf competition hackers',
    description: 'Competing in advanced forensics challenges',
  },
  {
    title: 'CSCC Club Activities',
    query: 'university cybersecurity club workshop',
    description: 'Leading forensics training sessions',
  },
  {
    title: 'Hackathon Algeria 2.0',
    query: 'hackathon competition team award',
    description: 'Winning 3rd place in national competition',
  },
  {
    title: 'CTF Eldjazair',
    query: 'capture flag competition algeria',
    description: 'National cybersecurity championship',
  },
  {
    title: 'CSCC Tour 23',
    query: 'cybersecurity conference university students',
    description: 'University-wide security competition',
  },
  {
    title: 'Forensics Workshop',
    query: 'digital forensics training computer lab',
    description: 'Teaching digital forensics techniques',
  },
];

export function EventsGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Events Gallery
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">Moments from competitions and events</p>
        </motion.div>

        <Masonry columnsCount={3} gutter="1.5rem">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => setSelectedImage(index)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-500"
            >
              <ImageWithFallback
                src={`https://source.unsplash.com/800x${
                  600 + (index % 3) * 100
                }/?${event.query.replace(/ /g, ',')}`}
                alt={event.title}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-300 text-sm">{event.description}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full"
            >
              <img
                src={`https://source.unsplash.com/1200x${
                  800 + (selectedImage % 3) * 100
                }/?${events[selectedImage].query.replace(/ /g, ',')}`}
                alt={events[selectedImage].title}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="mt-6 text-center">
                <h3 className="text-white text-3xl font-bold mb-2">
                  {events[selectedImage].title}
                </h3>
                <p className="text-gray-300 text-lg">
                  {events[selectedImage].description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
