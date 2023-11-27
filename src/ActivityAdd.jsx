import React, { useEffect, useState } from "react";
import DescriptionNav from "./DescriptionNav";
import { Button, ConfigProvider, TimePicker, Form, Input, Select, DatePicker, Space, message } from "antd";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";

const { TextArea } = Input;
const format = "HH:mm";

const ActivityAdd = () => {
  const { action, id } = useParams();
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [notes, setNotes] = useState({
    tanggal: "0000-00-00",
    waktu: "00:00",
    kategori: null,
    deskripsi: "",
  });

  useEffect(() => {
    if (action === "edit") {
      getNotesById();
    }
  }, []);

  const getNotesById = async () => {
    try {
      const response = await axios.get(`https://api-deed-balancer.netlify.app/.netlify/functions/api/notes/detail/${id}`, {
        headers: {
          "access-token": Cookies.get("access-token"),
        },
      });
      const result = response.data.data[0];
      setNotes({
        tanggal: result.createdAt.substring(0, 8) + (parseInt(result.createdAt.substring(8, 10)) + 1),
        waktu: result.waktu.substring(0, 5),
        kategori: result.status,
        deskripsi: result.deskripsi,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const tanggalPick = (date, dateString) => {
    setNotes({
      tanggal: dateString,
    });
  };

  const waktuPick = (time, timeString) => {
    setNotes({
      waktu: timeString,
    });
  };

  const onFinish = (values) => {
    let tanggal = values.tanggal.$d.getFullYear() + "-" + parseInt(values.tanggal.$d.getMonth() + 1) + "-" + values.tanggal.$d.getDate();
    let waktu = values.waktu.$d.toTimeString().substring(0, 5);
    if (action === "tambah") {
      axios
        .post(
          `https://api-deed-balancer.netlify.app/.netlify/functions/api/notes/detail`,
          {
            tanggal: `${tanggal}`,
            waktu: `${waktu}`,
            status: `${values.status}`,
            deskripsi: `${values.deskripsi}`,
          },
          {
            headers: {
              "Access-token": Cookies.get("access-token"),
            },
          }
        )
        .then((response) => {
          form.resetFields();
          messageApi.open({
            type: "success",
            content: `${response.data.message}`,
          });
          setTimeout(() => {
            navigate("/");
          }, 2000);
        })
        .catch((err) => {
          messageApi.open({
            type: "error",
            content: `${err}`,
          });
        });
    } else if (action === "edit") {
      axios
        .put(
          `https://api-deed-balancer.netlify.app/.netlify/functions/api/notes/detail/${id}`,
          {
            waktu: `${waktu}`,
            deskripsi: `${values.deskripsi}`,
          },
          {
            headers: {
              "Access-token": Cookies.get("access-token"),
            },
          }
        )
        .then((response) => {
          form.resetFields();
          messageApi.open({
            type: "success",
            content: `${response.data.message}`,
          });
          setTimeout(() => {
            navigate("/");
          }, 2000);
        })
        .catch((err) => {
          messageApi.open({
            type: "error",
            content: `${err}`,
          });
        });
    }
  };

  const deleteActivity = () => {
    axios
      .delete(`https://api-deed-balancer.netlify.app/.netlify/functions/api/notes/detail/${id}`, {
        headers: {
          "Access-token": Cookies.get("access-token"),
        },
      })
      .then((response) => {
        messageApi.open({
          type: "success",
          content: `${response.data.message}`,
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((err) => {
        messageApi.open({
          type: "error",
          content: `${err}`,
        });
      });
  };
  return (
    <div className="appBg">
      {contextHolder}
      <DescriptionNav />
      <p>
        <strong>{action.charAt(0).toUpperCase() + action.slice(1)} Aktivitas</strong>
      </p>
      <div className="activity-list-wrapper">
        {(notes.tanggal !== "0000-00-00" || action === "tambah") && (
          <Form
            form={form}
            onFinish={onFinish}
            initialValues={{
              tanggal: dayjs(notes.tanggal, "YYYY-MM-DD"),
              waktu: dayjs(notes.waktu, format),
              status: notes.kategori,
              deskripsi: notes.deskripsi,
            }}
          >
            <Form.Item label="Tanggal" name="tanggal">
              <DatePicker onChange={tanggalPick} disabled={action === "edit"} />
            </Form.Item>

            <Form.Item label="Waktu" name="waktu">
              <TimePicker format={format} onChange={waktuPick} />
            </Form.Item>

            <Form.Item label="Kategori" name="status">
              <Select disabled={action === "edit"}>
                <Select.Option value={1}>Positive</Select.Option>
                <Select.Option value={0}>Negative</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item label="Deskripsi" name="deskripsi">
              <TextArea rows={4} />
            </Form.Item>

            {/* </div> */}

            <ConfigProvider
              theme={{
                components: {
                  Button: {
                    colorPrimary: "#fff",
                    primaryColor: "#000000",
                    colorPrimaryActive: "#000",
                    colorPrimaryHover: "#ffe6d4",
                  },
                },
              }}
            >
              {action == "tambah" ? (
                <Button type="primary" htmlType="submit" className="add-activity-button">
                  Tambah Catatan
                </Button>
              ) : (
                <Space>
                  <Button type="primary" htmlType="submit">
                    Edit
                  </Button>
                  <Button onClick={deleteActivity}>Delete</Button>
                </Space>
              )}
            </ConfigProvider>
          </Form>
        )}
      </div>
    </div>
  );
};
export default ActivityAdd;
