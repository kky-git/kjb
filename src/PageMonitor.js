import { PieChartOutlined } from '@ant-design/icons';
import { Layout, Menu, Space, theme } from 'antd';
import { useState } from 'react';
import { Statistic } from 'antd';
import { Col, Row } from 'antd';
import Aj from './A';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import Cj from './C';
import TableRank from './TableRank';
import TableDetail from './monitor/TableDetail'
import TableDataNode from './monitor/TableDataNode';
import HardwareVis from './monitor/HardwareVis';
import MemoryVis from './monitor/MemoryVis';
import DiskIoVis from './monitor/DiskIoVis';
import InternetVis from './monitor/InternetVis';
import WordFreq from './monitor/WordFreq';

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  // getItem('Option 2', '2', <DesktopOutlined />),
];


const PageMonitor = () => {


  const [nodeCap, setNodeCap] = useState([]);
  const NodeList = nodeCap.map((node) => (
    <Col span={6}>
      <Aj p={node.usedPercent}></Aj>
    </Col>
  ));


  const getNodeInfo = (e) => {
    fetch('http://127.0.0.1:8080/nodeInfo', {
      method: 'POST',

    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setNodeCap(data);
      })
  }
  const [tableDisk, setTableDisk] = useState([
    {
      "tableName": "Mimic",
      'serverName': 'server2',
      "fileSize": 35,
    },
    {
      "tableName": "Mimic",
      'serverName': 'server3',
      "fileSize": 40,
    },
    {
      "tableName": "Mimic",
      'serverName': 'server4',
      "fileSize": 25,
    },
    {
      "tableName": "Mimic",
      'serverName': 'server5',
      "fileSize": 15,
    },
    {
      "tableName": "Eye",
      'serverName': 'server3',
      "fileSize": 20,
    },
    {
      "tableName": "Eye",
      'serverName': 'server4',
      "fileSize": 23,
    },
    {
      "tableName": "Eye",
      'serverName': 'server5',
      "fileSize": 19,
    },
    {
      "tableName": "Eye",
      'serverName': 'server7',
      "fileSize": 21,
    },
    {
      "tableName": "Breast",
      'serverName': 'server7',
      "fileSize": 8,
    },
    {
      "tableName": "Breast",
      'serverName': 'server6',
      "fileSize": 5,
    },
    {
      "tableName": "Breast",
      'serverName': 'server3',
      "fileSize": 6,
    },
    {
      "tableName": "Heart",
      'serverName': 'server6',
      "fileSize": 7,
    },
    {
      "tableName": "Heart",
      'serverName': 'server4',
      "fileSize": 8,
    },
    {
      "tableName": "Heart",
      'serverName': 'server2',
      "fileSize": 9,
    },
  ]);
  const [hardwareData, setHardwareData] = useState(
    [
      {
        "date": "08:44",
        "cpuUsage": 63,
        "memoryUsage": 34.53,
        "diskIO": 10,
        "Internet": 5
      },
      {
        "date": "08:45",
        "cpuUsage": 70.99,
        "memoryUsage": 34.79,
        "diskIO": 10.05,
        "Internet": 4.16
      },
      {
        "date": "08:46",
        "cpuUsage": 70.44,
        "memoryUsage": 32.62,
        "diskIO": 8.49,
        "Internet": 5.84
      },
      {
        "date": "08:47",
        "cpuUsage": 74.59,
        "memoryUsage": 40.45,
        "diskIO": 10.8,
        "Internet": 3.43
      },
      {
        "date": "08:48",
        "cpuUsage": 72.17,
        "memoryUsage": 32.69,
        "diskIO": 10.66,
        "Internet": 5.96
      },
      {
        "date": "08:49",
        "cpuUsage": 73.68,
        "memoryUsage": 40.25,
        "diskIO": 12.62,
        "Internet": 4.28
      },
      {
        "date": "08:50",
        "cpuUsage": 70.35,
        "memoryUsage": 36.72,
        "diskIO": 9.98,
        "Internet": 4.97
      },
      {
        "date": "08:51",
        "cpuUsage": 79.34,
        "memoryUsage": 37.01,
        "diskIO": 10.72,
        "Internet": 4.58
      },
      {
        "date": "08:52",
        "cpuUsage": 77.78,
        "memoryUsage": 36.6,
        "diskIO": 8.44,
        "Internet": 6.39
      },
      {
        "date": "08:53",
        "cpuUsage": 85.66,
        "memoryUsage": 43.34,
        "diskIO": 9.79,
        "Internet": 6.1
      },
      {
        "date": "08:54",
        "cpuUsage": 76.49,
        "memoryUsage": 42.83,
        "diskIO": 8.8,
        "Internet": 8.06
      },
      {
        "date": "08:55",
        "cpuUsage": 81.41,
        "memoryUsage": 48.04,
        "diskIO": 11.34,
        "Internet": 5.98
      },
      {
        "date": "08:56",
        "cpuUsage": 80.34,
        "memoryUsage": 44.61,
        "diskIO": 10.3,
        "Internet": 6.78
      },
      {
        "date": "08:57",
        "cpuUsage": 81.99,
        "memoryUsage": 50.15,
        "diskIO": 12.59,
        "Internet": 4.51
      },
      {
        "date": "08:58",
        "cpuUsage": 78.31,
        "memoryUsage": 48.74,
        "diskIO": 11.79,
        "Internet": 5.22
      },
      {
        "date": "08:59",
        "cpuUsage": 83.94,
        "memoryUsage": 51.82,
        "diskIO": 13.48,
        "Internet": 2.5
      },
      {
        "date": "09:00",
        "cpuUsage": 82.13,
        "memoryUsage": 50.35,
        "diskIO": 13.35,
        "Internet": 4.5
      },
      {
        "date": "09:01",
        "cpuUsage": 86.88,
        "memoryUsage": 51.43,
        "diskIO": 15.24,
        "Internet": 4.23
      },
      {
        "date": "09:02",
        "cpuUsage": 79.6,
        "memoryUsage": 48.96,
        "diskIO": 13.88,
        "Internet": 6.14
      },
      {
        "date": "09:03",
        "cpuUsage": 85.22,
        "memoryUsage": 55.48,
        "diskIO": 15.73,
        "Internet": 5.41
      },
      {
        "date": "09:04",
        "cpuUsage": 80.44,
        "memoryUsage": 49.85,
        "diskIO": 15.46,
        "Internet": 8.31
      },
      {
        "date": "09:05",
        "cpuUsage": 88.67,
        "memoryUsage": 56.18,
        "diskIO": 17.43,
        "Internet": 7.07
      },
      {
        "date": "09:06",
        "cpuUsage": 79.35,
        "memoryUsage": 54.38,
        "diskIO": 14.8,
        "Internet": 8.45
      },
      {
        "date": "09:07",
        "cpuUsage": 89.05,
        "memoryUsage": 58.28,
        "diskIO": 17.35,
        "Internet": 7.43
      },
      {
        "date": "09:08",
        "cpuUsage": 80.01,
        "memoryUsage": 54.03,
        "diskIO": 15.98,
        "Internet": 10.33
      },
      {
        "date": "09:09",
        "cpuUsage": 86.02,
        "memoryUsage": 54.42,
        "diskIO": 18.26,
        "Internet": 8.47
      },
      {
        "date": "09:10",
        "cpuUsage": 81.73,
        "memoryUsage": 50.43,
        "diskIO": 17.02,
        "Internet": 10.85
      },
      {
        "date": "09:11",
        "cpuUsage": 82.66,
        "memoryUsage": 54.59,
        "diskIO": 19.5,
        "Internet": 10.74
      },
      {
        "date": "09:12",
        "cpuUsage": 77.58,
        "memoryUsage": 47.64,
        "diskIO": 18.5,
        "Internet": 10.87
      },
      {
        "date": "09:13",
        "cpuUsage": 82.35,
        "memoryUsage": 54.08,
        "diskIO": 21.32,
        "Internet": 10.86
      },
      {
        "date": "09:14",
        "cpuUsage": 73.93,
        "memoryUsage": 45.46,
        "diskIO": 19.31,
        "Internet": 13.51
      },
      {
        "date": "09:15",
        "cpuUsage": 80.96,
        "memoryUsage": 47.76,
        "diskIO": 21.54,
        "Internet": 11.79
      },
      {
        "date": "09:16",
        "cpuUsage": 79.33,
        "memoryUsage": 38.8,
        "diskIO": 20.36,
        "Internet": 13.06
      },
      {
        "date": "09:17",
        "cpuUsage": 88.53,
        "memoryUsage": 42.79,
        "diskIO": 21,
        "Internet": 10.3
      },
      {
        "date": "09:18",
        "cpuUsage": 86.58,
        "memoryUsage": 38.86,
        "diskIO": 18.37,
        "Internet": 11.71
      },
      {
        "date": "09:19",
        "cpuUsage": 89.85,
        "memoryUsage": 41.84,
        "diskIO": 20.96,
        "Internet": 9.21
      },
      {
        "date": "09:20",
        "cpuUsage": 88.46,
        "memoryUsage": 32.8,
        "diskIO": 20.22,
        "Internet": 9.54
      },
      {
        "date": "09:21",
        "cpuUsage": 88.92,
        "memoryUsage": 42.36,
        "diskIO": 21.9,
        "Internet": 8.8
      },
      {
        "date": "09:22",
        "cpuUsage": 87.08,
        "memoryUsage": 38.12,
        "diskIO": 21.7,
        "Internet": 9.92
      },
      {
        "date": "09:23",
        "cpuUsage": 96.13,
        "memoryUsage": 40.03,
        "diskIO": 22.15,
        "Internet": 9.67
      },
      {
        "date": "09:24",
        "cpuUsage": 86.36,
        "memoryUsage": 31.69,
        "diskIO": 21.45,
        "Internet": 10.86
      },
      {
        "date": "09:25",
        "cpuUsage": 94.08,
        "memoryUsage": 35.55,
        "diskIO": 24.06,
        "Internet": 8.45
      }
    ]
  )
  const getTableInfo = (e) => {
    fetch('http://127.0.0.1:8080/tableDisk', {
      method: 'POST',

    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setTableDisk(data);

      })
  }

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (

    <Layout
      style={{
        minHeight: '500vh',
      }}
    >
      {/* <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider> */}
      {/* <Layout className="site-layout"> */}

      {/* <Content
          style={{
            margin: '0 16px',
          }}
        > */}
      <div style={{
        padding: 30,
        minHeight: 60,
        margin: 10,
        width: '90vw',
        height: '25vh',
        background: colorBgContainer,
        position: 'absolute',
        transform: 'translate(0vh, 0vw)'
      }}>
        <h3>统计指标</h3>
        <Row gutter={24}>
          <Col span={6}>
            <Statistic title="存储数据量" value={899} precision={2} suffix='GB' />
          </Col>
          <Col span={6}>
            <Statistic title="病种数量" value={5} />

          </Col>
          <Col span={6}>
            <Statistic title="非结构化数据模态" value={4} />

          </Col>
          <Col span={6}>
            <Statistic title="服务器节点数量" value={10} />

          </Col>

        </Row>

      </div>

      <div style={{
        padding: 30,
        minHeight: 60,
        margin: 10,
        width: '40vw',
        height: '65vh',
        background: colorBgContainer,
        position: 'absolute',
        transform: 'translate(0vw, 26vh)'
      }}>
        <h3>病症数据分布情况</h3>
        {/* <Button type="primary" icon={<SearchOutlined />} style={{marginLeft:400}} onClick={getTableInfo}>
                更新
                </Button> */}
        <Cj table={tableDisk} />

      </div>


      <div style={{
        padding: 30,
        minHeight: 60,
        margin: 10,
        width: '28vw',
        height: '65vh',
        background: colorBgContainer,
        position: 'absolute',
        transform: 'translate(41vw, 26vh)'
      }}>
      
        {/* <Button type="primary" icon={<SearchOutlined />} style={{marginLeft:400}} onClick={getTableInfo}>
                更新
                </Button> */}
        {/* <Cj table={tableDisk} /> */}
        <WordFreq/>

      </div>
      
      <div style={{
        padding: 30,
        margin: 10,
        width: '20vw',
        height: '65vh',
        background: colorBgContainer,
        position: 'absolute',
        transform: 'translate(70vw, 26vh)'
      }}>


        <div style={{
          width: '6vw',
          background: colorBgContainer,
          position: 'absolute',
          transform: 'translate(0, 0)'
        }}>
          <div style={{ transform: 'translate(0, 1.5vh)', width: '10vw', display: 'flex' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 18,
              height: 18,
              borderRadius: '50%',
              background: '#304658',
              color: '#fff',
              fontSize: 12,
              marginRight: 8
            }}>
              1
            </span>
            <span style={{
              display: 'inline-block',
              opacity: 0.85,
              fontSize: 12,
              width: 'calc(100% - 24px)',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              overflow: 'hidden'
            }}>
              青光眼
            </span>
          </div>

          <div style={{ transform: 'translate(0, 4vh)', width: '10vw', display: 'flex' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 18,
              height: 18,
              borderRadius: '50%',
              background: '#304658',
              color: '#fff',
              fontSize: 12,
              marginRight: 8,
            }}>
              2
            </span>
            <span style={{
              display: 'inline-block',
              opacity: 0.85,
              fontSize: 12,
              width: 'calc(100% - 24px)',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              overflow: 'hidden'
            }}>
              青光眼
            </span>

          </div>
          <div style={{ transform: 'translate(0, 7vh)', width: '10vw', display: 'flex' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 18,
              height: 18,
              borderRadius: '50%',
              background: '#304658',
              color: '#fff',
              fontSize: 12,
              marginRight: 8,
            }}>
              2
            </span>
            <span style={{
              display: 'inline-block',
              opacity: 0.85,
              fontSize: 12,
              width: 'calc(100% - 24px)',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              overflow: 'hidden'
            }}>
              青光眼
            </span>

          </div>
          <div style={{ transform: 'translate(0, 9.5vh)', width: '10vw', display: 'flex' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 18,
              height: 18,
              borderRadius: '50%',
              background: '#304658',
              color: '#fff',
              fontSize: 12,
              marginRight: 8,
            }}>
              2
            </span>
            <span style={{
              display: 'inline-block',
              opacity: 0.85,
              fontSize: 12,
              width: 'calc(100% - 24px)',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              overflow: 'hidden'
            }}>
              青光眼
            </span>

          </div>
          <div style={{ transform: 'translate(0, 12vh)', width: '10vw', display: 'flex' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 18,
              height: 18,
              borderRadius: '50%',
              background: '#304658',
              color: '#fff',
              fontSize: 12,
              marginRight: 8,
            }}>
              2
            </span>
            <span style={{
              display: 'inline-block',
              opacity: 0.85,
              fontSize: 12,
              width: 'calc(100% - 24px)',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              overflow: 'hidden'
            }}>
              青光眼
            </span>

          </div>



        </div>

        <TableRank />




      </div>


      <div style={{
        padding: 30,
        minHeight: 300,
        margin: 10,
        width: '90vw',
        background: colorBgContainer,
        position: 'absolute',
        transform: 'translate(0, 93vh)'
      }}>
        <TableDetail />
      </div>


      <div style={{
        padding: 30,
        minHeight: 300,
        margin: 10,
        width: '90vw',
        background: colorBgContainer,
        position: 'absolute',
        transform: 'translate(0, 147vh)'
      }}>
        <TableDataNode />
      </div>




      <div style={{
        padding: 30,
        minHeight: 300,
        margin: 10,
        width: '55vw',
        height: '65vh',
        background: colorBgContainer,
        position: 'absolute',
        transform: 'translate(0, 235vh)'
      }}>
        <h3 style={{ position: 'absolute', transform: 'translate(0, 0)' }}>CPU占用率</h3>
        <HardwareVis cpu={hardwareData} />
        <h3 style={{ position: 'absolute', transform: 'translate(25vw, 0)' }}>内存占用率</h3>
        <MemoryVis cpu={hardwareData} />
        <h3 style={{ position: 'absolute', transform: 'translate(0, 30vh)' }}>磁盘传输率</h3>
        <DiskIoVis cpu={hardwareData} />
        <h3 style={{ position: 'absolute', transform: 'translate(25vw, 30vh)' }}> 网络吞吐量</h3>
        <InternetVis cpu={hardwareData} />

      </div>

      <div style={{
              padding: 30,
              minHeight: 60,
              margin: 10,
              width:'34vw',
              height:'65vh',
              background: colorBgContainer,
              position: 'absolute',
              transform: 'translate(56vw, 235vh)'
             }}>
                <h3 style={{display:'inline-block'}}>数据节点资源占用情况</h3>
            <Button type="primary" icon={<SearchOutlined />} style={{marginLeft:200,display:'inline-block'}} onClick={getNodeInfo}>
                更新
            </Button>
            <Row gutter={[4,4]}>
              {NodeList}
          </Row>
          </div>





      {/* </Content> */}
      {/* <Footer
          style={{
            textAlign: 'center',
          }}
        >
          中南大学计算机学院
        </Footer> */}
      {/* </Layout> */}
    </Layout>
  );
};

export default PageMonitor;











