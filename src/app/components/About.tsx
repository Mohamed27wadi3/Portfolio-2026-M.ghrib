import { motion } from 'motion/react';
import { GraduationCap, Brain, Shield, Code } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl hover:shadow-[0_0_50px_rgba(96,165,250,0.2)] transition-all duration-500"
        >
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Master's Student
                  </h3>
                  <p className="text-gray-400">
                    Master 1 in Computer Systems & Networks at University Blida 1
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <Brain className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Academic Interests
                  </h3>
                  <p className="text-gray-400">
                    My academic background includes Deep Learning, where I
                    learned fundamental concepts, neural network architectures,
                    and their real-world uses.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-pink-500/20 rounded-lg">
                  <Shield className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Forensics Leader
                  </h3>
                  <p className="text-gray-400">
                    Leading the Forensics division at CSCC Club (Computer
                    Science Community Club), University Blida 1, mentoring
                    students in DFIR techniques
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500/20 rounded-lg">
                  <Code className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Multi-Disciplinary Professional
                  </h3>
                  <p className="text-gray-400">
                    Video Editor, Freelancer, Community Manager, and active tech
                    community member with diverse skill sets
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              Passionate about cybersecurity, digital forensics, and competitive
              CTF challenges. Specialized in network forensics, disk & memory
              analysis, and security investigations. Committed to continuous
              learning and contributing to the cybersecurity community through
              knowledge sharing, mentorship, and active participation in
              competitive events.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
