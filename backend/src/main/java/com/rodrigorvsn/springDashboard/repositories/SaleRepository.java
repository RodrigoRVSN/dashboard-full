package com.rodrigorvsn.springDashboard.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.rodrigorvsn.springDashboard.dto.SaleSuccessDTO;
import com.rodrigorvsn.springDashboard.dto.SaleSumDTO;
import com.rodrigorvsn.springDashboard.entities.Sale;

public interface SaleRepository  extends JpaRepository <Sale, Long>{
	
	@Query("SELECT new com.rodrigorvsn.springDashboard.dto.SaleSumDTO(obj.seller, SUM(obj.amount)) "
			+ "FROM Sale AS obj GROUP BY obj.seller")
	List<SaleSumDTO> amountGroupedBySeller();
	

	@Query("SELECT new com.rodrigorvsn.springDashboard.dto.SaleSuccessDTO(obj.seller, SUM(obj.visited), SUM(obj.deals)) "
			+ "FROM Sale AS obj GROUP BY obj.seller")
	List<SaleSuccessDTO> successGroupedBySeller();
}
