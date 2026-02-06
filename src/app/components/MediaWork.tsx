import { motion } from 'motion/react';
import { Play, Edit, Users } from 'lucide-react';

const mediaProjects = [
  {
    title: 'CSCC Cybersecurity Event Highlights',
    type: 'Event Coverage',
    duration: '5:32',
    thumbnail: 'video editing cybersecurity event',
  },
  {
    title: 'CTF Competition Tutorial Series',
    type: 'Educational Content',
    duration: '12:45',
    thumbnail: 'hacker tutorial screen recording',
  },
  {
    title: 'Digital Forensics Workshop',
    type: 'Training Material',
    duration: '8:20',
    thumbnail: 'digital forensics workshop presentation',
  },
  {
    title: 'Hackathon Algeria 2.0 Recap',
    type: 'Event Documentation',
    duration: '4:15',
    thumbnail: 'hackathon competition team',
  },
];

export function MediaWork() {
  return (
    <section id="media" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Media & Creative Work
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">
            Video Editing | Content Creation | Community Management
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {mediaProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <div className="aspect-video bg-gradient-to-br from-blue-900/50 to-purple-900/50 flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 transition-all duration-500">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-[0_0_40px_rgba(96,165,250,0.6)]"
                  >
                    <Play className="w-10 h-10 text-white ml-1" fill="white" />
                  </motion.div>
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-white text-sm font-mono">
                  {project.duration}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400">{project.type}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(96,165,250,0.3)] transition-all duration-500"
          >
            <div className="inline-block p-4 bg-blue-500/20 rounded-2xl mb-4">
              <Edit className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Video Editing</h3>
            <p className="text-gray-400">
              Professional video editing for events, tutorials, and promotional content
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] transition-all duration-500"
          >
            <div className="inline-block p-4 bg-purple-500/20 rounded-2xl mb-4">
              <Users className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Community Manager
            </h3>
            <p className="text-gray-400">
              Building and managing tech communities, organizing events and workshops
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-pink-500/50 hover:shadow-[0_0_40px_rgba(236,72,153,0.3)] transition-all duration-500"
          >
            <div className="inline-block p-4 bg-pink-500/20 rounded-2xl mb-4">
              <Play className="w-8 h-8 text-pink-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Freelancer</h3>
            <p className="text-gray-400">
              Delivering quality freelance projects on platforms like Mostaql
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
