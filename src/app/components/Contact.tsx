import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Check,
  Copy,
} from 'lucide-react';

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = async (text: string, type: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'email') {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };


  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">
            Let's discuss cybersecurity, CTF challenges, or collaboration
            opportunities
          </p>
        </motion.div>

        <div className="grid gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                  <div className="flex-shrink-0 p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-sm mb-1">Email</p>
                    <div className="flex items-center gap-2">
                      <p className="text-white font-mono">
                        ghrib_mohammed@etu.univ-blida.dz
                      </p>
                      <button
                        onClick={() =>
                          copyToClipboard(
                            'ghrib_mohammed@etu.univ-blida.dz',
                            'email'
                          )
                        }
                        className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                      >
                        {copiedEmail ? (
                          <Check className="w-4 h-4 text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                  <div className="flex-shrink-0 p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                    <Phone className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-sm mb-1">Phone</p>
                    <div className="flex items-center gap-2">
                      <p className="text-white font-mono">+213 659214723</p>
                      <button
                        onClick={() =>
                          copyToClipboard('+213659214723', 'phone')
                        }
                        className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                      >
                        {copiedPhone ? (
                          <Check className="w-4 h-4 text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                  <div className="flex-shrink-0 p-3 bg-green-500/20 rounded-lg group-hover:bg-green-500/30 transition-colors">
                    <MapPin className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-sm mb-1">Location</p>
                    <p className="text-white">Blida, Algeria</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-gray-400 text-sm mb-4">Connect with me</p>
                <div className="flex flex-wrap gap-4">
                  <motion.a
                    whileHover={{ scale: 1.1, y: -5 }}
                    href="https://www.linkedin.com/in/ghrib-mohammed/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-600/20 rounded-lg hover:bg-blue-600/30 transition-colors group"
                  >
                    <Linkedin className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -5 }}
                    href="https://github.com/Mohamed27wadi3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-purple-600/20 rounded-lg hover:bg-purple-600/30 transition-colors group"
                  >
                    <Github className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -5 }}
                    href="https://www.instagram.com/mohamed_ghr_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-pink-600/20 rounded-lg hover:bg-pink-600/30 transition-colors group"
                  >
                    <Instagram className="w-6 h-6 text-pink-400 group-hover:text-pink-300" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -5 }}
                    href="https://web.facebook.com/GHRIB.mohammed.wadia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-600/20 rounded-lg hover:bg-blue-600/30 transition-colors group"
                  >
                    <Facebook className="w-6 h-6 text-blue-300 group-hover:text-blue-200" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -5 }}
                    href="https://discord.com/users/mohamed_wadi3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-indigo-600/20 rounded-lg hover:bg-indigo-600/30 transition-colors group"
                    title="Discord"
                  >
                    <img
                      src="https://cdn.simpleicons.org/discord/7289DA"
                      alt="Discord"
                      className="w-6 h-6"
                      loading="lazy"
                    />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -5 }}
                    href="https://wa.me/213659214723"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-green-600/20 rounded-lg hover:bg-green-600/30 transition-colors group"
                    title="WhatsApp"
                  >
                    <img
                      src="https://cdn.simpleicons.org/whatsapp/25D366"
                      alt="WhatsApp"
                      className="w-6 h-6"
                      loading="lazy"
                    />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -5 }}
                    href="https://t.me/Mohamed_ghr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-sky-600/20 rounded-lg hover:bg-sky-600/30 transition-colors group"
                    title="Telegram"
                  >
                    <img
                      src="https://cdn.simpleicons.org/telegram/26A5E4"
                      alt="Telegram"
                      className="w-6 h-6"
                      loading="lazy"
                    />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
