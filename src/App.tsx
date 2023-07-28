import { Button } from "./components/Button";
import { Card } from "@components";

export function App() {
  return (
    <>
      <h1>Bootstrap and mui</h1>
      <Button variant="outline" />
      <Card
        variant="dropdown"
        colorCard="success"
        title="Ttiulo desde la app "
        subtitle="SUbtitle panita"
        text="Lorem ipsum complete please"
        anchor="Learn more mor"
        img="https://static.nationalgeographic.es/files/styles/image_3200/public/2219.600x450.jpg?w=1900&h=1425"
      ></Card>
    </>
  );
}
