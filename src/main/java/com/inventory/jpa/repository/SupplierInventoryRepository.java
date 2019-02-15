package com.inventory.jpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.inventory.model.SupplierInventory;

@Repository
@SuppressWarnings("unused")
public interface SupplierInventoryRepository extends JpaRepository<SupplierInventory, Long>  {

}
