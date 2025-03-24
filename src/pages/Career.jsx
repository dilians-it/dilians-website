import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import careerData from '../data/careers.json';

const Career = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleApply = (jobTitle) => {
    const subject = encodeURIComponent(`Application for ${jobTitle} position`);
    const body = encodeURIComponent(`I am interested in applying for the ${jobTitle} position.`);
    window.location.href = `mailto:diliansit.ltd@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Career Opportunities</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            {careerData.jobs.map((job, index) => (
              <motion.div
                key={job.id}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass card-hover p-6"
              >
                <h3 className="text-xl font-semibold mb-3">{job.title}</h3>
                <p className="text-muted-foreground mb-4">{job.description}</p>
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {job.type}
                  </span>
                  <span className="text-muted-foreground text-sm">{job.location}</span>
                </div>
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Requirements:</h4>
                  <ul className="list-disc list-inside text-muted-foreground">
                    {job.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
                <button 
                  className="btn-primary"
                  onClick={() => handleApply(job.title)}
                >
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Career;
