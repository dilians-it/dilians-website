import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import blogData from '../data/blogs.json';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogData.blogs.find(blog => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <button
            onClick={() => navigate('/blog')}
            className="mb-8 flex items-center gap-2 text-primary hover:underline"
          >
            ← Back to Blog
          </button>

          <article className="max-w-4xl mx-auto">
            <img 
              src={blog.image} 
              alt={blog.title}
              className="w-full h-[400px] object-cover rounded-xl mb-8"
            />
            
            <div className="mb-6">
              <span className="text-primary text-sm font-medium">{blog.category}</span>
              <h1 className="text-4xl font-bold my-4">{blog.title}</h1>
              <div className="flex items-center gap-4 text-muted-foreground">
                <span>{blog.author}</span>
                <span>•</span>
                <span>{new Date(blog.date).toLocaleDateString()}</span>
              </div>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              {blog.content}
            </div>
          </article>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost;
