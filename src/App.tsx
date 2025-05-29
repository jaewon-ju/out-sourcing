// App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";
import DynamicSubPage from "./pages/DynamicSubPage";
import SurveyPage from "./pages/SurveyPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/sub/:singer" element={<DynamicSubPage />} />
        <Route path="/survey" element={<SurveyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
