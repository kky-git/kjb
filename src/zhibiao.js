import React from 'react';
import { Badge, Descriptions } from 'antd';
const Zhibiao= ()=>(
    <Descriptions title="最新测量指标" bordered>
    <Descriptions.Item label="视力">1.2</Descriptions.Item>
    <Descriptions.Item label="眼压">1.2</Descriptions.Item>
    <Descriptions.Item label="血压">4.5</Descriptions.Item>
    <Descriptions.Item label="血氧含量">8.5</Descriptions.Item>
    <Descriptions.Item label="心率">67</Descriptions.Item>
    <Descriptions.Item label="备注">指标测量内容由各病症负责人决定显示哪些指标</Descriptions.Item>
    
  </Descriptions>
);

  

export default Zhibiao;