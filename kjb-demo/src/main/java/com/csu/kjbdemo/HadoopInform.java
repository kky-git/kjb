package com.csu.kjbdemo;

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.FileSystem;
import org.apache.hadoop.hdfs.DistributedFileSystem;
import org.apache.hadoop.hdfs.protocol.DatanodeInfo;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;

public class HadoopInform {
    public static void main(String [] args) throws URISyntaxException, IOException {
        FileSystem fs = FileSystem.get(new URI("hdfs://192.168.31.112:8020"),new Configuration());
        DistributedFileSystem hdfs = (DistributedFileSystem) fs;
        DatanodeInfo[] dataNodeStats = hdfs.getDataNodeStats();
        for (int i=0;i<dataNodeStats.length;i++){
//            System.out.println(dataNodeStats[i].getDfsUsedPercent()+" "+dataNodeStats[i].getHostName());
            System.out.println(dataNodeStats[i].getDatanodeReport());
        }

    }
}
