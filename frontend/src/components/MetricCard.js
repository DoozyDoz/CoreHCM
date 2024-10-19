import { Card } from 'react-bootstrap';

function MetricCard({ title, value }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{value}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MetricCard
