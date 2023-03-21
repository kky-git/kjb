import { Descriptions } from 'antd';
const Huanzhe = () => (
  <Descriptions title="患者基本信息" layout="vertical">
    <Descriptions.Item label="姓名">Zhou Maomao</Descriptions.Item>
    <Descriptions.Item label="性别">男</Descriptions.Item>
    <Descriptions.Item label="出生日期">1998-14-22</Descriptions.Item>
    <Descriptions.Item label="电话">1810000000</Descriptions.Item>
    <Descriptions.Item label="年龄">Hangzhou, Zhejiang</Descriptions.Item>
    <Descriptions.Item label="地址" span={2}>
      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
    </Descriptions.Item>
    <Descriptions.Item label="Remark">empty</Descriptions.Item>
  </Descriptions>
);
export default Huanzhe;