import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitted: true, error: false, message: 'Message sent successfully!' });
    // Add your form submission logic here
  };

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
              Get in
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent"> Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Let's discuss how we can help transform your business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-6 text-center hover:shadow-lg transition-all"
              >
                <div className="text-3xl text-primary mb-4">
                  <info.icon className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="font-semibold mb-2">{info.title}</h3>
                <p className="text-muted-foreground">{info.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="glass p-8 rounded-2xl"
            >
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <FormInput
                  label="Name"
                  type="text"
                  name="name"
                  required
                />
                <FormInput
                  label="Email"
                  type="email"
                  name="email"
                  required
                />
                <FormInput
                  label="Subject"
                  type="text"
                  name="subject"
                  required
                />
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full btn-primary"
                >
                  Send Message
                </motion.button>
                {formStatus.submitted && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`text-center ${formStatus.error ? 'text-red-500' : 'text-green-500'}`}
                  >
                    {formStatus.message}
                  </motion.p>
                )}
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass aspect-square rounded-2xl overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0666430697757!2d90.32037661483711!3d23.77669748457682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1c04f0fa187%3A0x2dab56185a6f2d9e!2sDaffodil%20International%20University!5e0!3m2!1sen!2sbd!4v1647777770670!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

const FormInput = ({ label, type, name, required }) => (
  <div>
    <label className="block text-sm font-medium mb-2">{label}</label>
    <input
      type={type}
      name={name}
      required={required}
      className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
    />
  </div>
);

const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    title: 'Visit Us',
    content: 'Daffodil International University, Dhaka, Bangladesh'
  },
  {
    icon: FaEnvelope,
    title: 'Email Us',
    content: 'diliansit.ltd@gmail.com'
  },
  {
    icon: FaPhone,
    title: 'Call Us',
    content: '+880 1234-567890'
  }
];

export default Contact;
