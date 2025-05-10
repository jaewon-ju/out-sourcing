// App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";
import DynamicSubPage from "./pages/DynamicSubPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/sub/:singer" element={<DynamicSubPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
