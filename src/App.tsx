import "./App.css";
import Appbar from "./components/Appbar";
import { testInvoice } from "./mock-data/testInvoice";
import Invoice from "./components/Invoice/Invoice";
import Box from "@mui/material/Box";
import logos from "./config/logoConfig";

function App() {
  return (
    <div className="App">
      <Appbar amount={testInvoice.gross} due={testInvoice.due} />
      <Invoice />

      <Box
        component={"img"}
        src={logos.companyLogo}
        alt="logo"
        width={200}
        sx={{ ml: "calc(50% - 100px)", my: 9 }}
      />
    </div>
  );
}

export default App;
