import { Radio } from 'antd';
import { useState,useRef } from 'react';
import { Select ,Space} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
const SelectEye = () => {
    const [query, setQuery] = useState({disease:"One",itemOne:1,itemTwo:1});
    
    const handleChangeDisease =(value) =>{
        var q=query;
        setQuery({disease:value,itemOne:value,itemTwo:q.itemTwo});

      };
    const handleChangeItemOne = (value) => {
        var q=query;
        setQuery({disease:q.disease,itemOne:value,itemTwo:q.itemTwo});
      };
    const handleChangeItemTwo = (value) => {
        var q=query;
        setQuery({disease:q.disease,itemOne:q.itemOne,itemTwo:value});
      };
    const queryCard = (e) =>{
        fetch('http://127.0.0.1:8080/queryCard',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body:JSON.stringify(query)
        })
            .then(response => response.json())
            .then(data => console.log(data));

    }


    return (
        <Space>
            <Select 
                defaultValue="青光眼"
                style={{
                    width: 120,
                }}
                onChange={handleChangeDisease}
                options={[
                    {
                        value: '青光眼',
                        label: '青光眼',
                    },
                    {
                        value: '乳腺肿瘤',
                        label: '乳腺肿瘤',
                    },
                    {
                        value: '肝部肿瘤',
                        label: '肝部肿瘤',
                    },
                    {
                        value: '肝部肿瘤',
                        label: '肝部肿瘤',
                    },
                    
                ]}
            />
            <Select 
                defaultValue="原发性"
                style={{
                    width: 120,
                }}
                onChange={handleChangeItemOne}
                options={[
                    {
                        value: '原发性',
                        label: '原发性',
                    },
                    {
                        value: '并发性',
                        label: '并发性',
                    },
                    {
                        value: '继发性',
                        label: '继发性',
                    },
                    {
                        value: '先天性',
                        label: '先天性',
                    },
                    {
                        value: '急性',
                        label: '急性',
                    },
                    
                ]}
            />
            <Select 
                defaultValue="开角型"
                style={{
                    width: 120,
                }}
                onChange={handleChangeItemTwo}
                options={[
                    {
                        value: '开角型',
                        label: '开角型',
                    },
                    {
                        value: '闭角型',
                        label: '闭角型',
                    },
                    {
                        value: '混合型',
                        label: '混合型',
                    },
                    
                ]}
            />
            <Select 
                defaultValue="左眼"
                style={{
                    width: 120,
                }}
                onChange={handleChangeItemTwo}
                options={[
                    {
                        value: '左眼',
                        label: '左眼',
                    },
                    {
                        value: '右眼',
                        label: '右眼',
                    },
                    
                    
                ]}
            />
            <Button type="primary" icon={<SearchOutlined />} style={{marginLeft:200}} onClick={queryCard}>
                查询
              </Button>

        </Space>



    );
};
export default SelectEye;