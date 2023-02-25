import { Box } from "@mui/system";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <Box>
      <Navbar></Navbar>
      <ItemListContainer greeting={"Bienvenido: Rodrigo"} />
    </Box>
  );
}

export default App;
