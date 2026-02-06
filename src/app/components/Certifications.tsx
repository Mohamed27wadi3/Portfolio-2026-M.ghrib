import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'Certified Ethical Hacker (CEH)',
    issuer: 'EC-Council',
    year: '2024',
    description: 'Comprehensive ethical hacking and penetration testing certification',
    skills: ['Penetration Testing', 'Network Security', 'Vulnerability Assessment'],
  },
  {
    title: 'Digital Forensics Essentials',
    issuer: 'EC-Council',
    year: '2024',
    description: 'Fundamental digital forensics investigation techniques',
    skills: ['Evidence Collection', 'Forensic Analysis', 'Chain of Custody'],
  },
  {
    title: 'CCNA: Introduction to Networks',
    issuer: 'Cisco',
    year: '2023',
    description: 'Networking fundamentals and Cisco device configuration',
    skills: ['Network Protocols', 'Routing & Switching', 'Network Troubleshooting'],
  },
  {
    title: 'CompTIA Security+',
    issuer: 'CompTIA',
    year: '2024',
    description: 'Security concepts, threats, and risk management',
    skills: ['Threat Detection', 'Cryptography', 'Access Control'],
  },
  {
    title: 'Python for Cybersecurity',
    issuer: 'Coursera',
    year: '2023',
    description: 'Python programming for security automation and analysis',
    skills: ['Scripting', 'Automation', 'Security Tools Development'],
  },
  {
    title: 'Wireshark Network Analysis',
    issuer: 'Udemy',
    year: '2024',
    description: 'Advanced packet analysis and network troubleshooting',
    skills: ['Packet Analysis', 'Protocol Analysis', 'Network Forensics'],
  },
];

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  return (
    <section id="certifications" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => setSelectedCert(index)}
              className="group cursor-pointer backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(96,165,250,0.3)] transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                  <Award className="w-6 h-6 text-blue-400" />
                </div>
                <span className="text-xs text-gray-400 bg-white/5 px-3 py-1 rounded-full">
                  {cert.year}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {cert.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">{cert.issuer}</p>

              <div className="flex flex-wrap gap-2">
                {cert.skills.slice(0, 2).map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
                {cert.skills.length > 2 && (
                  <span className="text-xs px-2 py-1 bg-gray-500/20 text-gray-300 rounded-full">
                    +{cert.skills.length - 2}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full backdrop-blur-xl bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-white/20 rounded-3xl p-8 shadow-2xl"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-6 right-6 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-blue-500/30 rounded-2xl">
                  <Award className="w-10 h-10 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-1">
                    {certifications[selectedCert].title}
                  </h3>
                  <p className="text-gray-300">
                    {certifications[selectedCert].issuer} •{' '}
                    {certifications[selectedCert].year}
                  </p>
                </div>
              </div>

              <p className="text-gray-300 text-lg mb-6">
                {certifications[selectedCert].description}
              </p>

              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Key Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {certifications[selectedCert].skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-purple-500/30 text-purple-200 rounded-lg border border-purple-500/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold hover:scale-105 transition-transform">
                <ExternalLink className="w-5 h-5" />
                View Certificate
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
