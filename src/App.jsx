import './App.css'
import NavbarCl from './NavbarCl';
import CardList from './CardList';
import Fullstack from './Fullstack'
import Datascience from './Datascience'
import Cybersecurity from './Cybersecurity'
import Career from './Career'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.min.js";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';




function App() {
  const fullStacks = [
    {
      courseName: 'Java Full Stack Development',
      img: "https://static.guvi.in/blog/zenThumbnail/java-fsd.webp",
      key:1
    },
    {
      courseName: 'MERN Full Stack Development',
      img: "https://static.guvi.in/blog/zenThumbnail/mern-fsd.webp",
      key:2
    },
    {
      courseName: 'Python Full Stack Development',
      img: "https://static.guvi.in/course-thumbnail/webps/functional.webp",
      key:3
    }
  ]

  const dataScience = [
    {
      courseName: 'Data Science Course For Beginers to Advanced',
      img: "https://static.guvi.in/blog/zenThumbnail/java-at.webp",
      key:4
    },
    {
      courseName: 'Data Engineering Course with Bigdata and Hadoop',
      img: "https://static.guvi.in/blog/zenThumbnail/data-engineeringg.webp",
      key:5
    },
    {
      courseName: 'Data Engineering Course with Bigdata and Hadoop',
      img: "https://static.guvi.in/blog/zenThumbnail/java-at.webp",
      key:6
    }
  ]
  const cyberSecurity = [
    {
      courseName: 'Cyber Security and Ethical Hacking - Beginner',
      img: "https://static.guvi.in/course-thumbnail/webps/dark-web.webp",
      key:7
    },
    {
      courseName: 'Cyber Security and Ethical Hacking - Intermediate',
      img: "https://static.guvi.in/course-thumbnail/webps/dark-web.webp",
      key:8
    },
    {
      courseName: 'Cyber Security and Ethical Hacking - Advanced',
      img: "https://static.guvi.in/course-thumbnail/webps/dark-web.webp",
      key:9
    }
  ]
  const career = [
    {
      courseName: 'Business Communication',
      img: "https://static.guvi.in/course-thumbnail/webps/businesscommunicationenglish.webp",
      key:10
    }
  ]

  return (
    <>
      <BrowserRouter>
        <NavbarCl />

        <Routes>

          <Route index path="/" element={<CardList
            fullStacks={fullStacks}
            dataScience={dataScience}
            cyberSecurity={cyberSecurity}
            career={career}
          />}> </Route>

          <Route path="/fullstack" element={<Fullstack fullStacks={fullStacks} />} />

          <Route path="/datascience" element={<Datascience dataScience={dataScience} />} />

          <Route path="/cybersecurity" element={<Cybersecurity cyberSecurity={cyberSecurity} />} />

          <Route path="/career" element={<Career career={career} />} />


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
