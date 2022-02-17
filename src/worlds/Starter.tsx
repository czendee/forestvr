import { Spinning, Floating, StandardEnvironment, Text } from "spacesvr";
//to get data from api
import axios from "axios";
import TransparentFloor from "../ideas/TransparentFloor";
import CloudySky from "../ideas/CloudySky";
import Cubes from "../ideas/Cubes";
import Textotes from "../ideas/Textosf";

import { useState, useEffect,useMemo } from "react";




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
        console.log("dato traido 6688");
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

//  const pasito1 = async () => {
//    const sera = await fetchData();
//  }


  fetchData(); //call the fetch method
 
 /* useEffect(() => {
    fetchData();
  
  }, []);
*/

  const arrStocks: Libro[] = useMemo(() => {
    const arr2: Libro[] = [];
    console.log("revisar lo que trae stocks, if any");
    stocks.forEach((element: any) => {
      console.log("elemento es");
      console.log(element);
      arr2.push({ indice: 1, titulo: element.name });
    });

    return arr2;
  }, []);



  //END  new code to get text from api
  
  return (
    <StandardEnvironment>
      <ambientLight />
      <Cubes />  
      <Textotes stocks={arr} /> 
        
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
