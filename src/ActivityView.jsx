import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import CurrentDate from "./CurrentDate";
import { Button, ConfigProvider, DatePicker, Modal, Space } from "antd";
import axios from "axios";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";

const ActivityView = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const today = new Date();
  const [tanggal, setTanggal] = useState(today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate());
  const [dataAktivitas, setDataAktivitas] = useState([]);

  useEffect(() => {
    getDataAktivity();
  }, [tanggal]);

  const getDataAktivity = async () => {
    try {
      const response = await axios.get(`https://api-deed-balancer.netlify.app/.netlify/functions/api/notes/${tanggal}`, {
        headers: {
          "access-token": Cookies.get("access-token"),
        },
      });
      setDataAktivitas(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const tanggalPick = (date, dateString) => {
    setTanggal(dateString);
  };
  return (
    <div className="appBg">
      <Navigation />
      <CurrentDate tanggal={tanggal} />
      {dataAktivitas.length !== 0 && (
        <>
          <div className="activity-container">
            <p>Positif</p>
            <div className="activity-list-wrapper">
              <ol>
                {dataAktivitas.kegiatanBaik.map((e) => {
                  return (
                    <li key={e.id_detail_catatan}>
                      <Link to={`activity-add/edit/${e.id_detail_catatan}`}>
                        {e.waktu.substring(0, 5)} {e.deskripsi}
                      </Link>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
          <div className="activity-container">
            <p>Negatif</p>
            <div className="activity-list-wrapper">
              <ol>
                {dataAktivitas.kegiatanBuruk.map((e) => {
                  return (
                    <li key={e.id_detail_catatan}>
                      <Link to={`activity-add/edit/${e.id_detail_catatan}`}>
                        {e.waktu.substring(0, 5)} {e.deskripsi}
                      </Link>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </>
      )}

      {/* <ActivityBtn /> */}
      <div className="btn-wrapper">
        <ConfigProvider
          theme={{
            token: {
              // Seed Token
              colorPrimary: "#ffe6d4",

              // Alias Token
              // colorBgContainer: "#000000",
            },
          }}
        >
          <Space>
            {/* <Button className="activity-btn">
          </Button> */}
            {/* <CalendarModal  /> */}

            <Button onClick={showModal}>Cari Tanggal</Button>
            <Modal title="Silahkan Pilih Tanggal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
              <DatePicker onChange={tanggalPick} />
            </Modal>
            <Button type="primary" className="activity-btn" onClick={() => navigate("activity-add/tambah")}>
              Tambah Aktivitas
            </Button>
          </Space>
        </ConfigProvider>
      </div>
    </div>
  );
};
export default ActivityView;
