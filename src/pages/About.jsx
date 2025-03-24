import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Innovating the Future of
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent"> Technology</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Dilians IT is a forward-thinking technology company dedicated to transforming businesses 
              through innovative digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                We strive to empower businesses with cutting-edge technology solutions that drive 
                growth and innovation. Our commitment to excellence and forward-thinking approach 
                sets us apart in the digital landscape.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="glass p-4 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="glass aspect-video rounded-xl overflow-hidden">
                <img 
                  src="https://dbsworldemployment.com/wp-content/uploads/2023/03/mission.jpg" 
                  alt="Our Mission" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Core Values
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass p-6 text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-3xl font-bold text-center mb-12"
          >
            Meet Our Team
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass text-center p-6"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const stats = [
  { value: '5+', label: 'Years of Excellence' },
  { value: '100+', label: 'Projects Delivered' },
  { value: '50+', label: 'Expert Team Members' },
  { value: '15+', label: 'Countries Served' }
];

const values = [
  {
    icon: '🎯',
    title: 'Innovation',
    description: 'Constantly pushing boundaries and embracing new technologies'
  },
  {
    icon: '🤝',
    title: 'Collaboration',
    description: 'Working together to achieve exceptional results'
  },
  {
    icon: '⭐',
    title: 'Excellence',
    description: 'Delivering the highest quality in everything we do'
  }
];

const team = [
  {
    name: 'John Doe',
    role: 'CEO',
    image: '/team/ceo.jpg'
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    image: '/team/cto.jpg'
  },
  {
    name: 'Mike Johnson',
    role: 'Lead Developer',
    image: '/team/lead-dev.jpg'
  },
  {
    name: 'Sarah Williams',
    role: 'Design Director',
    image: '/team/design-director.jpg'
  }
];

export default About;
