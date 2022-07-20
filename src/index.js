import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UseContext from './context/useContext';
import MainPage from './components/MainPage';
import EventPage from './components/EventPage';
import TicketPage from './components/TicketPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UseContext>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/EventPage" element={<EventPage />} />
        <Route path="/TicketPage" element={<TicketPage />} />
      </Routes>
    </BrowserRouter>
  </UseContext>,
);

reportWebVitals();
