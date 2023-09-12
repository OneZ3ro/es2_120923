import { Button } from "react-bootstrap";

const Welcome = () => {
  return (
    <div>
      <h1>Benvenuti!</h1>
      <p>Questo è uno shop dove puoi comprare libri!.</p>
      <p>
        <Button variant="primary">Scopri di più</Button>
      </p>
    </div>
  );
};
export default Welcome;
