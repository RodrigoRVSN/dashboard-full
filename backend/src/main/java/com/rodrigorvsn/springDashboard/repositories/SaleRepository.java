package com.rodrigorvsn.springDashboard.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rodrigorvsn.springDashboard.entities.Sale;

public interface SaleRepository  extends JpaRepository <Sale, Long>{

}
