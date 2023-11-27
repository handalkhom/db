// Ga dipake
import React, { useState } from "react";
import { Button, DatePicker, Modal } from "antd";
import axios from "axios";
import Cookies from "js-cookie";

const CalendarModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tanggal, setTanggal] = useState("");
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    console.log(tanggal);
    axios
      .get(`https://api-deed-balancer.netlify.app/.netlify/functions/api/notes/${tanggal}`, {
        headers: {
          "access-token": Cookies.get("access-token"),
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const tanggalPick = (date, dateString) => {
    setTanggal(dateString);
    console.log(date, dateString);
  };
  return (
    <>
      <Button onClick={showModal}>Cari Tanggal</Button>
      <Modal title="Silahkan Pilih Tanggal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <DatePicker onChange={tanggalPick} />
      </Modal>
    </>
  );
};
export default CalendarModal;
