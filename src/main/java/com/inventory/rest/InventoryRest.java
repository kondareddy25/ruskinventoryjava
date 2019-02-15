package com.inventory.rest;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.inventory.model.BoxModel;
import com.inventory.model.ITotalRusk;
import com.inventory.model.Inventory;
import com.inventory.model.Supplier;
import com.inventory.model.SupplierInventory;
import com.inventory.model.TotalRusk;
import com.inventory.rest.util.HeaderUtil;
import com.inventory.service.InventoryService;



@RestController
@RequestMapping("/inventory")
@CrossOrigin
public class InventoryRest {

	
private static final String ENTITY_NAME = "inventory";

@Autowired
private InventoryService inventoryService;
	
@PostMapping("/create")
public ResponseEntity<Inventory> createInventory(@Valid @RequestBody Inventory inventory) throws URISyntaxException {
	System.out.println("hai welcome to rest controller");
	Inventory result = inventoryService.createInventory(inventory);
	return ResponseEntity.created(new URI("/inventory/inventorys/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
}

@GetMapping("/getAllModelTypes")
public List<BoxModel> getAllModelTypes(){
	return inventoryService.getAllModels();
}

@PostMapping("/saveSupplier")
public ResponseEntity<Supplier> saveSupplierInventory(@Valid @RequestBody Supplier supplier) throws URISyntaxException {
	System.out.println("hai welcome to rest controller");
	Supplier result = inventoryService.saveSupplier(supplier);
	return ResponseEntity.created(new URI("/inventory/inventorys/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert("supplier", result.getId().toString()))
            .body(result);
}

@PostMapping("/saveSupplierInventory")
public ResponseEntity<SupplierInventory> saveSupplierInventory(@Valid @RequestBody SupplierInventory supplierInventory) throws URISyntaxException {
	System.out.println("hai welcome to rest controller");
	SupplierInventory result = inventoryService.saveSupplierInventory(supplierInventory);
	return ResponseEntity.created(new URI("/inventory/inventorys/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert("supplier", result.getId().toString()))
            .body(result);
}

@GetMapping("/getAllSuppliers")
public List<Supplier> getAllSuppliers(){
	return inventoryService.getAllSuppliers();
}

@GetMapping("/getTotalRusk")
public TotalRusk getTotalRusk(){
	ITotalRusk totalRusk = inventoryService.getTotalCurrentStock();
	return new TotalRusk(totalRusk.getId(),totalRusk.getTotalCurrentStcok());
}

@GetMapping("/getAllInventory")
public List<Inventory> getAllInventory(){
	return inventoryService.getAllInventory();
}
	
}
