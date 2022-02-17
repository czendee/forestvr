import { useMemo } from "react";
import { Color } from "three";
import { Floating, Text } from "spacesvr";

const COUNT = 150;
const RANGE_XZ = 50;
const RANGE_Y = 30;

type Cubo2 = {
  position: [number, number, number];
  size: number;
  color: Color;
  speed: number;
  texto: string;
};

type Libro = {
  indice: number;
  titulo: string;
};

const Textosf = (props) => {
  const cubos2: Cubo2[] = useMemo(() => {
    const arrStocks: Libro[] = [];
    props.stocks.forEach((element: any) => {
      console.log("elemento es");
      console.log(element);
      arrStocks.push({ indice: 1, titulo: element.name });
    });

    const arr: Cubo2[] = [];
    for (let i = 0; i < COUNT; i++) {
      arr.push({
        position: [
          Math.random() * RANGE_XZ * 2 - RANGE_XZ,
          Math.random() * RANGE_Y,
          Math.random() * RANGE_XZ * 2 - RANGE_XZ
        ],
        size: 0.5 + Math.random() * 2.5,
        color: new Color().setHSL(Math.random(), Math.random(), Math.random()),
        speed: Math.random() + 0.2
        //        texto: arrStocks && arrStocks[0].titulo,
      });
    }
    return arr;
  }, []);

  const arrStocks: Libro[] = useMemo(() => {
    const arr2: Libro[] = [];
    props.stocks.forEach((element: any) => {
      console.log("elemento es");
      console.log(element);
      arr2.push({ indice: 1, titulo: element.name });
    });

    return arr2;
  }, []);

  return (
    <group>
      {arrStocks &&
        arrStocks.map((stock) => (
          // @ts-ignore
          <Floating height={2 * 1.5} speed={0.9}>
            <Text
              text={stock.titulo}
              // text="Aqui esta los que buscas"
              vAlign="center" // vertical align relative to the y component
              hAlign="center" // horizontal align relative to the x component
              size={1} // scale
              color="#000000" // color
            ></Text>
          </Floating>
        ))}
    </group>

    /*<group>
{cubos2.map((cubo2) => (
  // @ts-ignore
  <Floating height={cubo2.size * 1.5} speed={cubo2.speed}>
    <Text
        text={props.parametrito.titulo}
     // text="Aqui esta los que buscas"
      vAlign="center" // vertical align relative to the y component
      hAlign="center" // horizontal align relative to the x component
      size={1} // scale
      color="#000000" // color
    ></Text>
  </Floating>
))}
</group>
*/
  );
};

export default Textosf;
