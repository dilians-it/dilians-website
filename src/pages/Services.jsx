import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { lazy, Suspense } from 'react';

// Lazy load sections
const ProcessSection = lazy(() => import('../components/services/ProcessSection'));
const TechnologiesSection = lazy(() => import('../components/services/TechnologiesSection'));

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Loading placeholder
  const LoadingPlaceholder = () => (
    <div className="w-full h-40 flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>
  );

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
              Our
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent"> Services</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass p-6 relative group hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="text-primary">✓</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-primary text-2xl">→</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lazy loaded sections */}
      <Suspense fallback={<LoadingPlaceholder />}>
        <ProcessSection />
      </Suspense>

      <Suspense fallback={<LoadingPlaceholder />}>
        <TechnologiesSection />
      </Suspense>
    </div>
  );
};

const mainServices = [
  {
    icon: '🌐',
    title: 'Web Development',
    description: 'Create modern and scalable web applications',
    features: [
      'Custom Web Applications',
      'E-commerce Solutions',
      'Progressive Web Apps',
      'API Development'
    ]
  },
  {
    icon: '🤖',
    title: 'AI Solutions',
    description: 'Leverage the power of artificial intelligence',
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics'
    ]
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'Create beautiful and intuitive interfaces',
    features: [
      'User Interface Design',
      'User Experience Design',
      'Design Systems',
      'Prototyping'
    ]
  },
  {
    icon: '📊',
    title: 'Data Analysis & Business Intelligence',
    description: 'Transform raw data into actionable insights',
    features: [
      'Data Analysis & Visualization',
      'Power BI Dashboard Creation',
      'Data-Driven Decision Making',
      'Business Analysis & BI Intelligence'
    ]
  }
];

const process = [
  {
    icon: '1️⃣',
    title: 'Discovery',
    description: 'Understanding your needs and objectives'
  },
  {
    icon: '2️⃣',
    title: 'Planning',
    description: 'Developing a strategic approach'
  },
  {
    icon: '3️⃣',
    title: 'Development',
    description: 'Building your solution'
  },
  {
    icon: '4️⃣',
    title: 'Launch',
    description: 'Delivering and maintaining'
  }
];

const technologies = [
  { icon: '⚛️', name: 'React' },
  { icon: '🟨', name: 'JavaScript' },
  { icon: '🔷', name: 'TypeScript' },
  { icon: '🐍', name: 'Python' },
  { icon: '🎨', name: 'Figma' },
  { icon: '📱', name: 'React Native' }
];

export default Services;
