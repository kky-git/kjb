package com.csu.kjbdemo;

import com.alibaba.excel.EasyExcel;
import com.alibaba.excel.read.listener.PageReadListener;
import com.alibaba.fastjson2.JSONArray;
import com.alibaba.fastjson2.JSONObject;
import org.apache.commons.collections.map.HashedMap;
import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.hbase.*;
import org.apache.hadoop.hbase.client.*;
import org.apache.hadoop.hbase.filter.*;

import org.apache.hadoop.hbase.protobuf.generated.HBaseProtos.RegionInfo;
import org.apache.hadoop.hbase.util.Bytes;
import org.apache.hadoop.yarn.webapp.hamlet.Hamlet;
import org.apache.zookeeper.data.Id;

import javax.imageio.stream.FileImageInputStream;
import javax.imageio.stream.FileImageOutputStream;
import java.io.*;
import java.net.URISyntaxException;
import java.util.*;

public class Hbase {
    public static void main(String[] args) throws IOException {
        Configuration conf = HBaseConfiguration.create();
        Connection connection= ConnectionFactory.createConnection(conf);
        Admin admin = connection.getAdmin();
        Table table = connection.getTable(TableName.META_TABLE_NAME);



        List<HRegionInfo> regions = admin.getTableRegions(TableName.valueOf("kk_eye_new"));
        System.out.println("region信息");
        System.out.println(regions.get(0).getRegionNameAsString());
        System.out.println(regions.get(0).getRegionId());
        System.out.println(regions.get(0).getStartKey().toString());
        ClusterStatus clusterStatus = admin.getClusterStatus();
        System.out.println("region 大小");
        JSONArray jsonArray = new JSONArray();
        for(ServerName serverName : clusterStatus.getServers()){
            System.out.println("servername:"+serverName.getServerName());
            ServerLoad serverLoad = clusterStatus.getLoad(serverName);
            for(Map.Entry<byte[],RegionLoad> entry: serverLoad.getRegionsLoad().entrySet()){
                String region = Bytes.toString(entry.getKey());
                RegionLoad regionLoad = entry.getValue();
                long storeFileSize = regionLoad.getStorefileSizeMB();

                JSONObject jsonObject = new JSONObject();
                jsonObject.put("tableName",region.split(",")[0]);
                jsonObject.put("serverName",serverName.getServerName().split(",")[0]);
                jsonObject.put("fileSize",storeFileSize+"MB");
                jsonArray.add(jsonObject);
                System.out.println("region:"+region);
                System.out.println("Filesize:"+storeFileSize+"MB");
            }
        }
        System.out.println(jsonArray);

//        Get get = new Get(regions.get(0).getRegionName());
//        Result r=table.get(get);
//        if(r!=null && !r.isEmpty()){
//            for(Cell cell : r.listCells()){
//                //列族名
//                String family = Bytes.toString(cell.getFamilyArray(),cell.getFamilyOffset(),cell.getFamilyLength());
//                //列名
//                String key = Bytes.toString(cell.getQualifierArray(),cell.getQualifierOffset(),cell.getQualifierLength());
//                //列值
//                String value = Bytes.toString(cell.getValueArray(),cell.getValueOffset(),cell.getValueLength());
//                System.out.println(family+" "+key+" "+value);
//
//            }
//        }



//        System.out.println(regionMetrics.get(0).getStoreFileSize().toString());






//
//        for(ServerName serverName: regionServers){
//            List<RegionMetrics> regionMetrics=admin.getRegionMetrics(serverName,TableName.valueOf("kk_eye_new"));
//            System.out.println(serverName.getServerName());
//            for(RegionMetrics region: regionMetrics){
//                System.out.println("size:"+region.getStoreFileSize());
//            }
//        }


//        List<String> Ids = new ArrayList<>();
//        String filename = "E:\\DATA\\青光眼\\id.xlsx";
//        EasyExcel.read(filename, ExcelData.class, new PageReadListener<ExcelData>(dataList ->{
//            for(ExcelData excelData : dataList){
//                Ids.add(excelData.getId());
//            }
//        })).sheet().doRead();
//        Table table = connection.getTable(TableName.valueOf("kk_eye_new"));
//        ArrayList<Put> puts = new ArrayList<>();
//        for (int i=0;i<Ids.size();i++){
//            byte[] jpgImg = image2byte("E:\\DATA\\青光眼\\out\\"+Ids.get(i)+ ".jpg");
//            byte[] tifImg = image2byte("E:\\DATA\\青光眼\\outtif\\"+Ids.get(i)+ ".tif");
//            Put record = new Put(Bytes.toBytes(Ids.get(i)));
//            record.addColumn(Bytes.toBytes("image"),Bytes.toBytes("jpg"),jpgImg);
//            record.addColumn(Bytes.toBytes("image"),Bytes.toBytes("tif"),tifImg);
//            puts.add(record);
//        }
//        System.out.println("开始上传");
//        table.put(puts);
//        table.close();
//        GetImage(connection);
//        connection.close();


    }
    public static byte[] image2byte(String path) throws IOException {
        byte[] data=null;
        FileImageInputStream input = null;
        input = new FileImageInputStream(new File(path));
        ByteArrayOutputStream output = new ByteArrayOutputStream();
        byte[] buf = new byte[1024];
        int numBytesRead = 0;
        while ((numBytesRead = input.read(buf)) != -1){
            output.write(buf, 0, numBytesRead);
        }
        data = output.toByteArray();
        output.close();
        input.close();
        return data;
    }
    public static void byte2image(byte[] data,String path){
        if(data.length<3||path.equals("")) return;
        try{
            FileImageOutputStream imageOutput = new FileImageOutputStream(new File(path));
            imageOutput.write(data, 0, data.length);
            imageOutput.close();
            System.out.println("Make Picture success,Please find image in " + path);
        } catch(Exception ex) {
            System.out.println("Exception: " + ex);
            ex.printStackTrace();
        }
    }

    public static List<String> GetImage(String rowkey,Connection connection) throws IOException, URISyntaxException {

        Table table = connection.getTable(TableName.valueOf("kk_eye_new"));
        Admin admin = connection.getAdmin();

        List<Filter> filters = new ArrayList<>();
        BinaryPrefixComparator binaryComparator = new BinaryPrefixComparator(rowkey.getBytes());
        Filter rowFilter = new RowFilter(CompareFilter.CompareOp.EQUAL, binaryComparator);
        filters.add(rowFilter);
        Filter colFilter = new QualifierFilter(CompareFilter.CompareOp.EQUAL, new SubstringComparator("jpg"));
        filters.add(colFilter);
        FilterList filterList = new FilterList(filters);
        Scan scan= new Scan();
        scan.setFilter(filterList);
        ResultScanner resultScanner = table.getScanner(scan);
        List<String> names=new ArrayList<>();
        for (Result result: resultScanner){
            for(Cell cell : result.listCells()){
                String rowName = Bytes.toString(CellUtil.cloneRow(cell));
                String familyName = Bytes.toString(CellUtil.cloneFamily(cell));
                String qualifierName = Bytes.toString(CellUtil.cloneQualifier(cell));
                byte[] bytes = CellUtil.cloneValue(cell);
                String path = "D:\\hbase_result\\"+rowName+".jpg";
                byte2image(bytes,path);
                System.out.println(rowName+","+qualifierName);
                names.add(rowName);
            }

        }
        return names;


    }
    public static JSONArray tableSize(Connection connection) throws IOException {

        Admin admin = connection.getAdmin();
        ClusterStatus clusterStatus = admin.getClusterStatus();
        System.out.println("region 大小");
        JSONArray jsonArray = new JSONArray();
        Map<String,String> map = new HashMap<>();
        for(ServerName serverName : clusterStatus.getServers()){
            System.out.println("servername:"+serverName.getServerName());
            ServerLoad serverLoad = clusterStatus.getLoad(serverName);
            for(Map.Entry<byte[],RegionLoad> entry: serverLoad.getRegionsLoad().entrySet()){
                String region = Bytes.toString(entry.getKey());
                RegionLoad regionLoad = entry.getValue();
                long storeFileSize = regionLoad.getStorefileSizeMB();
                JSONObject jsonObject = new JSONObject();
                if(region.split(",")[0].equals("kk_eye")  || region.split(",")[0].equals("kk_eye_new") || region.split(",")[0].equals("MimicJPG")){
                    String key =region.split(",")[0]+","+serverName.getServerName().split(",")[0];
                    if (map.containsKey(key)){
                        map.put(key,String.valueOf(Long.parseLong(map.get(key))+storeFileSize));
                    }
                    else{
                        map.put(key,String.valueOf(storeFileSize));
                    }
//                    jsonObject.put("tableName",region.split(",")[0]);
//                    jsonObject.put("serverName",serverName.getServerName().split(",")[0]);
////                jsonObject.put("fileSize",storeFileSize+"MB");
//                    jsonObject.put("fileSize",storeFileSize);
//                    jsonArray.add(jsonObject);
//                    System.out.println("region:"+region);
//                    System.out.println("Filesize:"+storeFileSize+"MB");
                }

            }
        }
        for(Map.Entry<String,String> entry : map.entrySet()){
            JSONObject jsonObject = new JSONObject();
            jsonObject.put("tableName",entry.getKey().split(",")[0]);
            jsonObject.put("serverName",entry.getKey().split(",")[1]);
            jsonObject.put("fileSize",Long.parseLong(entry.getValue()));
            jsonArray.add(jsonObject);
        }

        return jsonArray;


    }

}
