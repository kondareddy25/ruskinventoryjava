package com.inventory.jpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.inventory.model.TotalRusk;

@Repository
@SuppressWarnings("unused")
public interface TotalStockRepository extends JpaRepository<TotalRusk, Long>{

}
