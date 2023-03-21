package com.csu.kjbdemo;

import com.alibaba.excel.context.AnalysisContext;
import com.alibaba.excel.read.listener.ReadListener;
import com.alibaba.excel.util.ListUtils;


import java.io.IOException;
import java.util.List;

public class ExcelDataListener implements ReadListener<ExcelData> {
    private static final int BATCH_COUNT = 100;

    private List<ExcelData> cacheDataList = ListUtils.newArrayListWithExpectedSize(BATCH_COUNT);

    @Override
    public void invoke(ExcelData data, AnalysisContext context) {
        cacheDataList.add(data);
        if (cacheDataList.size() >= BATCH_COUNT) {


            cacheDataList =ListUtils.newArrayListWithExpectedSize(BATCH_COUNT);
        }
    }

    @Override
    public void doAfterAllAnalysed(AnalysisContext analysisContext) {



    }


}
