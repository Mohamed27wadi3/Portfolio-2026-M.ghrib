import { motion } from 'motion/react';
import { Terminal, MapPin, Globe, Trophy } from 'lucide-react';

const ctfEvents = [
  {
    type: 'on-site',
    name: 'IngeHack CTF 4.0',
    description: 'Advanced forensics and web exploitation challenges',
    year: '2024',
    rank: 'Solved 7+ challenges',
  },
  {
    type: 'on-site',
    name: 'CSCC Tour 23',
    description: 'University-wide cybersecurity competition',
    year: '2023/2024',
    rank: '3rd',
  },
  {
    type: 'on-site',
    name: 'CTF Eldjazair',
    description: 'National cybersecurity championship',
    year: '2025',
    rank: '28/90',
  },
  {
    type: 'on-site',
    name: 'Data Bounty',
    description: 'Data security and privacy-focused CTF',
    year: '2025',
    rank: 'Top 5',
  },
  {
    type: 'online',
    name: 'Hackini CTF',
    description: 'International online security competition',
    year: '2024',
    rank: 'Solved 5+ challenges',
  },
  {
    type: 'online',
    name: 'BSides CTF',
    description: 'Global BSides security conference CTF',
    year: '2025',
    rank: 'Top 15',
  },
  {
    type: 'online',
    name: 'NexHunt',
    description: 'Digital forensics and threat hunting',
    year: '2025',
    rank: 'Active participant',
  },
  {
    type: 'online',
    name: 'Clown CTF',
    description: 'Advanced exploitation and reversing',
    year: '2025',
    rank: 'Top 11/100',
  },
];

export function CTFExperience() {
  return (
    <section id="ctf" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            CTF Experience
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">Mission History & Competitions</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* On-site CTFs */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-xl bg-white/5 border border-blue-500/30 rounded-2xl p-8 hover:shadow-[0_0_50px_rgba(96,165,250,0.3)] transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <MapPin className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">On-Site CTFs</h3>
            </div>

            <div className="space-y-4 font-mono text-sm">
              {ctfEvents
                .filter((event) => event.type === 'on-site')
                .map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group p-4 bg-black/40 rounded-lg border border-blue-500/20 hover:border-blue-500/50 hover:bg-black/60 transition-all cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-green-400" />
                        <span className="text-green-400">$</span>
                        <span className="text-blue-400 font-semibold">
                          {event.name}
                        </span>
                      </div>
                      <span className="text-purple-400 text-xs">{event.year}</span>
                    </div>
                    <p className="text-gray-400 ml-6 mb-2">{event.description}</p>
                    <div className="flex items-center gap-2 ml-6">
                      <Trophy className="w-3 h-3 text-yellow-400" />
                      <span className="text-yellow-400 text-xs">{event.rank}</span>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>

          {/* Online CTFs */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-xl bg-white/5 border border-purple-500/30 rounded-2xl p-8 hover:shadow-[0_0_50px_rgba(168,85,247,0.3)] transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-500/20 rounded-lg">
                <Globe className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Online CTFs</h3>
            </div>

            <div className="space-y-4 font-mono text-sm">
              {ctfEvents
                .filter((event) => event.type === 'online')
                .map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group p-4 bg-black/40 rounded-lg border border-purple-500/20 hover:border-purple-500/50 hover:bg-black/60 transition-all cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-green-400" />
                        <span className="text-green-400">$</span>
                        <span className="text-purple-400 font-semibold">
                          {event.name}
                        </span>
                      </div>
                      <span className="text-blue-400 text-xs">{event.year}</span>
                    </div>
                    <p className="text-gray-400 ml-6 mb-2">{event.description}</p>
                    <div className="flex items-center gap-2 ml-6">
                      <Trophy className="w-3 h-3 text-yellow-400" />
                      <span className="text-yellow-400 text-xs">{event.rank}</span>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
