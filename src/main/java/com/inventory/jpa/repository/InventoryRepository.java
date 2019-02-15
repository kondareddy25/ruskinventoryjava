package com.inventory.jpa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.inventory.model.Inventory;

@Repository
@SuppressWarnings("unused")
public interface InventoryRepository extends JpaRepository<Inventory, Long> {
	
	public List<Inventory> findByOrderByArrivalDateDesc();
}
