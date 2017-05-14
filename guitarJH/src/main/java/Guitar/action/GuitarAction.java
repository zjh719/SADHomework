package Guitar.action;

import java.util.LinkedList;
import java.util.List;

import org.apache.struts2.components.If;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import Guitar.dao.GuitarDaoImpl;
import Guitar.entity.Guitar;
import Guitar.entity.GuitarSpec;
import Guitar.service.GuitarService;



@SuppressWarnings("serial")
public class GuitarAction extends ActionSupport {
	  
	private String  builder, model, type, backWood, topWood;
	  
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
	@SuppressWarnings({ "rawtypes", "unchecked" })
	List<Guitar> list=new LinkedList();
	public String find() throws Exception{
		
		 GuitarService guitarService=new  GuitarService();	
		 GuitarSpec spec =new GuitarSpec();
		 spec.setBuilder(builder);
		 spec.setTopWood(topWood);
		 spec.setBackWood(backWood);
		 spec.setModel(model);
		 spec.setType(type);
		 list=guitarService.search(spec);
		 ActionContext.getContext().getSession().put("list1", list);
		 return SUCCESS;
      }
		
	}
