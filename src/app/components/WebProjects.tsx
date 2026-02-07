import { motion } from 'motion/react';
import { Github } from 'lucide-react';

const webProjects = [
  {
    title: 'Shopina',
    description:
      'E-commerce platform built with Django (API backend) to create and manage online stores, products, and orders with a modular, secure, scalable architecture.',
    gradient: 'from-emerald-600 to-teal-600',
    githubUrl: 'https://github.com/Mohamed27wadi3/Shopina-project',
  },
  {
    title: 'DentalManager',
    description:
      'Dental clinic management app for patients, appointments, treatments, and billing with a modular, secure, scalable structure.',
    gradient: 'from-blue-600 to-indigo-600',
    githubUrl: 'https://github.com/Younes-khiat/dental-clinic-management.git',
  },
  {
    title: 'StockManager',
    description:
      'Inventory web app using CRUD operations to manage products and stock levels with a clean, scalable interface.',
    gradient: 'from-purple-600 to-pink-600',
    githubUrl: 'https://github.com/Mohamed27wadi3/CRUDS-JS.git',
  },
];

export function WebProjects() {
  return (
    <section id="web-projects" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Portfolio Web
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full"
            >
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

                <div className="mt-auto">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold hover:scale-105 transition-transform"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
