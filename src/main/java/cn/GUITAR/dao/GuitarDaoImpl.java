
package cn.GUITAR.dao;


import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import cn.GUITAR.dbutil.DbUtil;
//import cn.GUITAR.dbutil.DbUtil;
import cn.GUITAR.model.Guitar;

public class GuitarDaoImpl implements GuitarDao {

	@Override
	public boolean add(Guitar guitar) {
		// TODO Auto-generated method stub
		return DbUtil.executeUpdate("insert into guitar values(?,?,?,?,?,?,?)",new Object[]{guitar.getSerialNumber(),guitar.getPrice(),guitar.getBuilder(),guitar.getModel(),guitar.getType(),guitar.getBackWood(),guitar.getTopWood()});
	}
	@Override
	public boolean update(Guitar oldGuitar, Guitar newGuitar) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean delete(Guitar guitar) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public List<Guitar> getAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Guitar getById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean Query(Guitar guitar) {
		// TODO Auto-generated method stub
		return false;
	}
	public List<Guitar> GuitarSearch(String backWood, String builder, String model, double price, String serialNumber,
			String topWood, String type) {
		// TODO Auto-generated method stub
	 String other = "select * from guitar where 1 = 1 ";
		if(type.length() > 0){
			other+=String.format("and type='"+type+"'");
		}
		if(backWood.length() > 0){
			other+=String.format("and backWood='"+backWood+"'");
		}
		if(model.length() > 0){
			other+=String.format("and model='"+model+"'");
		}
//		if(price!=0){
//			other+=String.format("and price='"+price+"'");
//	   }
		if(serialNumber.length() > 0){
			other+=String.format("and serialNumber='"+serialNumber+"'");
	   }	
		if(topWood.length() > 0){
			other+=String.format("and topWood='"+topWood+"'");
       }	
	    if(type.length() > 0){
	    	other+=String.format("and type='"+type+"'");
       }
	    ResultSet rs=DbUtil.executeQuery(other,new Object[]{});
	    List<Guitar> guitarList=new ArrayList<Guitar>();
	    Guitar guitar=null;
	    try{
		while(rs.next()){
			guitar=new Guitar();
			guitar.setSerialNumber(rs.getString(1));
			guitar.setPrice(rs.getDouble(2));
			guitar.setBuilder(rs.getString(3));
			guitar.setModel(rs.getString(4));
			guitar.setType(rs.getString(5));
			guitar.setBackWood(rs.getString(6));
			guitar.setTopWood(rs.getString(7));
			guitarList.add(guitar);
		}
	}catch(SQLException e){
		e.printStackTrace();
	}
	return guitarList;
	}
	
}
