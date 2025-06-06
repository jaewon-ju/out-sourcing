// App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DynamicSubPage from "./pages/DynamicSubPage";
import SurveyPage from "./pages/SurveyPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sub/:singer" element={<DynamicSubPage />} />
        <Route path="/survey" element={<SurveyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
