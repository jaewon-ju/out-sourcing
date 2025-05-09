// App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";
import SubPage from "./pages/SubPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/subpage/:id" element={<SubPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
