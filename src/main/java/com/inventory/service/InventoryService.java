package com.inventory.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.inventory.jpa.repository.BoxModelRepository;
import com.inventory.jpa.repository.InventoryRepository;
import com.inventory.jpa.repository.SupplierInventoryRepository;
import com.inventory.jpa.repository.SupplierRepository;
import com.inventory.jpa.repository.TotalStockRepository;
import com.inventory.model.BoxModel;
import com.inventory.model.ITotalRusk;
import com.inventory.model.Inventory;
import com.inventory.model.Supplier;
import com.inventory.model.SupplierInventory;
import com.inventory.model.TotalRusk;

@Service
@Transactional
public class InventoryService {

	@Autowired
	InventoryRepository inventoryRepository;

	@Autowired
	BoxModelRepository boxModelRepository;

	@Autowired
	SupplierRepository supplierRepository;

	@Autowired
	TotalStockRepository totalStockRepository;

	@Autowired
	SupplierInventoryRepository supplierInventoryRepository;

	public Inventory createInventory(Inventory inventory) {
		Long totalWeight = Long.parseLong(inventory.getTotalweight());
		ITotalRusk totalRusk = boxModelRepository.getTotalRusk();
		TotalRusk totalRuskResult = saveTotalStock(new TotalRusk(1L, totalWeight + (totalRusk!=null ? totalRusk.getTotalCurrentStcok() : 0L)));
		if (totalRuskResult != null) {
			return inventoryRepository.save(inventory);
		} else {
			return new Inventory();
		}

	}

	public List<BoxModel> getAllModels() {
		return boxModelRepository.findAll();
	}

	public Supplier saveTotalStock(Supplier supplier) {
		return supplierRepository.save(supplier);
	}

	public List<Supplier> getAllSuppliers() {
		return supplierRepository.findAll();
	}

	public ITotalRusk getTotalCurrentStock() {
		return boxModelRepository.getTotalRusk();

	}

	public Supplier saveSupplier(Supplier supplier) {
		return supplierRepository.save(supplier);
	}

	public TotalRusk saveTotalStock(TotalRusk totalRusk) {
		return totalStockRepository.save(totalRusk);
	}

	public List<Inventory> getAllInventory() {
		return inventoryRepository.findByOrderByArrivalDateDesc();
	}

	public SupplierInventory saveSupplierInventory(SupplierInventory supplierInventory) {
		Long totalWeight = Long.parseLong(supplierInventory.getTotalweight());
		ITotalRusk totalRusk = boxModelRepository.getTotalRusk();
		TotalRusk totalRuskResult = saveTotalStock(new TotalRusk(1L, (totalRusk!=null ? totalRusk.getTotalCurrentStcok() : 0L) - totalWeight ));
		if(totalRuskResult!=null) {
			return supplierInventoryRepository.save(supplierInventory);
		} else {
			return new SupplierInventory();
		}
		
	}

}
