import { Button } from "./components/Button";
import { Card, CardBody, CardFooter, CardHeader } from "@components";
import { Checkbox } from "./components/Checkbox";
import { useEffect, useState } from "react";

export function App() {
  const overlayImg = {
    src: "https://www.muycomputer.com/wp-content/uploads/2015/09/montblanc.jpg",
    alt: "Alt de la image",
  };

  useEffect(() => {
    fetch("http://192.168.2.59:8080/rooms/", {
      method: "GET",
      mode: "cors",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Leemos el cuerpo de la respuesta y devolvemos los datos como una promesa
      })
      .then((jsonData) => {
        setData(jsonData); // Actualizamos el estado con los datos leídos
        console.log(jsonData);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <>
      <h1>Bootstrap and mui</h1>
      <Button variant="outline" />
      <Card
        colorCard="success"
        size="md"
        variant="outlined"
        overlay={overlayImg}
        textCenter
      >
        <CardHeader>Hola mundo</CardHeader>
        <CardBody
          title="Hola mudno"
          subtitle="xDDD"
          anchor="xDD"
          textColor="success"
        />
        <CardFooter> Chao mundo</CardFooter>
      </Card>

      <Checkbox />
    </>
  );
}
