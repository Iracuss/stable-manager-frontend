import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

function App() {

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<DashboardPage />} />
          <Route path='/auth' element={<LoginPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
