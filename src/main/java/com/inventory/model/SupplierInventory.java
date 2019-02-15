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
@Table(name = "SupplierInventory")
public class SupplierInventory implements Serializable {

	/**
		 * 
		 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@NotNull
	@Column(name = "arrivalDate", nullable = false)
	private String arrivalDate;
	@NotNull
	@Column(name = "typeOfBox", nullable = false)
	private String typeOfBox;
	@NotNull
	@Column(name = "noofBoxes", nullable = false)
	private String noofBoxes;
	@NotNull
	@Column(name = "totalweight", nullable = false)
	private String totalweight;
	
	@NotNull
	@Column(name = "totalAmount", nullable = false)
	private String totalAmount;
	
	public String getTotalAmount() {
		return totalAmount;
	}

	public void setTotalAmount(String totalAmount) {
		this.totalAmount = totalAmount;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getArrivalDate() {
		return arrivalDate;
	}

	public void setArrivalDate(String arrivalDate) {
		this.arrivalDate = arrivalDate;
	}

	public String getTypeOfBox() {
		return typeOfBox;
	}

	public void setTypeOfBox(String typeOfBox) {
		this.typeOfBox = typeOfBox;
	}

	public String getNoofBoxes() {
		return noofBoxes;
	}

	public void setNoofBoxes(String noofBoxes) {
		this.noofBoxes = noofBoxes;
	}

	public String getTotalweight() {
		return totalweight;
	}

	public void setTotalweight(String totalweight) {
		this.totalweight = totalweight;
	}

	public SupplierInventory() {

	}

	@Override
	public String toString() {
		return "Inventory [id=" + id + ", arrivalDate=" + arrivalDate + ", typeOfBox=" + typeOfBox + ", noofBoxes="
				+ noofBoxes + ", totalweight=" + totalweight + ", totalAmount=" + totalAmount + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((arrivalDate == null) ? 0 : arrivalDate.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((noofBoxes == null) ? 0 : noofBoxes.hashCode());
		result = prime * result + ((totalAmount == null) ? 0 : totalAmount.hashCode());
		result = prime * result + ((totalweight == null) ? 0 : totalweight.hashCode());
		result = prime * result + ((typeOfBox == null) ? 0 : typeOfBox.hashCode());
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
		SupplierInventory other = (SupplierInventory) obj;
		if (arrivalDate == null) {
			if (other.arrivalDate != null)
				return false;
		} else if (!arrivalDate.equals(other.arrivalDate))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (noofBoxes == null) {
			if (other.noofBoxes != null)
				return false;
		} else if (!noofBoxes.equals(other.noofBoxes))
			return false;
		if (totalAmount == null) {
			if (other.totalAmount != null)
				return false;
		} else if (!totalAmount.equals(other.totalAmount))
			return false;
		if (totalweight == null) {
			if (other.totalweight != null)
				return false;
		} else if (!totalweight.equals(other.totalweight))
			return false;
		if (typeOfBox == null) {
			if (other.typeOfBox != null)
				return false;
		} else if (!typeOfBox.equals(other.typeOfBox))
			return false;
		return true;
	}

}
