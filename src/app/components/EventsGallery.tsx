import { motion } from 'motion/react';

const galleryImages = [
  new URL('../../image galery/WhatsApp Image 2026-02-07 at 00.10.53.jpeg', import.meta.url).href,
  new URL('../../image galery/WhatsApp Image 2026-02-07 at 00.10.53 (1).jpeg', import.meta.url).href,
  new URL('../../image galery/WhatsApp Image 2026-02-07 at 00.10.53 (2).jpeg', import.meta.url).href,
  new URL('../../image galery/WhatsApp Image 2026-02-07 at 00.10.53 (3).jpeg', import.meta.url).href,
  new URL('../../image galery/WhatsApp Image 2026-02-07 at 00.10.53 (4).jpeg', import.meta.url).href,
  new URL('../../image galery/WhatsApp Image 2026-02-07 at 00.13.10.jpeg', import.meta.url).href,
  new URL('../../image galery/WhatsApp Image 2026-02-07 at 00.13.10 (1).jpeg', import.meta.url).href,
  new URL('../../image galery/WhatsApp Image 2026-02-07 at 00.13.10 (2).jpeg', import.meta.url).href,
  new URL('../../image galery/WhatsApp Image 2026-02-07 at 00.13.10 (3).jpeg', import.meta.url).href,
  new URL('../../image galery/WhatsApp Image 2026-02-07 at 00.13.11.jpeg', import.meta.url).href,
  new URL('../../image galery/WhatsApp Image 2026-02-07 at 00.13.11 (1).jpeg', import.meta.url).href,
  new URL('../../image galery/WhatsApp Image 2026-02-07 at 00.13.11 (2).jpeg', import.meta.url).href,
  new URL('../../image galery/WhatsApp Image 2026-02-07 at 00.13.11 (3).jpeg', import.meta.url).href,
  new URL('../../image galery/WhatsApp Image 2026-02-07 at 00.13.11 (4).jpeg', import.meta.url).href,
];

export function EventsGallery() {
  const duplicatedImages = [...galleryImages, ...galleryImages];

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

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10"></div>

          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 35,
                ease: 'linear',
              },
            }}
            className="flex gap-6 w-max"
          >
            {duplicatedImages.map((src, index) => (
              <div
                key={index}
                className="group flex-shrink-0 w-36 md:w-40 h-56 md:h-60 overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(96,165,250,0.35)] transition-all duration-500"
              >
                <img
                  src={src}
                  alt={`Event ${index + 1}`}
                  className={
                    index % galleryImages.length === 0
                      ? 'h-full w-full object-contain bg-black/30'
                      : 'h-full w-full object-cover'
                  }
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
