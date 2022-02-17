import { useMemo } from "react";
import { Color } from "three";
import { Floating, Text } from "spacesvr";

const COUNT = 150;
const RANGE_XZ = 50;
const RANGE_Y = 30;



type Libro = {
  indice: number;
  titulo: string;
};

//type MyProps = {
  // using `interface` is also ok
//  stocks: string;
//};
//const Textosf = (props:MyProps) => {
const Textosf = (props) => {


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


  );
};

export default Textosf;