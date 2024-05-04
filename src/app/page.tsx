import Image from "next/image";
import styles from './Component/Page.module.css'

const Home: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center p-24 bg-black text-white min-h-screen">
  <header>
    <nav className="flex items-center">
      <a href="#" className="mx-4">Home</a>
      <a href="#" className="mx-4">Skills</a>
      <a href="#" className="mx-4">Contact</a>
    </nav>
  </header>
  <br></br>
  <div className="text-center">
  <div>Hi there, I'm Thushar G S.</div>
  <div>I am a software Developer.</div>
  <div>Welcome to my Life.</div>
</div>
  <section className="flex items-center justify-center flex-grow">
    <div className="text-center">
    <h1 style={{alignItems:"end"}}>SKILLS</h1>
    <table style={{ borderCollapse: 'separate', borderSpacing: '30px' }}>
  <tr>
    <td>Python</td>
    <td>MongoDB</td>
    <td>Django</td>
  </tr>
  <tr>
    <td>.NET MVC</td>
    <td>.NET API</td>
    <td>SQL (Structured Query Language)</td>
  </tr>
  <tr>
    <td>Node JS</td>
    <td>C#</td>
    <td>OOP and Data structures</td>
  </tr>
  <tr>
    <td>React JS</td>
    <td>React Native Expo</td>
    <td>React Native</td>
  </tr>
  <tr>
    <td>MSSQL Server</td>
    <td>.NET Web Forms</td>
    <td>Oracle Database</td>
  </tr>
</table>
    </div>
  </section>
  <section className="flex items-center justify-center flex-grow">
  <div className="text-center">
    <h1 style={{ alignItems: "end" }}>Projects</h1>
    <table style={{ borderCollapse: 'separate', borderSpacing: '30px' }}>
      <tr>
        <th>Gangakalayana</th>
        <th>Project Oversight</th>
        <th>Some Other Project</th>
      </tr>
      <tr>
        <td style={{ maxWidth: '200px', wordWrap: 'break-word' }}>
          This was a govt initiated project. This description is long and will wrap within the limited width.
        </td>
        <td style={{ maxWidth: '200px', wordWrap: 'break-word' }}>
          This was an internal project. This description is long and will wrap within the limited width.
        </td>
        <td style={{ maxWidth: '200px', wordWrap: 'break-word' }}>
          Description of Some Other Project. This description is long and will wrap within the limited width.
        </td>
      </tr>
      <tr>
        <th>Gangakalayana</th>
        <th>Project Oversight</th>
        <th>Some Other Project</th>
      </tr>
      <tr>
        <td style={{ maxWidth: '200px', wordWrap: 'break-word' }}>
          This was a govt initiated project. This description is long and will wrap within the limited width.
        </td>
        <td style={{ maxWidth: '200px', wordWrap: 'break-word' }}>
          This was an internal project. This description is long and will wrap within the limited width.
        </td>
        <td style={{ maxWidth: '200px', wordWrap: 'break-word' }}>
          Description of Some Other Project. This description is long and will wrap within the limited width.
        </td>
      </tr>
    </table>
  </div>
</section>
  <footer className="text-center">
    <p>{new Date().getFullYear()} THUSHAR G S.</p>
  </footer>
</main>


  );
}

export default Home;
