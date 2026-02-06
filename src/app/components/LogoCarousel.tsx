import { motion } from 'motion/react';

const platforms = [
  { name: 'Hack The Box', icon: '🎯' },
  { name: 'Root-Me', icon: '🔐' },
  { name: 'CTFtime', icon: '⏱️' },
  { name: 'CTFlearn', icon: '📚' },
  { name: 'GitHub', icon: '💻' },
  { name: 'Mostaql', icon: '💼' },
  { name: 'LinkedIn', icon: '🔗' },
  { name: 'Cisco', icon: '🌐' },
];

export function LogoCarousel() {
  // Duplicate the array for seamless loop
  const duplicatedPlatforms = [...platforms, ...platforms];

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="relative z-10">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-2xl font-bold text-white mb-12"
        >
          Active on Leading Platforms
        </motion.h3>

        <div className="relative">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>

          <motion.div
            animate={{
              x: [0, -50 * platforms.length + '%'],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 30,
                ease: 'linear',
              },
            }}
            className="flex gap-8"
          >
            {duplicatedPlatforms.map((platform, index) => (
              <div
                key={index}
                className="group flex-shrink-0 w-48 h-32 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(96,165,250,0.4)] hover:scale-105 transition-all duration-500"
              >
                <div className="text-5xl mb-3 filter grayscale group-hover:grayscale-0 transition-all">
                  {platform.icon}
                </div>
                <div className="text-center">
                  <p className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                    {platform.name}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
