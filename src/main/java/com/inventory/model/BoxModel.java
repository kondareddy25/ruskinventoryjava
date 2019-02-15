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
@Table(name="BoxModel")
public class BoxModel implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@NotNull
	@Column(name = "boxQuantity", nullable = false)
	private String boxQuantity;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getBoxQuantity() {
		return boxQuantity;
	}
	public void setBoxQuantity(String boxQuantity) {
		this.boxQuantity = boxQuantity;
	}
	@Override
	public String toString() {
		return "BoxModel [id=" + id + ", boxQuantity=" + boxQuantity + "]";
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((boxQuantity == null) ? 0 : boxQuantity.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
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
		BoxModel other = (BoxModel) obj;
		if (boxQuantity == null) {
			if (other.boxQuantity != null)
				return false;
		} else if (!boxQuantity.equals(other.boxQuantity))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
	
	

}
