import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';

const { Meta } = Card;
const Imageshow = (props) => (
  
  <Card
    style={{
      width: 300,
      
    }}
    cover={
      <img
        alt="example"
        src={props.url}
      />
    }
    actions={[
      <EllipsisOutlined key="详情" />,
    ]}
   
  >
    <Meta
      title={props.title}
      description={props.desc}
    />
    
  </Card>
);
export default Imageshow;