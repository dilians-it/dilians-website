import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import blogData from '../data/blogs.json';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogData.blogs.find(blog => blog.id === parseInt(id));

  useEffect(() => {
    // Reset scroll position when blog post loads
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [id]);

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
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

          <article className="glass p-8 rounded-xl">
            {/* Hero Section */}
            <div className="mb-8">
              <img 
                src={blog.image} 
                alt={blog.title}
                className="w-full h-[400px] object-cover rounded-xl mb-6"
              />
              
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {blog.category}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {new Date(blog.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
                <p className="text-muted-foreground text-lg mb-4">{blog.excerpt}</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm">By</span>
                  <span className="font-medium">{blog.author}</span>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <ReactMarkdown
                components={{
                  h1: ({node, ...props}) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
                  h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-8 mb-4" {...props} />,
                  h3: ({node, ...props}) => <h3 className="text-xl font-bold mt-6 mb-3" {...props} />,
                  p: ({node, ...props}) => <p className="mb-4 leading-relaxed" {...props} />,
                  ul: ({node, ...props}) => <ul className="list-disc list-inside mb-4" {...props} />,
                  ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-4" {...props} />,
                  li: ({node, ...props}) => <li className="mb-2" {...props} />,
                  blockquote: ({node, ...props}) => (
                    <blockquote className="border-l-4 border-primary pl-4 italic my-4" {...props} />
                  ),
                }}
              >
                {blog.content}
              </ReactMarkdown>
            </div>
          </article>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost;
