import React from "react";
import MainContent from "../components/MainContent";
import styles from "../styles/pages/Blog.module.css";
import { BLOGPOSTS } from "../assets/data/blog";

const Blog = () => {
  return (
    <MainContent pageName="blog">
      <section className={styles.blogPosts}>
        <ul className={styles.blogPostsList}>
          {BLOGPOSTS.map((post, index) => (
            <li className={styles.blogPostItem} key={index}>
              <a href={post.url} target="_blank" rel="noopener noreferrer">
                <figure className={styles.blogBannerBox}>
                  <img src={post.imgSrc} alt={post.altText} loading="lazy" />
                </figure>
                <div className={styles.blogContent}>
                  <div className={styles.blogMeta}>
                    <p className={styles.blogCategory}>{post.category}</p>
                    <span className={styles.dot}></span>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                  <h3 className={`h3 ${styles.blogItemTitle}`}>{post.title}</h3>
                  <p className={styles.blogText}>{post.excerpt}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </MainContent>
  );
};

export default Blog;
