package com.inventory.jpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.inventory.model.Supplier;

@Repository
@SuppressWarnings("unused")
public interface SupplierRepository extends JpaRepository<Supplier, Long> {

}
