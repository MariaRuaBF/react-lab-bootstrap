import { Button } from "./components/Button";
import {
  Card,
  CardBody,
  CardHeader,
  CardSubtitle,
  CardTitle,
} from "./components/Card";
import { Checkbox } from "./components/Checkbox";

export function App() {
  return (
    <>
      <h1>Bootstrap and mui</h1>
      <Button variant="outline" />
      <Card>
        <CardTitle>Melo</CardTitle>
        <CardSubtitle>Subtitulo</CardSubtitle>
        <CardHeader>Bienvenido</CardHeader>
        <CardBody>Hola mundo</CardBody>
      </Card>
      <Checkbox variant="checkbox" />
      <Checkbox variant="switch" />
      <Checkbox variant="radio" value="tengo valor" />
      <Checkbox />
    </>
  );
}
