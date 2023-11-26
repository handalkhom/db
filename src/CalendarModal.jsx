import React, { useState } from "react";
import { Button, DatePicker, Modal } from "antd";
const CalendarModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button onClick={showModal}>Cari Tanggal</Button>
      <Modal
        title="Silahkan Pilih Tanggal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <DatePicker />
      </Modal>
    </>
  );
};
export default CalendarModal;
