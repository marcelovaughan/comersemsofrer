import * as React from 'react';
import {
  Chart,
  PieSeries,  
} from '@devexpress/dx-react-chart-material-ui';
import { Legend } from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';


const parseGraphData = (data) => {
  delete data.energia;

  const calcPercent = (valor) => {
    const total = Object.values(data).reduce((total, valor)=>{
      return total + valor;
    }, 0);
    if(valor && total){
      return parseFloat(valor * 100 / total).toFixed(2);
    }
    return 0;
    
  }

  const graphData = Object.entries(data).map(key => {
    return { macro: key[0] + ' ('+ calcPercent(parseFloat(key[1]).toFixed(2))+'%)' , val: parseFloat(key[1]).toFixed(2) };
  })
  return graphData;
}

export default class ChartDoughnut extends React.PureComponent {
  
  render() {
    const { macros } = this.props;
    
    const data = macros && parseGraphData(macros)

    return (
      <Chart
        data={data}
        height={240}
      >
        <PieSeries
          valueField="val"
          argumentField="macro"
          innerRadius={0.5}
          color="#000"
        />
        <Legend />
        <Animation />        
      </Chart>      
    );
  }
}