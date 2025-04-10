import React from "react";
import { Card, Col, Row } from "antd";
const Programs = () => (
  <Row gutter={16}>
    <Col span={8}className="mt-2">
      <Card title='Program Title' variant='borderless'>
        Program no. 1
      </Card>
    </Col>
    <Col span={8}className="mt-2">
      <Card title='Program Title' variant='borderless'>
        Program no. 2
      </Card>
    </Col>
    <Col span={8}className="mt-2">
      <Card title='Program Title' variant='borderless'>
        Program no. 3
      </Card>
    </Col>
    <Col span={8}className="mt-2">
      <Card title='Program Title' variant='borderless'>
        Program no. 4
      </Card>
    </Col>
    <Col span={8}className="mt-2">
      <Card title='Program Title' variant='borderless'>
        Program no. 5
      </Card>
    </Col>
  </Row>
);
export default Programs;
