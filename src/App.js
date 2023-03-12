import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavbarPrimary from "./Components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <NavbarPrimary />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
