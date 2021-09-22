import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Field",
    dataIndex: "name",
    key: "key",
  },
  {
    title: "Value",
    dataIndex: "value",
    key: "key",
  },
];

const InstanceDetails = ({ data }) => {
  console.log(data);
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        size="small"
        pagination={{ pageSize: 30, position: ["topLeft"] }}
        title={() => <h3>Instance Details</h3>}
      />
    </div>
  );
};

export default InstanceDetails;

export async function getServerSideProps(context) {
  const response = await fetch("http://10.33.1.168:8099/wse/restapi/oms/instance/details");
  const data = await response.json();
  return {
    props: { data: data },
  };
}
