import { Row, Col, Image } from 'antd';
const Imgdes = () => (
  <div>
    <Row>
        <Col span={8}>
        <Image
    width={200}
    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
  />
        </Col>
        <Col span={8}>
            <h3>图片诊断描述</h3>
            <p>诊断描述: 患者患有原发型青光眼,伴随糖尿病2级,高血压3级。
            治疗建议: 每日注射胰岛素控制血糖,应尽快进行青光眼手术。</p>
        </Col>
    </Row>
    
 
  </div>
);
export default Imgdes;