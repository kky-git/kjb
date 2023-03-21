import { Table, Tag } from 'antd';
const columns = [
    {
        title: '表名',
        dataIndex: 'tableName',
        key: 'tableName',
        // render: (text) => <a>{text}</a>,
        
      },
      {
        title: '病种',
        dataIndex: 'disease',
        key: 'disease',
        // sorter: (a,b)=>a.bornyear-b.bornyear,
      },
      {
        title: '数据量',
        dataIndex: 'dataSize',
        key: 'dataSize',
        // render: (text) => <a>{text}</a>,
        
      },

      {
        title: '节点分布',
        key: 'dataNode',
        dataIndex: 'dataNode',
        render: (_, { dataNode }) => (
          <>
            {dataNode.map((tag) => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag === 'loser') {
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
      {
        title: '数据格式',
        key: 'dataFormat',
        dataIndex: 'dataFormat',
        render: (_, { dataFormat }) => (
          <>
            {dataFormat.map((tag) => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag === 'loser') {
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
      
      {
        title: 'Region数',
        dataIndex: 'regionCount',
        key: 'regionCount',
        // render: (text) => <a>{text}</a>,
        
      },


    
];
const data = [
  {
    key: '1',
    tableName: 'Mimic_Data',
    disease: '胸部肿瘤',
    dataSize: '980GB',
    dataNode: ['server1','server8','server10','server7'],
    dataFormat: ['dicm','txt'],
    regionCount: 323,
    
  },
  {
    key: '2',
    tableName: 'Eye_data',
    disease: '青光眼',
    dataSize: '800GB',
    dataNode: ['server10','server12','server14','server3','server15'],
    dataFormat: ['tif','jpg'],
    regionCount: 200,
    
  },
  {
    key: '3',
    tableName: 'ECG_data',
    disease: '心电图',
    dataSize: '30GB',
    dataNode: ['server7','server9'],
    dataFormat: ['hea','jpg'],
    regionCount: 25,
    
  },
  {
    key: '4',
    tableName: 'Brast_Data',
    disease: '乳腺癌',
    dataSize: '5GB',
    dataNode: ['server6','server8'],
    dataFormat: ['jpg'],
    regionCount: 2,
    
  },

];
const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};
const TableDetail = () => <Table columns={columns} dataSource={data} onChange={onChange} />;
export default TableDetail;