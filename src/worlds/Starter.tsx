import { Spinning, Floating, StandardEnvironment } from "spacesvr";
import TransparentFloor from "../ideas/TransparentFloor";
import CloudySky from "../ideas/CloudySky";
import Cubes from "../ideas/Cubes";
import Textotes from "./Textosf";

import { useState, useEffect } from "react";

//to get data from api
import axios from "axios";


export default function Starter() {
  
  //START  new code to get text from api
    type Libro = {
    indice: number;
    titulo: string;
  };
  
  
  const arribotota: Libro[] = [
    { indice: 1, titulo: "The Princess and the Queen" },
    { indice: 1, titulo: "The Rogue Prince" },
    { indice: 1, titulo: "The World of Ice and Fire" }
  ];

  const [stocks, setStocks] = useState([]);
  console.log("stocks", stocks);

  const arr: Libro[] = [];

  const fetchData = async () => {
    try {
      const resp = await axios.get(
        "https://www.anapioficeandfire.com/api/books?pageSize=30"
      );
      console.log("datos encontardo API:");
      console.log(resp.data);
      // After collecting all the data we can set data into state at once.
      setStocks(resp.data);
      //iterate the results
      resp.data.forEach((element: any) => {
        console.log("dato traido");
        console.log(element);
        arr.push({ indice: 1, titulo: element.name });
      });
      let arrayLength = arr.length;
      console.log("how many arr elements:");
      console.log(arrayLength);

      arr.forEach(function (item, index) {
        console.log("loopeando");
        console.log(item, index);
      });
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  //fetchData(); //call the fetch method
  useEffect(() => {
    fetchData();
  }, []);

  const otro: Libro = { indice: 2, titulo: "este sea romantico" };
  const COUNT = 150;

  const arrLibros: Libro[] = [];
  for (let i = 0; i < COUNT; i++) {
    arrLibros.push({
      indice: 5,
      //      titulo: "este es el amorrrs"
      titulo: arribotota[1].titulo
    });
  }
  //END  new code to get text from api
  
  return (
    <StandardEnvironment>
      <ambientLight />
      <Cubes />      
      <Textotes parametrito={otro} libros={arrLibros} stocks={stocks} />
      <group position={[0, 0, -4]}>
        <Floating>
          <Spinning xSpeed={0.2} ySpeed={0.4} zSpeed={0.3}>
            <mesh>
              <torusKnotBufferGeometry args={[1, 0.2]} />
              <meshStandardMaterial color="blue" />
            </mesh>
          </Spinning>
        </Floating>
      </group>
      <CloudySky color="white" />
      <TransparentFloor opacity={0.7} />
    </StandardEnvironment>
  );
}
