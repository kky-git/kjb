package com.csu.kjbdemo;

import com.alibaba.fastjson2.JSONArray;
import com.alibaba.fastjson2.JSONObject;
import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.FileSystem;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.hbase.HBaseConfiguration;
import org.apache.hadoop.hbase.client.Connection;
import org.apache.hadoop.hbase.client.ConnectionFactory;
import org.apache.hadoop.hdfs.DistributedFileSystem;
import org.apache.hadoop.hdfs.protocol.DatanodeInfo;
import org.apache.hadoop.yarn.webapp.hamlet.Hamlet;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@SpringBootApplication
@RestController
public class KjbDemoApplication {
	static Connection connection;

	public static void main(String[] args) throws IOException, URISyntaxException {
		Configuration conf = HBaseConfiguration.create();
		conf.addResource(new Path(ClassLoader.getSystemResource("hbase-site.xml").toURI()));
		conf.addResource(new Path(ClassLoader.getSystemResource("core-site.xml").toURI()));
		connection= ConnectionFactory.createConnection(conf);
		SpringApplication.run(KjbDemoApplication.class, args);
	}
	@GetMapping("/hello")
	@CrossOrigin("http://localhost:3000")
	public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
		return String.format("Hello %s!", name);
	}

	@CrossOrigin("http://localhost:3000")
	@PostMapping("/queryCard")
	public JSONArray queryCard(@RequestBody String request) throws IOException, URISyntaxException {
//		request=request.substring(1,request.length()-1);
		System.out.println(request);
		System.out.println("length:"+request.length());
		String rowKey="";

		for(int i=1;i<request.length();i++){
			rowKey+=request.substring(i,i+1)+"_";
		}
		System.out.println(rowKey);
		List<String> names = Hbase.GetImage(rowKey,connection);

		JSONArray result=new JSONArray();
		for (int i=0;i<names.size();i++){
			JSONObject jsonObject = new JSONObject();
			jsonObject.put("id", names.get(i));
			jsonObject.put("url","http://localhost:8080/image/"+names.get(i)+".jpg");
			jsonObject.put("title", "这是图片的标题");
			jsonObject.put("desc", "这是图片相关的诊断描述的具体内容");
			result.add(jsonObject);
		}

		return result;

	}
	@PostMapping("/nodeInfo")
	public JSONArray nodeInfo() throws URISyntaxException, IOException {
		FileSystem fs = FileSystem.get(new URI("hdfs://192.168.31.112:8020"),new Configuration());
		DistributedFileSystem hdfs = (DistributedFileSystem) fs;
		DatanodeInfo[] dataNodeStats = hdfs.getDataNodeStats();
		JSONArray result = new JSONArray();
		for (int i=0;i<dataNodeStats.length;i++){
			JSONObject jsonObject = new JSONObject();
			jsonObject.put("name",dataNodeStats[i].getHostName());
			jsonObject.put("usedPercent", dataNodeStats[i].getDfsUsedPercent()/100);
			System.out.println(dataNodeStats[i].getDfsUsedPercent()+" "+dataNodeStats[i].getHostName());
//            System.out.println(dataNodeStats[i].getDatanodeReport());
			result.add(jsonObject);
		}
		return result;
	}
	@PostMapping("tableDisk")
	public JSONArray tableDisk() throws IOException {
		JSONArray jsonArray=Hbase.tableSize(connection);
		return jsonArray;
	}



}
