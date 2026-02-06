import { motion } from 'motion/react';
import { TiltCard } from './TiltCard';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'p6ac4et---challenges-CTF-cscc-tour-',
    description:
      'Le PCAP contient du trafic réseau légitime (TCP, HTTP, ARP, DNS) mêlé à des requêtes DNS suspectes vers le domaine .cscc.net. Le flag y est fragmenté, encodé en Base64. Il faut filtrer ces requêtes, assembler les fragments par ordre chronologique et décoder pour révéler le flag. author : felouja',
    tags: ['Wireshark', 'Python', 'Scapy', 'NetworkMiner', 'Zeek'],
    gradient: 'from-blue-600 to-cyan-600',
    githubUrl:
      'https://github.com/Mohamed27wadi3/p6ac4et---challenges-CTF-cscc-tour-.git',
  },
  {
    title: 'Silent-Pixels--challenge-CTF-cscc-tour-',
    description:
      'This image is not what it seems — its secret is hidden beyond normal inspection. Only precise visual analysis will reveal what automated methods fail to see. Author: Felouja',
    tags: ['stegsolve'],
    gradient: 'from-purple-600 to-pink-600',
    githubUrl:
      'https://github.com/Mohamed27wadi3/Silent-Pixels--challenge-CTF-cscc-tour-.git',
  },
  {
    title: 'log2.0--challenge-CTF-cscc',
    description:
      'Analyse de volumes importants de logs. Compréhension des codes HTTP. Corrélation multi-sources.',
    tags: [],
    gradient: 'from-green-600 to-teal-600',
    githubUrl:
      'https://github.com/Mohamed27wadi3/log2.0--challenge-CTF-cscc-tour-.git',
  },
  {
    title: 'imageX--challenge-CTF',
    description:
      'Description: At first glance, this image looks ordinary. But careful observation reveals that something is hidden beneath the surface. Can you discover what lies within? Author: Felouja. Category: Steganography. Difficulty: Medium. Flag Format: CSCC{***************}. author : felouja',
    tags: ['stegsolve'],
    gradient: 'from-orange-600 to-red-600',
  },
  {
    title: 'Who-Are-You--Challenge-CTF',
    description:
      'Who Are You? Parmi plusieurs échanges réseau anodins, un détail inhabituel trahit une communication non intentionnelle. Une analyse attentive des requêtes permettra de révéler l’information transmise. author : felouja',
    tags: ['wireshark'],
    gradient: 'from-indigo-600 to-blue-600',
  },
  {
    title: 'Hidden-Beeps-challeng-CTF',
    description:
      'challenge stegano sound téléphone. author : felouja',
    tags: [],
    gradient: 'from-pink-600 to-purple-600',
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Cybersecurity & Forensics Projects
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <TiltCard className="h-full">
                <div className="group h-full flex flex-col backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-all duration-500 hover:shadow-[0_0_50px_rgba(96,165,250,0.3)]">
                  <div
                    className={`h-2 w-full bg-gradient-to-r ${project.gradient} rounded-full mb-6`}
                  ></div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-mono bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30 hover:bg-blue-500/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex gap-3">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold hover:scale-105 transition-transform"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    ) : (
                      <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white/70 font-semibold cursor-not-allowed">
                        <Github className="w-4 h-4" />
                        Code
                      </button>
                    )}
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white font-semibold hover:bg-white/10 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </button>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
