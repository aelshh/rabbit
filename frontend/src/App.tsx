import { BrowserRouter, Routes, Route } from "react-router";
import UserLayout from "./components/Layout/UserLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
