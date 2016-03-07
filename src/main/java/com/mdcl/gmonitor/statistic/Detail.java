//package com.mdcl.gmonitor.statistic;
//
//import java.time.ZonedDateTime;
//
//import javax.persistence.*;
//
//import java.time.Instant;
//
//import com.fasterxml.jackson.annotation.JsonIgnore;
//
//@SuppressWarnings("serial")
//@Entity
//@Table(name = "detail")
//public class Detail implements java.io.Serializable {
//    
//	@Id
//	@GeneratedValue
//	private Long id;
//
//	@Column
//    private String itemName;
//
//	@Column
//    private String itemValue;
//
//	@Column
//    private String itemType;
//
//	@Column
//    private DateTime scanTime;
//
//	@Column
//    private Long clusterId;
//
//    protected Detail() {
//
//	}
//	
//	public Detail(String itemName, 
//                  String itemValue, 
//                  String itemType,
//                  DateTime scanTime,
//                  Long clusterId) {
//		this.itemName = itemName;
//		this.itemValue = itemValue;
//		this.itemType = itemType;
//		this.scanTime = scanTime;
//		this.clusterId = clusterId;
//	}
//
//    
//
//}
