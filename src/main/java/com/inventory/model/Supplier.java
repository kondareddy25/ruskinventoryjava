package com.inventory.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "Supplier")
public class Supplier implements Serializable {

	/**
	 * 
	 */
private static final long serialVersionUID = 1L;

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;
@NotNull
@Column(name = "supplierName", nullable = false)
private String supplierName;

@NotNull
@Column(name = "supplierAddress", nullable = false)
private String supplierAddress;

public Long getId() {
	return id;
}

public void setId(Long id) {
	this.id = id;
}

public String getSupplierName() {
	return supplierName;
}

public void setSupplierName(String supplierName) {
	this.supplierName = supplierName;
}

public String getSupplierAddress() {
	return supplierAddress;
}

public void setSupplierAddress(String supplierAddress) {
	this.supplierAddress = supplierAddress;
}

@Override
public String toString() {
	return "Supplier [id=" + id + ", supplierName=" + supplierName + ", supplierAddress=" + supplierAddress + "]";
}

@Override
public int hashCode() {
	final int prime = 31;
	int result = 1;
	result = prime * result + ((id == null) ? 0 : id.hashCode());
	result = prime * result + ((supplierAddress == null) ? 0 : supplierAddress.hashCode());
	result = prime * result + ((supplierName == null) ? 0 : supplierName.hashCode());
	return result;
}

@Override
public boolean equals(Object obj) {
	if (this == obj)
		return true;
	if (obj == null)
		return false;
	if (getClass() != obj.getClass())
		return false;
	Supplier other = (Supplier) obj;
	if (id == null) {
		if (other.id != null)
			return false;
	} else if (!id.equals(other.id))
		return false;
	if (supplierAddress == null) {
		if (other.supplierAddress != null)
			return false;
	} else if (!supplierAddress.equals(other.supplierAddress))
		return false;
	if (supplierName == null) {
		if (other.supplierName != null)
			return false;
	} else if (!supplierName.equals(other.supplierName))
		return false;
	return true;
}

}
