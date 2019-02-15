package com.inventory.jpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.inventory.model.BoxModel;
import com.inventory.model.ITotalRusk;
import com.inventory.model.TotalRusk;


@Repository
@SuppressWarnings("unused")
public interface BoxModelRepository extends JpaRepository<BoxModel, Long> {
	
	@Query(value = "select id,total_current_stcok as totalCurrentStcok from inventory.totalrusk",nativeQuery=true)
	public ITotalRusk getTotalRusk();

}
