

import RootLayout from '../app/layout'; // Import your layout component
import Projects from '../app/projects/page'; 

const HomePage: React.FC = () => {
  return (
    
    <RootLayout>
    <Projects />
  </RootLayout>
 
  );
}

export default HomePage;
