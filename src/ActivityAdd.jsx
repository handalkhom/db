import React from "react";
import DescriptionNav from "./DescriptionNav";
import {
  Button,
  ConfigProvider,
  TimePicker,
  Form,
  Input,
  Select,
  DatePicker,
} from "antd";

const { TextArea } = Input;
const format = "HH:mm";

const ActivityAdd = () => {
  return (
    <div className="appBg">
      <DescriptionNav />
      {/* <div className="activity-container"> */}
      <p>
        <strong>Tambah Aktivitas</strong>
      </p>
      <div className="activity-list-wrapper">
        <Form>
          <Form.Item label="Tanggal">
            <DatePicker />
          </Form.Item>

          <Form.Item label="Waktu">
            <TimePicker format={format} />
          </Form.Item>

          <Form.Item label="Kategori">
            <Select>
              <Select.Option value="positive">Positive</Select.Option>
              <Select.Option value="negative">Negative</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Deskripsi">
            <TextArea rows={4} />
          </Form.Item>
        </Form>
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
          <Button
            type="primary"
            htmlType="submit"
            className="add-activity-button"
          >
            Tambah Catatan
          </Button>
        </ConfigProvider>
      </div>
    </div>
  );
};
export default ActivityAdd;
