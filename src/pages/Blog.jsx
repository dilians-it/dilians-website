import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import blogData from '../data/blogs.json';

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Our Blog</h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.blogs.map((post, index) => (
              <motion.div
                key={post.id}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass card-hover cursor-pointer"
                onClick={() => navigate(`/blog/${post.id}`)}
              >
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-t-lg" />
                <div className="p-6">
                  <span className="text-primary text-sm font-medium">{post.category}</span>
                  <h3 className="text-xl font-semibold my-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{new Date(post.date).toLocaleDateString()}</span>
                    <span className="text-sm text-muted-foreground">By {post.author}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
