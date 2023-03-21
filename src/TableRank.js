import { Column } from '@antv/g2plot';
import userEvent from '@testing-library/user-event';
import { useEffect, useReducer, useRef, useState } from 'react';
import { Bar } from '@antv/g2plot';

const data = [
    {
      type: '肝部肿瘤数据',
      sales: 800,
    },
    {
      type: '青光眼数据',
      sales: 600,
    },
    {
      type: '心电图',
      sales: 500,
    },
    {
      type: '乳腺肿瘤',
      sales: 450,
    },
    {
      type: '待添加1',
      sales: 300,
    },
    {
      type: '待添加2',
      sales: 280,
    },
    {
      type: '待添加3',
      sales: 280,
    },
    {
      type: '待添加4',
      sales: 280,
    },
    {
      type: '待添加5',
      sales: 280,
    },
    {
      type: '待添加6',
      sales: 280,
    },
    
    
  ];

const TableRank = () => {
 
    const container = useRef(null);
    

    useEffect(() => {
        // const data = props.table;
        console.log(data);
        const column = new Bar(container.current, {
            title:{
                visible: true,
                text: '病症数据分布情况',
                },
                data,
                xField: 'sales',
                yField: 'type',
                // barWidthRatio: 0.4,
                maxBarWidth:10,
                minBarWidth:10,
                height:500,
                meta: {
                  type: {
                    alias: '类别',
                  },
                  sales: {
                    alias: '销售额',
                  },
                },
                xAxis:false,
                yAxis:false,
                // height:'65vh',
              
            
        });
        column.render();
        return () => container.current.innerHTML = "";
    }, );
    // [props.table]
    return (
        <div ref={container}  style={{transform:'translate(7vw, 0)',
        height:'50vh',width:'10vw' ,display:'flex',}}></div>
    );

};
export default TableRank;