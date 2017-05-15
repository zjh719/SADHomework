import static org.junit.Assert.*;

import java.util.LinkedList;
import java.util.List;

import org.junit.Test;

import com.opensymphony.xwork2.ActionContext;

import Guitar.entity.Guitar;
import Guitar.entity.GuitarSpec;
import Guitar.service.GuitarService;

public class findTest {
	private Double price;
	 private String builder; 
	  private String model;
	  private String type;
	
	  private String backWood;
	  private String topWood;
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
	@Test
	public void test() {
		List<Guitar> list=new LinkedList();
		 GuitarService guitarService=new  GuitarService();	
		 GuitarSpec spec =new GuitarSpec();
		 spec.setBuilder("");
		 spec.setTopWood("");
		 spec.setBackWood("Alder");
		 spec.setModel("");
		 spec.setType("electric");
		 list=guitarService.search(spec);
		 System.out.println(list.size());
	}
}
