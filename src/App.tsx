import './App.css';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';
import { TechStackSection } from './components/TechStackSection';
import type { Technology } from './types/tech';
import { ToastContainer } from 'react-toastify';

const fetchTechData = async (): Promise<Technology[]> => {
  const res = await fetch('/data.json');
  // const data= await res.json();
  // return data;

  if (!res.ok) {
    throw new Error('Failed to load technologies');
  }
  return (await res.json()) as Technology[];
};

const techPromise = fetchTechData();

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50/50">
      <div>
        <Nav />
        <Banner />

        <TechStackSection techPromise={techPromise} />
      </div>

      <Footer />
    </div>
  );
}

export default App;