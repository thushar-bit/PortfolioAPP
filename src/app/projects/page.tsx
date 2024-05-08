'use client'
import Link from 'next/link';
import styles from '../Component/Page.module.css'
import { FaGithub,FaLinkedin ,FaMailBulk   } from "react-icons/fa";

import { useRouter } from 'next/navigation'
const Home: React.FC = () => {
  const router = useRouter()
  return (
 
    <div className={styles.Home}>
     
  <div className={styles.MainContent}>
    <p>
  Hi there, I'm Thushar. I'm an 25 y/o Software Developer. I like Playing Video games and building things. I enjoy language design, web development and I live on the terminal.
    
  </p>
  <br></br>
  <div className={styles.tableContainer}>
  <h1 className={styles.header}>SKILLS</h1>
  <br></br>
  <div className={styles.table}>
    <div className={styles.header}>Python</div>
    <div className={styles.header}>C#</div>
    <div className={styles.header}>React Native</div>
    <div className={styles.header}>React Native Expo</div>
    <div className={styles.header}>MongoDb</div>
    <div className={styles.header}>SQL(Structured Query Language)</div>
    <div className={styles.header}>ASP WebForms</div>
    <div className={styles.header}>ASP .NET MVC</div>
    <div className={styles.header}>ASP .NET API</div>
    <div className={styles.header}>HTML5</div>
    <div className={styles.header}>CSS</div>
    <div className={styles.header}>Javascript</div>
  </div>
</div>
<div className={styles.tableContainer}>
  <br></br>
  <br></br>
  <h1 className={styles.header}>Projects</h1>
  <br></br>
  <br></br>
  <div className={styles.table}>
    <div className={styles.header}>NextJS Projects</div>
    <div className={styles.header}> <button type="button" onClick={() => router.push('/projects/Anotherproject')}>
      .Net Projects
    </button></div>
    <div className={styles.header}>Web Form Projects</div>
  </div>
</div>
{/* <footer className={styles.footer}>
      <p >{new Date().getFullYear()} THUSHAR G S.
      <a href="https://github.com/thushar-bit" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/thushar-g-s" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
        <a href="mailto:thushargs44@gmail.com"><FaMailBulk/></a>
        </p>
    </footer> */}
</div>
</div>

  );
}
export default Home;

