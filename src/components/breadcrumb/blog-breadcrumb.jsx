import React from "react";
import { motion } from "framer-motion";
import bg from "@assets/img/breadcrumb/breadcrumb-bg-13.jpg";

const BlogBreadcrumb = () => {
  return (
    <section
      className="breadcrumb__area include-bg pt-170 pb-170 breadcrumb__overlay breadcrumb__style-3"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="breadcrumb__content text-center p-relative z-index-1">
              {/* ✅ Futuristic Animated Title */}
              <motion.h3
                className="breadcrumb__title"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 1.2,
                  ease: [0.25, 0.1, 0.25, 1],
                  type: "spring",
                }}
                whileHover={{
                  textShadow: "0 0 8px #126366ff, 0 0 20px #1e5557ff",
                  scale: 1.05,
                }}
                style={{
                  color: "#ffffff",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  fontWeight: "700",
                }}
              >
                Our Blog
              </motion.h3>

              <div className="breadcrumb__list">
                <span>
                  <a href="/">Home</a>
                </span>
                <span>Blog</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogBreadcrumb;
