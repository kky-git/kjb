import { Area } from '@antv/g2plot';
import userEvent from '@testing-library/user-event';
import { useEffect, useReducer, useRef, useState } from 'react';

const InternetVis = (props) => {

  
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
           yField: 'Internet',
           yAxis:{
            max:100,
            min:0,
           },
           areaStyle: () => {
            return {
              fill: 'l(270) 0:#FFFFFF 0.5:#FEA35A 1:#A74F01',
             
            };
          },
          line:{
            color:'#AF4F01'
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
            transform:'translate(25vw,36vh)'
           }}></div>
    );

};
export default InternetVis;