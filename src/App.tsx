import { Button } from "./components/Button";
import { Card } from "@components";

export function App() {
  return (
    <>
      <h1>Bootstrap and mui</h1>
      <Button variant="outline" />
      <Card
        variant="outlined"
        color="success"
        title="Ttiulo desde la app "
        subtitle="SUbtitle panita"
        text="Lorem ipsum complete please"
        anchor="Learn more mor"
      ></Card>
    </>
  );
}
