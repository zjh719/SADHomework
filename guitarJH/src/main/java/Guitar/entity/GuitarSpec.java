package Guitar.entity;

public class GuitarSpec {
	 
	  private String builder; 
	  private String model;
	  private String type;
	
	  private String backWood;
	  private String topWood;

	  public GuitarSpec(){};
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
	 public boolean matches(GuitarSpec otherSpec) {
	        if(otherSpec.builder.length() > 0){
	            if(!builder.toLowerCase().equals(otherSpec.builder.toLowerCase()))
	                return false;
	        }
	            
	        if(otherSpec.model.length() > 0){
	            if(!model.toLowerCase().equals(otherSpec.model.toLowerCase()))
	            return false;
	        }
	        
	        if(otherSpec.type.length() > 0){
	            if(!type.toLowerCase().equals(otherSpec.type.toLowerCase()))
	            return false;
	        }
	            
	        if(otherSpec.backWood.length() > 0){
	            if(!backWood.toLowerCase().equals(otherSpec.backWood.toLowerCase()))
	            return false;
	        }
	            
	        if(otherSpec.topWood.length() > 0){
	            if(!topWood.toLowerCase().equals(otherSpec.topWood.toLowerCase()))
	                return false;
	        }
	            
	        return true;
	    }
	}

