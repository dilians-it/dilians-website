import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaReact, FaNodeJs, FaPython, FaFigma, FaChartBar } from 'react-icons/fa';
import { 
  SiTensorflow, 
  SiPytorch, 
  SiOpenai, 
  SiLaravel,
  SiVuedotjs 
} from 'react-icons/si';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Welcome to
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent"> Dilians IT</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12">
              Pioneering Innovation Through Web Development, AI/ML, and Design Excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/projects" className="btn-primary">
                View Our Work
              </Link>
              <Link to="/contact" className="btn-secondary">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We are a passionate team of professionals driven by innovation and dedicated to delivering solutions in 
              Web Development, AI/ML, and UI/UX design. We believe in creating impactful, open-source solutions 
              and actively contributing to the global open-source community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <TeamCard key={index} {...member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {technologies.map((tech, index) => (
              <TechCard key={index} {...tech} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's work together to bring your vision to life with our innovative solutions.
          </p>
          <Link to="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ title, description, icon: Icon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    className="glass p-6 rounded-xl"
  >
    <div className="text-4xl mb-4 text-primary">
      <Icon className="w-12 h-12" />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </motion.div>
);

const TeamCard = ({ name, role, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="glass p-6 rounded-xl"
  >
    <h3 className="text-xl font-bold mb-2">{name}</h3>
    <div className="text-primary font-medium mb-3">{role}</div>
    <p className="text-muted-foreground">{description}</p>
  </motion.div>
);

const TechCard = ({ icon: Icon, name, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="glass p-4 text-center hover:border-primary/20 transition-colors"
  >
    <Icon className="w-12 h-12 mx-auto mb-2 text-primary" />
    <div className="text-sm font-medium">{name}</div>
  </motion.div>
);

const services = [
  { 
    title: "Web Development",
    description: "Building responsive websites and web applications using modern technologies like React, Laravel, Node.js, and PHP.",
    icon: FaReact
  },
  { 
    title: "AI/ML Solutions",
    description: "Developing machine learning models, implementing predictive analytics, and automating workflows.",
    icon: SiTensorflow
  },
  { 
    title: "UI/UX Design",
    description: "Creating user-friendly, intuitive interfaces that offer the best user experience.",
    icon: FaFigma
  }
];

const team = [
  { 
    name: "Afsana Ahmed Ema",
    role: "Project Manager",
    description: "Responsible for managing project timelines, resources, and overall coordination between teams and clients."
  },
  { 
    name: "Tamim Ahasan Rijon",
    role: "Software Engineer (QA)",
    description: "Ensures the quality of software through rigorous testing, bug tracking, and providing feedback for improvement."
  },
  { 
    name: "Md. Sabilar Rahman",
    role: "Full Stack Developer",
    description: "Specializes in both front-end and back-end web development, ensuring seamless functionality across applications."
  },
  { 
    name: "Shawon Mandal",
    role: "UI/UX Designer",
    description: "Focuses on designing user-centric interfaces and enhancing user experience through thoughtful design patterns."
  },
  { 
    name: "Shafin Kader Tamim",
    role: "AI/ML Developer",
    description: "Works on developing AI and ML models, including data-driven analysis and predictive models."
  },
  { 
    name: "Shaun Mia",
    role: "Data Analytical Engineer",
    description: "Specializes in data analysis, visualization, and reporting for better decision-making."
  }
];

const technologies = [
  { icon: FaReact, name: 'React' },
  { icon: SiVuedotjs, name: 'Vue.js' },
  { icon: SiLaravel, name: 'Laravel' },
  { icon: FaNodeJs, name: 'Node.js' },
  { icon: FaPython, name: 'Python' },
  { icon: SiTensorflow, name: 'TensorFlow' },
  { icon: SiPytorch, name: 'PyTorch' },
  { icon: SiOpenai, name: 'OpenAI' },
  { icon: FaFigma, name: 'Figma' },
  { icon: FaChartBar, name: 'Power BI' }
];

export default Home;