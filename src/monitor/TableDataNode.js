import { Table, Tag } from 'antd';
const columns = [
    {
        title: '数据节点',
        dataIndex: 'dataNode',
        key: 'dataNode',
        // render: (text) => <a>{text}</a>,
        
      },
      {
        title: 'Regions数量',
        dataIndex: 'regionCount',
        key: 'regionCount',
        // sorter: (a,b)=>a.bornyear-b.bornyear,
      },
      {
        title: '空间占用量',
        dataIndex: 'storeSize',
        key: 'storeSize',
        // render: (text) => <a>{text}</a>,
        
      },
      {
        title: '空间可用量',
        dataIndex: 'remainSize',
        key: 'remainSize',
        // render: (text) => <a>{text}</a>,
        
      },
   
      {
        title: '连接状态',
        key: 'contact',
        dataIndex: 'contact',
        render: (_, { contact }) => (
          <>
            {contact.map((tag) => {
              let color = 'geekblue';
              if (tag === '异常') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag}
                </Tag>
              );
            })}
          </>
        ),
      },

    
];
const data = [
  {
    key: '1',
    dataNode: 'server3',
    regionCount: 50,
    storeSize: '161.4 GB',
    remainSize: '1702GB', 
    contact:['正常'],
   
  },
  {
    key: '1',
    dataNode: 'server4',
    regionCount: 50,
    storeSize: '159.0 GB',
    remainSize: '1704GB', 
    contact:['正常'],
   
  },
  {
    key: '1',
    dataNode: 'server8',
    regionCount: 48,
    storeSize: '159.0 GB',
    remainSize: '1704GB', 
    contact:['正常'],
   
  },
  {
    key: '1',
    dataNode: 'server9',
    regionCount: 51,
    storeSize: '161.7 GB',
    remainSize: '1702GB', 
    contact:['正常'],
   
  },
  {
    key: '1',
    dataNode: 'server10',
    regionCount: 49,
    storeSize: '165.5 GB',
    remainSize: '1698GB', 
    contact:['正常'],
   
  },
  {
    key: '1',
    dataNode: 'server12',
    regionCount: 49,
    storeSize: '163.6 GB',
    remainSize: '1700GB', 
    contact:['正常'],
   
  },
  {
    key: '1',
    dataNode: 'server14',
    regionCount: 48,
    storeSize: '188.2 GB',
    remainSize: '1675GB', 
    contact:['正常'],
   
  },
  {
    key: '1',
    dataNode: 'server15',
    regionCount: 50,
    storeSize: '167.6 GB',
    remainSize: '1696GB', 
    contact:['正常'],
   
  },
  {
    key: '1',
    dataNode: 'server16',

    contact:['异常'],
   
  },

];
const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};
const TableDataNode = () => <Table columns={columns} dataSource={data} onChange={onChange} />;
export default TableDataNode;