import React, { useState } from "react";
import {
  Card,
  Button,
} from "@mui/material";
import "./App.css";
import MenuButton from "./Components/MenuButton";
import MenuTable from "./Components/MenuTable";

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
        {/* Yeni bileşeni burada kullanın */}
        <MenuButton
          isOpen={isModalOpen}
          openModal={openModal}
          closeModal={closeModal}
          yemekItems={yemekItems}
          selectedItem={selectedItem}
          handleCheckBoxChange={handleCheckBoxChange}
          addSelectedItems={addSelectedItems}
        />
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
          {/* Yeni bileşeni burada kullanın */}
          <MenuTable selectedItem={selectedItem} />
        </Card>
      </div>
      <div>
        <Button variant="contained">İçecekler</Button>
      </div>
    </div>
  );
}

export default App;
