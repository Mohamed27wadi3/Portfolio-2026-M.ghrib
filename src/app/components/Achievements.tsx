import { motion } from 'motion/react';
import { AnimatedCounter } from './AnimatedCounter';
import { Award, Users, Code, Trophy } from 'lucide-react';

export function Achievements() {
  const stats = [
    {
      icon: Trophy,
      value: 3,
      suffix: 'rd',
      label: 'Hackathon Algeria 2.0',
      color: 'from-yellow-400 to-orange-400',
    },
    {
      icon: Code,
      value: 15,
      suffix: '+',
      label: 'CTF Competitions',
      color: 'from-blue-400 to-cyan-400',
    },
    {
      icon: Award,
      value: 15,
      suffix: '+',
      label: 'Certifications',
      color: 'from-purple-400 to-pink-400',
    },
    {
      icon: Users,
      value: 100,
      suffix: '+',
      label: 'Students Mentored',
      color: 'from-green-400 to-teal-400',
    },
  ];

  return (
    <section id="achievements" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-white/30 hover:shadow-[0_0_40px_rgba(96,165,250,0.3)] transition-all duration-500 group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-block p-4 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl mb-6"
              >
                <stat.icon className={`w-8 h-8 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} style={{ filter: 'drop-shadow(0 0 8px currentColor)' }} />
              </motion.div>

              <AnimatedCounter end={stat.value} suffix={stat.suffix} />

              <p className="text-gray-400 mt-4 font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="backdrop-blur-xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-2xl p-8 md:p-12"
        >
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="p-4 bg-yellow-500/20 rounded-2xl">
                <Trophy className="w-12 h-12 text-yellow-400" />
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                🏆 Hackathon Algeria 2.0 - 3rd Place
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Secured 3rd place in Hackathon Algeria 2.0, a prestigious national
                competition showcasing innovative solutions and technical excellence.
                Competed against top teams from across Algeria, demonstrating strong
                problem-solving, teamwork, and technical implementation skills.
                we developed BioScan-D, a web and mobile application designed to assist
                farmers in identifying plant diseases. The solution relies on an
                AI-powered computer vision model that analyzes plant images captured via
                smartphones. It detects disease types and provides appropriate treatment
                recommendations along with precise dosage information.
              </p>
              <a
                href="https://github.com/Mohamed27wadi3/algeria-2.0--BioScanD.git"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg text-white font-semibold hover:scale-105 transition-transform"
              >
                View BioScan-D Repo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
