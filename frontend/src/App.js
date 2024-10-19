// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';

function App() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch reports from the backend
    axios
      .get('http://localhost:5000/api/reports')
      .then((response) => {
        setReports(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('There was an error fetching the reports!', error);
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      <h1 className="text-center my-4">Dashboard Reports</h1>
      {loading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <Row>
          {reports.map((report) => (
            <Col key={report.id} md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{report.title}</Card.Title>
                  <Card.Text>{report.content}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default App;
