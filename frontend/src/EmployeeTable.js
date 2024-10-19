import { Table } from 'react-bootstrap';

const EmployeeTable = () => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Role</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>John Doe</td>
        <td>Software Engineer</td>
        <td>Active</td>
      </tr>
      {/* More rows */}
    </tbody>
  </Table>
);
