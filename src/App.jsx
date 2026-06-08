import { useEffect, useState } from 'react';
import { getAllHorses } from './api/horseService';
import TopApp from './components/TopBar';
import SideBar from './components/SideBar';
import HorseContent from './components/HorseContent';
import AddHorse from './components/AddHorse';

function App() {
  const [horses, setHorses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedHorse, setSelectedHorse] = useState(null);
  const [isCreating, setIsCreating] = useState(false);

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
    <div className="flex flex-col h-screen bg-gray-50 overflow-hidden">
      <TopApp />
      <div className="flex flex-1">
        <SideBar 
          horses={horses} 
          onSelectedHorse={setSelectedHorse} 
          onAddHorse={setIsCreating}
        />
        {isCreating ? <AddHorse /> : <HorseContent horse={selectedHorse} />}
        
      </div>
    </div>
  )
}

export default App;
