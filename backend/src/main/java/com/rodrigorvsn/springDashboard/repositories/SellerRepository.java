package com.rodrigorvsn.springDashboard.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rodrigorvsn.springDashboard.entities.Seller;

public interface SellerRepository  extends JpaRepository <Seller, Long>{

}
