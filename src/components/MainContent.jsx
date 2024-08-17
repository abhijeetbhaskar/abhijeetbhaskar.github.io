import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const MainContent = ({ pageName, children }) => {
  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <Navbar activePage={pageName} />
        <article className={`${pageName} active`} data-page={pageName}>
          <header>
            <h2 className="h2 article-title">{pageName}</h2>
          </header>
          {children}
        </article>
      </div>
    </main>
  );
};

export default MainContent;
