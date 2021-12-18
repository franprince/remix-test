import React from 'react'
import { Link } from 'react-router-dom';

const Home = ({ children }: { children: React.ReactNode }) => {
  return <div className="remix-app">
    <header className="remix-app__header">
      <div className="container remix-app__header-content">
        <Link to="/" title="Remix" className="remix-app__header-home-link">
          HOLA
        </Link>
        <nav aria-label="Main navigation" className="remix-app__header-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="https://remix.run/docs">Remix Docs</a>
            </li>
            <li>
              <a href="https://github.com/remix-run/remix">GitHub</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <div className="remix-app__main">
      <div className="container remix-app__main-content">{children}</div>
    </div>
    <footer className="remix-app__footer">
      <div className="container remix-app__footer-content">
        <p>&copy; You!</p>
      </div>
    </footer>
  </div>
}

export default Home;
