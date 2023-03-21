import { Select, Space } from 'antd';
import { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';

const diseaseData = ['青光眼','胸部肿瘤','乳腺肿瘤','肝部肿瘤'];
const firstData = {
    青光眼: ['原发性','并发性','继发性','先天性','慢性','急性'],
    胸部肿瘤: ['良性','恶性'],
    乳腺肿瘤: ['良性','恶性'],
    肝部肿瘤: ['良性','恶性'],

};
const secondData = {
    青光眼: ['开角型','闭角型','混合型'],
    胸部肿瘤: [],
    乳腺肿瘤: [],
    肝部肿瘤: [],

};
const thirdData = {
  青光眼: ['左眼','右眼'],
  胸部肿瘤: [],
  乳腺肿瘤: [],
  肝部肿瘤: [],

};
const nameToCode = {
  青光眼:'1',
  胸部肿瘤:'2',
  乳腺肿瘤:'3',
  肝部肿瘤:'4',
  原发性:'1',
  并发性:'2',
  继发性:'3',
  先天性:'4',
  慢性:'5',
  急性:'6',
  开角型:'1',
  闭角型:'2',
  混合型:'3',
  左眼:'1',
  右眼:'2',
  良性:'1',
  恶性:'2',
}
const  SelectBarLink= (props) => {
    const [firstMenu, setFirstMenu] = useState(firstData[diseaseData[0]]);
    const [secondMenu, setSecondMenu] = useState(secondData[diseaseData[0]]);
    const [thirdMenu, setThirdMenu] = useState(thirdData[diseaseData[0]]);
    const [diseaseValue, setDieaseValue] = useState(diseaseData[0]);
    const [firstValue,setFirstValue] = useState(firstData[diseaseData[0]][0]);
    const [secondValue, setSecondValue] = useState(secondData[diseaseData[0]][0]);
    const [thirdValue, setThirdValue] = useState(thirdData[diseaseData[0]][0]);
    const handleDieaseChange = (value) => {
        setDieaseValue(value);
        setFirstMenu(firstData[value]);
        setSecondMenu(secondData[value]);
        setFirstValue(firstData[value][0]);
        setSecondValue(secondData[value][0]);
        setThirdValue(thirdData[value][0]);
        
    };
    const onFirstMenuChange = (value) => {
        setFirstValue(value);
    }
    const onSecondMenuChange = (value) => {
        setSecondValue(value);
    }
    const onThirdMenuChange = (value) => {
        setThirdValue(value);
    }

    const queryCard = (e) =>{
        fetch('http://127.0.0.1:8080/queryCard',{
            method: 'POST',
            headers: {
                'Content-Type': 'text/html',
              },
            body:(nameToCode[diseaseValue]+nameToCode[firstValue]+nameToCode[secondValue]+nameToCode[thirdValue]+'0000').slice(0,4)
        })
            .then(response => response.json())
            .then(data =>{
                console.log(data);
                props.setCards(data);
                
            } );

    }


  return (
    <Space wrap>
      <Select
        defaultValue={diseaseData[0]}
        style={{
          width: 120,
        }}
        onChange={handleDieaseChange}
        options={diseaseData.map((disease) => ({
          label: disease,
          value: disease,
        }))}
      />
      <Select
        style={{
          width: 120,
        }}
        value={firstValue}
        onChange={onFirstMenuChange}
        options={firstMenu.map((firstOption) => ({
          label: firstOption,
          value: firstOption,
        }))} 
      />
      <Select
        style={{
          width: 120,
        }}
        value={secondValue}
        onChange={onSecondMenuChange}
        options={secondMenu.map((secondOption) => ({
          label: secondOption,
          value: secondOption,
        }))} 
      />
      <Select
        style={{
          width: 120,
        }}
        value={thirdValue}
        onChange={onThirdMenuChange}
        options={thirdMenu.map((thirdOption) => ({
          label: thirdOption,
          value: thirdOption,
        }))} 
      />
      <Button type="primary" icon={<SearchOutlined />} style={{marginLeft:400}} onClick={queryCard}>
                查询
        </Button>
    </Space>
  );
};
export default SelectBarLink;