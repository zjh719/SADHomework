package cn.GUITAR.action;

import java.util.List;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import cn.GUITAR.model.Guitar;
import cn.GUITAR.service.GuitarService;

@SuppressWarnings("serial")
public class GuitarAction extends ActionSupport{
	 private String serialNumber, builder, model, type, backWood, topWood;
	  private double price;
	  private GuitarService guitarService;
	public String getSerialNumber() {
		return serialNumber;
	}
	public void setSerialNumber(String serialNumber) {
		this.serialNumber = serialNumber;
	}
	public String getBuilder() {
		return builder;
	}
	public void setBuilder(String builder) {
		this.builder = builder;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getBackWood() {
		return backWood;
	}
	public void setBackWood(String backWood) {
		this.backWood = backWood;
	}
	public String getTopWood() {
		return topWood;
	}
	public void setTopWood(String topWood) {
		this.topWood = topWood;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public GuitarService getGuitarService() {
		return guitarService;
	}
	public void setGuitarService(GuitarService guitarService) {
		this.guitarService = guitarService;
	}
//	ÃÌº”
	public String register() throws Exception{
		Guitar guitar =new Guitar();
		guitar.setBackWood(backWood);
		guitar.setBuilder(builder);
		guitar.setModel(model);
		guitar.setPrice(price);
		guitar.setSerialNumber(serialNumber);
		guitar.setTopWood(topWood);
		guitar.setType(type);
		GuitarService guitarService=new GuitarService();
		guitarService.add(guitar);
		return SUCCESS;		
	} 
	//≤È’“
	public String SearchThing() throws Exception{
		List<Guitar> list=GuitarService.SearchGuitar(backWood,builder,model,price,serialNumber,topWood,type);
		ActionContext.getContext().getSession().put("GuitarList", list);
		return SUCCESS;
	}
	
}
