import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Award, ExternalLink } from 'lucide-react';
import ccnaBadge from '../../image/image.png';
import cybersecurityBadge from '../../image/cisco padge 2.png';
import hardwareBadge from '../../image/logo cisco hardware.png';
import welcomeDayCertificate from '../../image/certaficat welcome day.jpeg';
import ctfEldjazairCertificate from '../../image/CTF eldjazair .jpeg';
import craagCertificate from '../../image/CRAAG.jpeg';
import craagLogo from '../../image/craag logo.jpg';

type Certification = {
  title: string;
  issuer: string;
  year: string;
  description: string;
  skills: string[];
  subtitle?: string;
  badgeImage?: string;
  layout?: 'ccna';
  publishedDate?: string;
  instructor?: string;
  totalHours?: string;
  academy?: string;
  competencies?: string[];
  actionLabel?: string;
  actionUrl?: string;
  publishedDateLabel?: string;
  instructorLabel?: string;
  totalHoursLabel?: string;
  academyLabel?: string;
  competenciesLabel?: string;
  modalImage?: string;
  cardLinkLabel?: string;
  cardLinkUrl?: string;
};

const certifications: Certification[] = [
  {
    title: 'Academic Project – CRAAG Internship',
    issuer: "Bachelor’s Degree",
    year: '2025',
    description:
      'Project Title: Detection of False Seismic Alerts Using Deep Learning. Research project on seismic data analysis using deep learning to identify false alerts.',
    skills: ['Deep Learning', 'Signal Processing', 'Data Analysis'],
    actionUrl: craagCertificate,
    modalImage: craagCertificate,
    badgeImage: craagLogo,
    cardLinkLabel: 'GitHub',
    cardLinkUrl: 'https://github.com/Younes-khiat/false-seismic-alerts-detection.git',
  },
  {
    title: 'Introduction à la cybersécurité',
    subtitle: 'Introduction à la Cybersécurité',
    issuer: 'Networking Academy',
    year: '2025',
    description:
      'Explorez le domaine passionnant de la cybersécurité et découvrez pourquoi il va durer dans le temps.',
    skills: ['Introduction to Cybersecurity'],
    layout: 'ccna',
    badgeImage: cybersecurityBadge,
    publishedDate: 'Jun 25, 2025',
    totalHours: '6',
    academy: 'Networking Academy',
    competencies: ['Introduction to Cybersecurity'],
    actionUrl: 'https://www.credly.com/badges/77acccbd-9ce7-4da1-9f68-e8d14a15c6b2',
    publishedDateLabel: 'Issued Date',
    instructorLabel: 'Instructor',
    totalHoursLabel: 'Total Hours',
    academyLabel: 'Academy',
    competenciesLabel: 'SKILLS YOU LEARN',
  },
  {
    title: 'CCNA : Présentation des réseaux',
    subtitle: 'IAA_CCNA1V7.02_G28_Février2025',
    issuer: 'INSFP Blida',
    year: '2025',
    description:
      "Le premier d'une série de trois cours pour développer vos compétences en réseau et vous préparer à la certification CCNA et à des emplois de niveau associé.",
    skills: ['CCNA : Présentation des réseaux'],
    layout: 'ccna',
    badgeImage: ccnaBadge,
    publishedDate: '24 juin 2025',
    instructor: 'Ryma BOUKHICH',
    totalHours: '70',
    academy: 'INSFP Blida',
    competencies: ['CCNA : Présentation des réseaux'],
    actionLabel: 'Afficher et partager le badge',
    actionUrl: 'https://www.credly.com/badges/c8c9533e-c44c-48c4-9d95-4a204a53a8c4',
  },
  {
    title: 'CTF El-Djazair Participant',
    issuer: 'Cybersecurity Competition',
    year: '2025',
    description:
      'Participated in a national Capture The Flag (CTF) competition, solving challenges in digital forensics, security analysis, and problem-solving under time constraints.',
    skills: ['Digital Forensics', 'Problem Solving', 'Security Analysis', 'CTF Methodology'],
    actionUrl: ctfEldjazairCertificate,
    modalImage: ctfEldjazairCertificate,
    badgeImage: ctfEldjazairCertificate,
  },
  {
    title: 'Welcome Day Organization Team Member',
    issuer: 'University Event',
    year: '2025',
    description:
      'Contributed to the organization and coordination of the Welcome Day event for new students. Served concurrently as a Cybersecurity Consultant, promoting secure digital practices during event operations.',
    skills: ['Event Coordination', 'Teamwork', 'Communication', 'Cybersecurity Awareness'],
    actionUrl: welcomeDayCertificate,
    modalImage: welcomeDayCertificate,
  },
  {
    title: 'Les bases du matériel informatique',
    subtitle: 'Les bases du matériel informatique',
    issuer: 'Networking Academy',
    year: '2025',
    description:
      'Les bases du matériel informatique. Commencez à apprendre les bases du matériel informatique et découvrez les composants des PC, des ordinateurs portables et des terminaux mobiles.',
    skills: ['Computer Hardware Basics'],
    layout: 'ccna',
    badgeImage: hardwareBadge,
    publishedDate: 'Jun 26, 2025',
    totalHours: '6',
    academy: 'Networking Academy',
    competencies: ['Computer Hardware Basics'],
    actionUrl: 'https://www.credly.com/badges/fed71ed7-7bff-404a-a179-8a4f586d2f5b',
    publishedDateLabel: 'Issued Date',
    instructorLabel: 'Instructor',
    totalHoursLabel: 'Total Hours',
    academyLabel: 'Academy',
    competenciesLabel: 'SKILLS YOU LEARN',
  },
];

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);
  const selected = selectedCert !== null ? certifications[selectedCert] : null;
  const infoItems =
    selected?.layout === 'ccna'
      ? [
          {
            label: selected.publishedDateLabel || 'Date de publication',
            value: selected.publishedDate,
          },
          {
            label: selected.instructorLabel || 'Instructeur',
            value: selected.instructor,
          },
          {
            label: selected.totalHoursLabel || "Nombre total d'heures",
            value: selected.totalHours,
          },
        ].filter((item) => item.value)
      : [];

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
                  {cert.badgeImage ? (
                    <img
                      src={cert.badgeImage}
                      alt={`${cert.title} badge`}
                      className="w-6 h-6 object-contain"
                    />
                  ) : cert.modalImage ? (
                    <img
                      src={cert.modalImage}
                      alt={`${cert.title} certificate`}
                      className="w-6 h-6 object-contain"
                    />
                  ) : (
                    <Award className="w-6 h-6 text-blue-400" />
                  )}
                </div>
                <span className="text-xs text-gray-400 bg-white/5 px-3 py-1 rounded-full">
                  {cert.year}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {cert.title}
              </h3>

              {cert.subtitle && (
                <p className="text-gray-400 text-xs mb-2">{cert.subtitle}</p>
              )}
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
              {cert.cardLinkUrl && cert.cardLinkLabel && (
                <a
                  href={cert.cardLinkUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  className="mt-4 inline-flex items-center justify-center px-3 py-1.5 text-xs font-semibold rounded-full bg-green-500/20 text-green-300 border border-green-500/40 hover:bg-green-500/30 transition-colors"
                >
                  {cert.cardLinkLabel}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected !== null && (
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

              {selected.layout === 'ccna' ? (
                <div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 rounded-lg bg-white/10 flex items-center justify-center p-2">
                      {selected.badgeImage ? (
                        <img
                          src={selected.badgeImage}
                          alt={`${selected.title} badge`}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <Award className="w-10 h-10 text-blue-400" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                        {selected.title}
                      </h3>
                      {selected.subtitle && (
                        <div className="inline-flex items-center gap-2 text-green-300 text-sm mb-2">
                          <span>{selected.subtitle}</span>
                          <ExternalLink className="w-4 h-4" />
                        </div>
                      )}
                      <p className="text-gray-300 text-sm">
                        {selected.description}
                      </p>
                    </div>
                  </div>

                  {infoItems.length > 0 && (
                    <div
                      className={`grid gap-4 text-sm text-gray-200 mb-6 ${
                        infoItems.length >= 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'
                      }`}
                    >
                      {infoItems.map((item) => (
                        <div key={item.label}>
                          <p className="text-gray-400 uppercase tracking-wide text-xs mb-1">
                            {item.label}
                          </p>
                          <p>{item.value}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {selected.academy && (
                    <div className="mb-6">
                      <p className="text-gray-400 uppercase tracking-wide text-xs mb-1">
                        {selected.academyLabel || 'Académie'}
                      </p>
                      <p className="text-gray-200">{selected.academy}</p>
                    </div>
                  )}

                  {(selected.competencies || []).length > 0 && (
                    <div className="mb-6">
                      <p className="text-gray-400 uppercase tracking-wide text-xs mb-3">
                        {selected.competenciesLabel || 'Compétences que vous apprenez'}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {(selected.competencies || []).map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-4 py-2 bg-green-500/20 text-green-200 rounded-lg border border-green-500/40"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <a
                    href={selected.actionUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 rounded-lg text-white font-semibold hover:scale-105 transition-transform"
                  >
                    {selected.actionLabel || 'Afficher et partager le badge'}
                  </a>
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 p-2 bg-blue-500/30 rounded-2xl flex items-center justify-center">
                      {selected.modalImage ? (
                        <img
                          src={selected.modalImage}
                          alt={`${selected.title} certificate`}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      ) : (
                        <Award className="w-10 h-10 text-blue-400" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-1">
                        {selected.title}
                      </h3>
                      <p className="text-gray-300">
                        {selected.issuer} • {selected.year}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg mb-6">
                    {selected.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selected.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-4 py-2 bg-purple-500/30 text-purple-200 rounded-lg border border-purple-500/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selected.actionUrl ? (
                    <a
                      href={selected.actionUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold hover:scale-105 transition-transform"
                    >
                      <ExternalLink className="w-5 h-5" />
                      View Certificate
                    </a>
                  ) : (
                    <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold hover:scale-105 transition-transform">
                      <ExternalLink className="w-5 h-5" />
                      View Certificate
                    </button>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
