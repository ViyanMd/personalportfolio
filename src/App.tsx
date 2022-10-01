import './App.scss';
import { Navbar } from "@/features/Navbar";
import { Home } from '@/features/Home';
import { Connect } from './features/Connect';
import { Projects } from './features/Projects';
import { Ukraine } from './features/Ukraine';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <Connect />
      <Ukraine />
    </>
  );
}

export default App;
