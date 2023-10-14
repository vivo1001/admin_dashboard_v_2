import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import BoardPage from './pages/Board/Board';

const App = () => {
  return <div id="dashboard">


    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path="board" element={<BoardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  </div>;
};

export default App;
