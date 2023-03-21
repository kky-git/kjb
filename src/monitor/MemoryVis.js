import { Area } from '@antv/g2plot';
import userEvent from '@testing-library/user-event';
import { useEffect, useReducer, useRef, useState } from 'react';

const MemoryVis = (props) => {

  
    const container = useRef(null);
    
    useEffect(() => {
        const data = props.cpu;
       
        const area = new Area(container.current, {
            title:{
                visible: true,
                text: '内存占用率',
                },
            data,
           
           xField: 'date',
           yField: 'memoryUsage',
           yAxis:{
            max:100,
            min:0,
           },
           areaStyle: () => {
            return {
              fill: 'l(270) 0:#FFFFFF 0.5:#FAB9F9 1:#8B12AE',
             
            };
          },
          line:{
            color:'#8B12AE'
          }
          
           
        });
        area.render();
        return () => container.current.innerHTML = "";
    }, [props.cpu]);
    return (
        <div ref={container} style={{
            width:'24vw',
            height:'24vh',
            position: 'absolute',
            transform:'translate(25vw, 6vh)'
           }}></div>
    );

};
export default MemoryVis;