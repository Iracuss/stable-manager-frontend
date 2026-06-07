import { useEffect, useState } from 'react';
import { getAllHorses } from './api/horseService';
import TopApp from './components/TopBar'
import SideBar from './components/SideBar'
import HorseContent from './components/HorseContent';

function App() {
  const [horses, setHorses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllHorses()
      .then((data) => {
        setHorses(data);
        setIsLoading(false);
      })
      .catch((err) => {
        // Handle error
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div className="p-10 text-center">Loading your stable...</div>;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <TopApp />
      <div className="flex flex-1">
        <SideBar horses={horses} />
        <HorseContent horses={horses} />
      </div>
    </div>
  )
}

export default App;
