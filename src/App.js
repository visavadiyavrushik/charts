import { CardHeader, CardTitle, Col, Row, Card } from "reactstrap";
import "./App.css";
import GoalOverview from "./GoalOverview";

function App() {
  return (
    <div className="App">
      <Card>
        <CardHeader>
          <CardTitle tag="h2">Chart Overview</CardTitle>
        </CardHeader>
      </Card>
      <Row>
        <Col xs="6">
          <GoalOverview />
        </Col>
        <Col xs="6">
          <GoalOverview />
        </Col>
      </Row>
    </div>
  );
}

export default App;
