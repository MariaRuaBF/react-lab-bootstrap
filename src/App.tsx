import { Button } from "./components/Button";
import { Card, CardBody, CardFooter, CardHeader } from "@components";

export function App() {
  const overlayImg = {
    src: "https://www.muycomputer.com/wp-content/uploads/2015/09/montblanc.jpg",
    alt: "Alt de la image",
  };
  return (
    <>
      <h1>Bootstrap and mui</h1>
      <Button variant="outline" />
      <Card colorCard="info" size="md" variant="outlined" textCenter>
        <CardHeader>Hola mundo</CardHeader>
        <CardBody
          title="Hola mudno"
          subtitle="xDDD"
          anchor="xDD"
          textColor="info"
        />
        <CardFooter> Chao mundo</CardFooter>
      </Card>
    </>
  );
}
