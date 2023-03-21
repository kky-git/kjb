
import { WordCloud } from '@antv/g2plot';
import userEvent from '@testing-library/user-event';
import { useEffect, useReducer, useRef, useState } from 'react';

const WordFreq = (props) => {
    const data=[
        {
            "value": 9,
            "name": "青光眼"
        },
        {
            "value": 7,
            "name": "原发性"
        },
        {
            "value": 5,
            "name": "肝癌"
        },
        {
            "value": 4,
            "name": "乳腺癌"
        },
        {
            "value": 5,
            "name": "良性"
        },
        {
            "value": 5,
            "name": "恶性"
        },
        {
            "value": 2,
            "name": "心肌梗死"
        },
        {
            "value": 4,
            "name": "开角型"
        },
        {
            "value": 2,
            "name": "急性"
        },
        {
            "value": 1,
            "name": "术后"
        },
        {
            "value": 3,
            "name": "白内障"
        },
        {
            "value": 5,
            "name": "继发性"
        },
        {
            "value": 5,
            "name": "先天性"
        },
        {
            "value": 5,
            "name": "开角型"
        },
        {
            "value": 5,
            "name": "混合型"
        },
        {
            "value": 5,
            "name": "并发性"
        },
        {
            "value": 6,
            "name": "血管性"
        },
        {
            "value": 4,
            "name": "恶性"
        },
        {
            "value": 3,
            "name": "食管"
        },
        {
            "value": 3,
            "name": "心脏"
        },
        {
            "value": 3,
            "name": "肺叶"
        },
        {
            "value": 3,
            "name": "淋巴"
        },
        {
            "value": 3,
            "name": "胸膜"
        },
        {
            "value": 3,
            "name": "胸腺"
        },
        {
            "value": 3,
            "name": "下壁心肌梗死"
        },
        {
            "value": 3,
            "name": "左心房负荷过重/增大"
        },
        {
            "value": 3,
            "name": "左心室肥大"
        },
        {
            "value": 2,
            "name": "右心室肥大"
        },
        {
            "value": 1,
            "name": "间隔肥大"
        }
    ]

  
    const container = useRef(null);
    
    useEffect(() => {
        
        const wordCloud = new WordCloud(container.current, {
        data,
        wordField: 'name',
        weightField: 'value',
        colorField: 'name',
        wordStyle: {
            fontFamily: 'Verdana',
            fontSize: [10, 48],
            rotation: 0,
        },
        random: () => 0.5,
            
           
        });
        wordCloud.render();
        return () => container.current.innerHTML = "";
    });
    return (
        <div ref={container} style={{

           }}></div>
    );

};
export default WordFreq;