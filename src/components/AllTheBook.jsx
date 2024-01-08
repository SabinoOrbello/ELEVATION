import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import history from "../data/history.json";

const AllTheBook = () => {
  history.map((book) => (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={book.img} />
        <Card.Body key={book.asin}>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.category}</Card.Text>
          <Card.Text>{book.price}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  ));
};

export default AllTheBook;
