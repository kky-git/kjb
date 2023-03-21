import { Column } from '@antv/g2plot';
import userEvent from '@testing-library/user-event';
import { useEffect, useReducer, useRef, useState } from 'react';

const Cj = (props) => {


    console.log("hua");
    const container = useRef(null);
    

    useEffect(() => {
        const data = props.table;
        console.log(data);
        const column = new Column(container.current, {
            title:{
                visible: true,
                text: '病症数据分布情况',
                },
            data,
           
       
           xField: 'serverName',
           yField: 'fileSize',
           isStack:true,
           seriesField: 'tableName',
           intervalPadding: 1,
           xAxis:{
            title:{
                visible: true,
                text: '数据节点'
            }
           },
           yAxis:{
            title:{
                visible: true,
                text: '数据量(GB)'
            }
           }
           
        });
        column.render();
        return () => container.current.innerHTML = "";
    }, [props.table]);
    return (
        <div ref={container}></div>
    );

};

// const Cj = () => {
//     const container = useRef(null);
//     const chart = useRef(null);

//     useEffect ( () => {
//         if (!chart.current) {
//             chart.current = renderBarChart(container.current);
//         }
//     }, []);
//     function renderBarChart (container) {
//         const chart = new Column({
//             container
//         });

//         const data = [
//             {
//             "tableName": "病症1",
//             "regionServer": "1",
//             "fileSize": 35,
//         },
//         {
//             "tableName": "病症2",
//             "regionServer": "2",
//             "fileSize": 33,
//         },
        
//         ];
//         chart
//             .interval()
//             .data(data)
//             .encode("xField","regionServer")
//             .encode("yField","fileSize")
//             .encode("seriesField","tableName")
//         chart.render();
//         return chart;
//     }
//     function updateBarChart (chart) {
//         const interval = chart.getNodesByType("intervale")[0];
//         const newData=[];
//         fetch('http://127.0.0.1:8080/tableDisk',{
//             method:'POST',
            
//             })
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data);
//                 newData=data;
                
//             })
//         interval.data(newData);
//         chart.render();
//     }
//     return (
//         <div >
//             <div ref={container}></div>
//             <button onClick={() => updateBarChart(chart.current)}>Update Data</button>
//         </div>
//     );
// }



// const Cj = () => {
//     const container = useRef(null);
//     // const [data, setData] = useState([{
//     //     "tableName": "病症1",
//     //     "regionServer": "1",
//     //     "fileSize": 35,
//     // },
//     // {
//     //     "tableName": "病症2",
//     //     "regionServer": "2",
//     //     "fileSize": 33,
//     // },
    
//     // ]);

//     fetch('http://127.0.0.1:8080/tableDisk',{
//         method:'POST',
        
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             // setData(data);
            
//             const column = new Column(container.current, {
//                 title:{
//                     visible: true,
//                     text: '病症数据分布情况',
//                     },
//                 data,
//             //    height:600,
//                xField: 'regionServer',
//                yField: 'fileSize',
//                isStack:true,
//                seriesField: 'tableName',
//                intervalPadding: 1,
//                xAxis:{
//                 title:{
//                     visible: true,
//                     text: '数据节点'
//                 }
//                },
//                yAxis:{
//                 title:{
//                     visible: true,
//                     text: '数据量(GB)'
//                 }
//                }
               
//             });
//             column.render();
            
//         })
//         return (
//             <div ref={container}></div>
//         );

// };
export default Cj;