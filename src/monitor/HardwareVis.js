import { Area } from '@antv/g2plot';
import userEvent from '@testing-library/user-event';
import { useEffect, useReducer, useRef, useState } from 'react';

const HardwareVis = (props) => {

  
    const container = useRef(null);
    
    useEffect(() => {
        const data = props.cpu;
       
        const area = new Area(container.current, {
            title:{
                visible: true,
                text: '病症数据分布情况',
                },
            data,
           
           xField: 'date',
           yField: 'cpuUsage',
           yAxis:{
            max:100,
            min:0,
           },
           areaStyle: () => {
            return {
              fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff',
            };
          },
          
           
        });
        area.render();
        return () => container.current.innerHTML = "";
    }, [props.cpu]);
    return (
        <div ref={container} style={{
            width:'24vw',
            height:'24vh',
            position: 'absolute',
            transform:'translate(0, 6vh)'
           }}></div>
    );

};
export default HardwareVis;