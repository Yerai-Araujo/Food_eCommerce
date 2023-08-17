import Header from './components/Header';
import Home from './components/Home';
import { items } from './items';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import DetailItem from './components/DetailItem';
import Details from './components/Details';
import NotFound from './components/NotFound';

function App() {
  return (
  <Router>
    <Header />
    {items.length === 0
        ? <div>Loading...</div>
        : (
          <Routes>
            <Route path="/details" element={<Details items={items} />}>
              <Route path=":id" element={<DetailItem items={items}/>} />
              <Route index element={<div>No Item Selected</div>} />
            </Route>
            <Route path="/" element={<Home items={items} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
  </Router>
  );
}

export default App;
