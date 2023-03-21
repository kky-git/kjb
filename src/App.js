// import { PieChartOutlined } from '@ant-design/icons';
// import {  Layout, Menu, Space, theme } from 'antd';
// import { useState } from 'react';
// import Imageshow from './Imageshow';
// import Selectbar from './selectbar';
// import { Col, Row } from 'antd';
// import Aj from './A';
// import { SearchOutlined } from '@ant-design/icons';
// import { Button, Tooltip } from 'antd';

// import Cj from './C';
// import SelectBarLink from './SelectBar2';
// const { Header, Content, Footer, Sider } = Layout;

// function getItem(label, key, icon, children) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   };
// }
// const items = [
//   getItem('Option 1', '1', <PieChartOutlined />),
//   // getItem('Option 2', '2', <DesktopOutlined />),
// ];


// const App = () => {

//   const [cards, setCards]=useState([]);
//   const cardList = cards.map((card) => (
//     <Col span={6}>
//       <Imageshow id={card.id} url={card.url} title={card.title} desc={card.desc}/>    
//     </Col> 
//   ));
//   const [nodeCap,setNodeCap] = useState([]);
//   const NodeList = nodeCap.map((node) =>(
//     <Col span={4}>
//       <Aj p={node.usedPercent}></Aj>
//     </Col>
//   ));
//   const getNodeInfo = (e) => {
//     fetch('http://127.0.0.1:8080/nodeInfo',{
//       method:'POST',
      
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         setNodeCap(data);
//       })
//   }
//   const [tableDisk, setTableDisk] = useState([{
//         "tableName": "病症1",
//         "regionServer": "1",
//         "fileSize": 35,
//     },]);
//   const getTableInfo =(e) => {
//     fetch('http://127.0.0.1:8080/tableDisk',{
//         method:'POST',
        
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             setTableDisk(data);
            
//         })
//   }
//   const TableList = () =>(
//     <Cj table={tableDisk}></Cj>

//   );
  




//   const [collapsed, setCollapsed] = useState(false);
//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();
//   return (
  
//     <Layout
//       style={{
//         minHeight: '100vh',
//       }}
//     >
//       <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
//         <div
//           style={{
//             height: 32,
//             margin: 16,
//             background: 'rgba(255, 255, 255, 0.2)',
//           }}
//         />
//         <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
//       </Sider>
//       <Layout className="site-layout">
        
//         <Content
//           style={{
//             margin: '0 16px',
//           }}
//         >

//           <div
//             style={{
//               padding: 24,
//               minHeight: 80,
//               background: colorBgContainer,
//             }}
//           >
           
//             <SelectBarLink setCards={setCards}/>
            
          
          

//           </div>

//           <Row gutter={[16,16]}>
//             {cardList} 
//           </Row>
//            <div style={{
//               padding: 50,
//               minHeight: 60,
//               margin: 30,
//               background: colorBgContainer,
//             }}>
//             <h3>数据节点资源占用情况</h3>
//             <Button type="primary" icon={<SearchOutlined />} style={{marginLeft:400}} onClick={getNodeInfo}>
//                 更新
//             </Button>
//             <Row gutter={[4,4]}>
//               {NodeList}

//           </Row>
//           </div>
//           <div  style={{
//               padding: 30,
//               minHeight: 60,
//               margin: 10,
//               background: colorBgContainer,
//              }}>
//                 <h3>病症数据分布情况</h3>
//                 <Button type="primary" icon={<SearchOutlined />} style={{marginLeft:400}} onClick={getTableInfo}>
//                 更新
//                 </Button>
//                 {/* {TableList} */}
//                 <Cj table={tableDisk}/>
//                 {/* {TableList} */}
//           </div>
          
          
//           {/* <Row>
//             <Col span={12}>
//               <div  style={{
//               padding: 30,
//               minHeight: 60,
//               margin: 10,
//               background: colorBgContainer,
//             }}>
//                 <h3>病症数据分布情况</h3>
//                 <Cj/>
//               </div>

//             </Col>
//             <Col span={12}>
//             <div  style={{
//               padding: 24,
//               minHeight: 60,
//               margin: 10,
//               background: colorBgContainer,
//             }}>
//                 <h3>事件记录</h3>
//                 <EventRecord/>
//               </div>
              
//             </Col>
//           </Row>
//           <Imgdes/>
//           <Huanzhe/>
//           <Bingshi/>
//           <Zhibiao/> */} 

          
          
          
//         </Content>

//         <Footer
//           style={{
//             textAlign: 'center',
//           }}
//         >
//           中南大学计算机学院
//         </Footer>
//       </Layout>
//     </Layout>
//   );
// };

// export default App;







// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }
// // export default App;





import {Routes, Route, Link} from 'react-router-dom'
import PageMonitor from './PageMonitor';
import PageSelect from './PageSelect';
const App = () => (
  <Routes>
      <Route path="/" element={<PageMonitor/>}/>
      <Route path="/PageSelect" element={<PageSelect/>}/>
   
  </Routes>

  );
  

export default App;