import { Avatar, List } from 'antd';
const data = [
  {
    title: '用户名:001',
    event: '向A病症中添加50条记录 时间:2023-2-8 15:00:00'
  },
  {
    title: '用户名:002',
    event: '从C病症中删除30条记录 时间:2023-1-8 22:00:00'
  },
  {
    title: '用户名:003',
    event: '向B病症中添加50条记录 时间:2022-1-1 12:00:00'
  },

];
const EventRecord = () => (
  <List
    itemLayout="horizontal"
    bordered="true"
    size="small"
    pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 3,
      }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta
        //   avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={<a href="https://ant.design">{item.title}</a>}
          description={item.event}
        />
      </List.Item>
    )}
  />
);
export default EventRecord;