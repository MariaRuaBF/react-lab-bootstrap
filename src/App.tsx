import { Button } from "./components/Button";
import { Card, CardBody, CardFooter, CardHeader } from "@components";

export function App() {
  return (
    <>
      <h1>Bootstrap and mui</h1>
      <Button variant="outline" />
      <Card
        colorCard="info"
        src="https://www.muycomputer.com/wp-content/uploads/2015/09/montblanc.jpg"
        size="md"
        variant="outlined"
        textCenter
      >
        <CardHeader>Hola mundo</CardHeader>
        <CardBody
          title="Hola mudno"
          subtitle="xDDD"
          anchor="xDD"
          textColor="primary"
        />
        <CardFooter> Chao mundo</CardFooter>
      </Card>
    </>
  );
}
