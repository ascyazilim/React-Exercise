import React from "react";
import { Button, Modal, Card, Checkbox, FormControlLabel } from "@mui/material";

function MenuButton({ isOpen, openModal, closeModal, yemekItems, selectedItem, handleCheckBoxChange, addSelectedItems }) {
  return (
    <>
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
        open={isOpen}
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
    </>
  );
}

export default MenuButton;
