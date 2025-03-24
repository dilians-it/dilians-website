import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaSearch, FaClipboardList, FaCode, FaRocket } from 'react-icons/fa';

const ProcessSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const process = [
    {
      icon: FaSearch,
      title: 'Discovery',
      description: 'Understanding your needs and objectives'
    },
    {
      icon: FaClipboardList,
      title: 'Planning',
      description: 'Developing a strategic approach'
    },
    {
      icon: FaCode,
      title: 'Development',
      description: 'Building your solution'
    },
    {
      icon: FaRocket,
      title: 'Launch',
      description: 'Delivering and maintaining'
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl font-bold text-center mb-12"
        >
          Our Process
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-8">
          {process.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl mx-auto mb-4">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
