import { motion } from 'motion/react';
import mostaqlLogo from '../../image/mostakil logo.png';
import linkedinLogo from '../../image/linkedin logo.png';
import rootMeLogo from '../../image/root me logo.png';
import ctfLearnLogo from '../../image/ctf learn logo.png';
import ctfTimeLogo from '../../image/ctf time logo.png';

const platforms = [
  {
    name: 'Hack The Box',
    href: 'https://app.hackthebox.com/users/2291146?profile-top-tab=machines&ownership-period=1M&profile-bottom-tab=prolabs',
    logo: 'https://cdn.simpleicons.org/hackthebox/9FEF00',
  },
  {
    name: 'Root-Me',
    href: 'https://www.root-me.org/Mohamed_ghr',
    logo: rootMeLogo,
  },
  {
    name: 'CTFtime',
    href: 'https://ctftime.org/team/416999',
    logo: ctfTimeLogo,
  },
  {
    name: 'CTFlearn',
    href: 'https://ctflearn.com/user/Mohammed_ghr',
    logo: ctfLearnLogo,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Mohamed27wadi3',
    logo: 'https://cdn.simpleicons.org/github/FFFFFF',
  },
  {
    name: 'Mostaql',
    href: 'https://mostaql.com/u/Mohammed_wadie',
    logo: mostaqlLogo,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ghrib-mohammed/',
    logo: linkedinLogo,
  },
  {
    name: 'Cisco',
    href: 'https://www.netacad.com/fr/profile',
    logo: 'https://cdn.simpleicons.org/cisco/1BA0D7',
  },
];

export function LogoCarousel() {
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

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10"></div>

          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 45,
                ease: 'linear',
              },
            }}
            className="flex gap-8 w-max"
          >
            {duplicatedPlatforms.map((platform, index) => (
              <a
                key={index}
                href={platform.href}
                target="_blank"
                rel="noreferrer"
                className="group flex-shrink-0 w-48 h-32 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(96,165,250,0.4)] hover:scale-105 transition-all duration-500"
              >
                <div className="mb-3 h-12 w-12 flex items-center justify-center">
                  <img
                    src={platform.logo}
                    alt={`${platform.name} logo`}
                    className="max-h-12 max-w-12 object-contain filter grayscale group-hover:grayscale-0 transition-all"
                    loading="lazy"
                  />
                </div>
                <div className="text-center">
                  <p className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                    {platform.name}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
