import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/pages/Dashboard';
import { Provider } from "react-redux";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
