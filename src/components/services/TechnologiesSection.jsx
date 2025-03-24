import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaJs, FaPython, FaFigma, FaMobile } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

const TechnologiesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technologies = [
    { icon: FaReact, name: 'React' },
    { icon: FaJs, name: 'JavaScript' },
    { icon: SiTypescript, name: 'TypeScript' },
    { icon: FaPython, name: 'Python' },
    { icon: FaFigma, name: 'Figma' },
    { icon: FaMobile, name: 'React Native' }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl font-bold text-center mb-12"
        >
          Technologies We Use
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass p-4 text-center hover:border-primary/20 transition-colors"
            >
              <div className="text-3xl mb-2 text-primary">
                <tech.icon className="w-8 h-8 mx-auto" />
              </div>
              <div className="text-sm font-medium">{tech.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
