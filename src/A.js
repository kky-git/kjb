import { Liquid } from '@antv/g2plot';
import { statistic } from 'antd/es/theme/internal';
import { useEffect,useRef } from 'react';
const Aj=(props)=>{
  const container=useRef(null);

  useEffect( () => {
    const liquidPlot = new Liquid(container.current,{
      percent: props.p,
      padding: [0,0,0,0],
      height:140,
        outline: {
          border: 4,
          distance: 8,
        },
        wave: {
          length: 50,
        },
        liquidStyle:{
            fill: 'l(1) 0:#ffffff 0.5:#7ec2f3 1:#1890ff',
            fillOpacity: 0.5,
            stroke: 'blue',
            lineWidth: 0.5,
            lineDash: [1, 2],
            // opacity : 0.5,
            strokeOpacity: 0.7,
            shadowColor: 'blue',
            shadowBlur: 10,
            shadowOffsetX: 5,
            shadowOffsetY: 5,
            cursor: 'pointer'

        },
        statistic:{
        content:{
          style:{
            fontSize: 30,
            fontWeight: 300,
            textAlign: 'red',
            textBaseline: 'middle',
            // shadowColor: 'black',
            shadowBlur: 10,
          
          }

        }
        }
        
        

       

    });
    liquidPlot.render();
    return () => container.current.innerHTML="";
  },[]);
  return (
    <div ref={container}></div>
  );
  
};
export default Aj;



// const Aj = ()=>{
//   const liquidPlot = new Liquid('container1', {
//       percent: 0.25,
//       autoFit:false,
//       outline: {
//         border: 4,
//         distance: 8,
//       },
//       wave: {
//         length: 128,
//       },
      

//       // liquidStyle: ({ percent }) => {
//       //   return {
//       //     fill: percent > 0.45 ? '#5B8FF9' : '#FAAD14',
//       //     stroke: percent > 0.45 ? '#5B8FF9' : '#FAAD14',
//       //   };
//       // },
//       // liquidStyle: {
//       //   fill: '#5B8FF9',
//       //   stroke: '#5B8FF9'
//       // }
    
    
//     });
//     liquidPlot.render();
//     return (
//       <div id='container1'></div>
//     )
// }