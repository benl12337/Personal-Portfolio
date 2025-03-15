import { useState } from 'react'
import ProjectCard from './components/ProjectCard'
import './App.css'
import odinThumb from './assets/odindrive.png'


const projects = [
  {
    name: 'OdinDrive',
    github: 'https://github.com/benl12337/odinDrive',
    live: 'https://odindrive-production-0930.up.railway.app',
    description: 'OdinDrive is like Google Drive, but worse. My first attempt at building a session based authentication- using Prisma for database management and EJS for server side rendering',
    image: odinThumb,
    tags: ['EJS', 'Prisma ORM', 'Passport']
  },
  {
    name: 'OdinBlog',
    github: 'www.example.com',
    live: 'www.example.com',
    description: 'My first go at creating a backend API',
    image: 'www.example.com'
  },
  {
    name: 'CV Builder',
    github: 'www.example.com',
    live: 'www.example.com',
    image: 'www.example.com'
  },

]

function App() {

  return (
    <>
    <h1>Hi! I'm Ben, an aspiring front-end developer</h1>
    <div className="main-body">
      <div className="right-text">
        Check out some of my work
      </div>
    <div className="project-container">
      {/* Map through the projects array */}
      {
        projects.map((project)=>{
          return < ProjectCard project={project}/>
        })
      }
    </div>
    </div>
    </>
  )
}

export default App
