import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Coming Soon
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
