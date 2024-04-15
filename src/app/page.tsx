import Image from "next/image";
import styles from './Component/Page.module.css'

const Home: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-between p-24 bg-black text-white min-h-screen">
      <header className="flex flex-col items-center justify-center w-full mb-8">
        <nav className="flex items-center">
          <a href="#" className="mx-4">Home</a>
          <a href="#" className="mx-4">Skills</a>
          <a href="#" className="mx-4">Experience</a>
          <a href="#" className="mx-4">Contact</a>
        </nav>
      </header>

      <section className="flex items-start justify-start flex-grow">
  <div className="text-left">
    <h2 className="text-8xl font-extrabold mb-4 tracking-widest">
      <span>I'</span>m<br />
      Thushar<br />
      G S<span className="text-blue-500">.</span>
    </h2>
    <h2 className="text-8xl font-extrabold mb-4 tracking-widest">
      <span>0</span>1
      SKILLS
      <span className="text-blue-500">.</span>
    </h2>
    <nav>
  <ul>
    <li>
      <a href="#wordpress">Wordpress</a>
      <div className={styles["progress-bar"]} style={{ width: "70%" }}>
        <span className={styles["progress-text"]}>30%</span>
      </div>
    </li>
    <li>
      <a href="#dotnet">.NET</a>
      <div className={styles["progress-bar"]} style={{ width: "70%" }}>
        <span className={styles["progress-text"]}>70%</span>
      </div>
    </li>
    <li>
      <a href="#javascript">JavaScript</a>
      <div className={styles["progress-bar"]} style={{ width: "100%" }}>
        <span className={styles["progress-text"]}>100%</span>
      </div>
    </li>
  </ul>
</nav>

  </div>
</section>
<section className={styles.container}>
  <div className={styles.box}>
    <p className={styles.paragraph}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </p>
  </div>
</section>

      <footer className="text-center">
        <p>&copy; {new Date().getFullYear()} THUSHAR G S. All rights reserved.</p>
      </footer>
    </main>
  );
}

export default Home;
