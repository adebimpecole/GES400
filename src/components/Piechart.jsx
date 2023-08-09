import { VictoryPie } from 'victory';
import "../components/Piecharts.css"

const Piechart = () => {
  
  const data = [
    { x: 'Sold', y: 100 },
    { x: 'Available', y: 1000 },
  ];

  return (
    <VictoryPie
      data={data}
      innerRadius={130} // Adjust this value to control the donut size
      padAngle={1} // Increase to add space between slices
      colorScale={['#346c8f', '#133c55']}
    />
  );
};
export default Piechart