import {
  Card,
  Button,
  Checkbox,
  FormControlLabel,
  Modal,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import "./App.css";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModolOpen] = useState(false);

  const [selectedItem, setSelectedItems] = useState([]);
  const yemekItems = ["Döner", "Pide", "Kebap"];

  const openModal = () => {
    setIsModolOpen(true);
  };

  const closeModal = () => {
    setIsModolOpen(false);
  };

  const handleCheckBoxChange = (item) => {
    if (selectedItem.includes(item)) {
      setSelectedItems(selectedItem.filter((selected) => selected !== item));
    } else {
      setSelectedItems([...selectedItem, item]);
    }
  };

  const addSelectedItems = () => {
    closeModal();
  };

  return (
    <div style={{ display: "flex", margin: "5px" }}>
      <div>
        <Button variant="contained" onClick={openModal}>
          Menü
        </Button>

        <Modal
          style={{
            width: "150px",
            display: "flex",
            height: "200px",
            position: "absolute",
          }}
          open={isModalOpen}
          onClose={closeModal}
        >
          <Card style={{ padding: "20px" }}>
            {yemekItems.map((item) => (
              <FormControlLabel
                key={item}
                control={
                  <Checkbox
                    checked={selectedItem.includes(item)}
                    onChange={() => handleCheckBoxChange(item)}
                  />
                }
                label={item}
              />
            ))}
            <div>
              <Button variant="contained" onClick={addSelectedItems}>
                Ekle
              </Button>
            </div>
          </Card>
        </Modal>
        <Card
          style={{
            display: "flex",
            alignItems: "center",
            width: "200px",
            height: "250px",
            flexDirection: "column",
            margin: "10px",
            padding: "10px",
          }}
        >
          <Table className="custom-table">
            <TableHead>
              <TableRow>
                <TableCell
                  style={{ backgroundColor: "#ff5722", color: "#fff" }}
                >
                  Seçilen Ögeler
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {selectedItem.map((item) => (
                <TableRow key={item}>
                  <TableCell>{item}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
      <div>
        <Button variant="contained">İçecekler</Button>
      </div>
    </div>
  );
}

export default App;
