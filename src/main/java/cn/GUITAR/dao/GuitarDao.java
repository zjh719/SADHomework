package cn.GUITAR.dao;

import java.util.ArrayList;
import java.util.List;

import cn.GUITAR.model.Guitar;

public interface GuitarDao {
	public boolean add(Guitar guitar);
	public boolean update(Guitar oldGuitar,Guitar newGuitar);
	public boolean delete(Guitar guitar);
	public List<Guitar> getAll();
	public Guitar getById(int id);
	public boolean Query(Guitar guitar);
}
