package cn.GUITAR.service;


import java.util.List;

import cn.GUITAR.dao.GuitarDaoImpl;
import cn.GUITAR.model.Guitar;

public class GuitarService {
private static GuitarDaoImpl guitarDao=new GuitarDaoImpl();

public static GuitarDaoImpl getGuitarDao() {
	return guitarDao;
}
public static void setGuitarDao(GuitarDaoImpl guitarDao) {
	GuitarService.guitarDao = guitarDao;
}
public  boolean Query(Guitar guitar) {
	// TODO Auto-generated method stub
	return guitarDao.Query(guitar);
}
	public  boolean add(Guitar guitar) {
		// TODO Auto-generated method stub
		return guitarDao.add(guitar);
  }
	public static  List<Guitar> SearchGuitar(String backWood, String builder, String model, double price,
			String serialNumber, String topWood, String type) {
		// TODO Auto-generated method stub
		return guitarDao.GuitarSearch(backWood,builder,model,price,serialNumber,topWood,type);
	}

}
