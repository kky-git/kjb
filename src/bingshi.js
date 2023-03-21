import { Space, Table, Tag } from 'antd';
const columns = [
  {
    title: '入院时间',
    dataIndex: 'inputtime',
    key: 'imputtime',

  },
  {
    title: '出院时间',
    dataIndex: 'outputtime',
    key: 'outputtime',
  },
  {
    title: '诊断结果',
    dataIndex: 'result',
    key: 'result',
  },
  
];
const data = [
  {
    key: '1',
    inputtime: '2023-1-10',
    outputtime: '2023-1-13',
    result: '原发型急性青光眼',
  },
  {
    key: '2',
    inputtime: '2022-11-12',
    outputtime: '2023-11-15',
    result: '白内障 高血压',
  },
  {
    key: '3',
    inputtime: '2022-10-17',
    outputtime: '2023-10-17',
    result: '肺炎',
  },
];
const Bingshi = () => <Table columns={columns} dataSource={data} />;
export default Bingshi;