import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AppNavbar from './components/Navbar';
import MetricCard from './components/MetricCard'
import EmployeeChart from './EmployeeChart';

function Dashboard() {
  const data = [
    { month: 'Jan', employees: 120 },
    { month: 'Feb', employees: 130 },
    // ...
  ];

  return (
    <>
      <AppNavbar />
      <Container fluid>
        <Row className="mt-4">
          <Col md={3}>
            <MetricCard title="Total Employees" value="150" />
          </Col>
          <Col md={3}>
            <MetricCard title="New Hires" value="5" />
          </Col>
          <Col md={3}>
            <MetricCard title="Departures" value="2" />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={8}>
            <EmployeeChart data={data} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
