import { Radio } from 'antd';
import { useState,useRef } from 'react';
import { Select ,Space} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
const Selectbar = (props) => {
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
            .then(data =>{
                // console.log(data);
                props.setCards(data);
                
            } );

    }


    return (
        <Space>
            <Select 
                defaultValue="1"
                style={{
                    width: 120,
                }}
                onChange={handleChangeDisease}
                options={[
                    {
                        value: 'One',
                        label: 'One',
                    },
                    {
                        value: 'Two',
                        label: 'Two',
                    },
                    
                ]}
            />
            <Select 
                defaultValue="1"
                style={{
                    width: 120,
                }}
                onChange={handleChangeItemOne}
                options={[
                    {
                        value: '1',
                        label: '1',
                    },
                    {
                        value: '0',
                        label: '0',
                    },
                    
                ]}
            />
            <Select 
                defaultValue="1"
                style={{
                    width: 120,
                }}
                onChange={handleChangeItemTwo}
                options={[
                    {
                        value: '1',
                        label: '1',
                    },
                    {
                        value: '0',
                        label: '0',
                    },
                    
                ]}
            />
            <Button type="primary" icon={<SearchOutlined />} style={{marginLeft:200}} onClick={queryCard}>
                查询
              </Button>

        </Space>



    );
};
export default Selectbar;