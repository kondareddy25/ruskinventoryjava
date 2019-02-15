package com.inventory.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "totalrusk")
public class TotalRusk {
	
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;

public TotalRusk() {}

public TotalRusk(Long id, Long totalCurrentStcok) {
	super();
	this.id = id;
	this.totalCurrentStcok = totalCurrentStcok;
}

@Column(name = "totalCurrentStcok")
private Long totalCurrentStcok;

public Long getId() {
	return id;
}

@Override
public int hashCode() {
	final int prime = 31;
	int result = 1;
	result = prime * result + ((id == null) ? 0 : id.hashCode());
	result = prime * result + ((totalCurrentStcok == null) ? 0 : totalCurrentStcok.hashCode());
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
	TotalRusk other = (TotalRusk) obj;
	if (id == null) {
		if (other.id != null)
			return false;
	} else if (!id.equals(other.id))
		return false;
	if (totalCurrentStcok == null) {
		if (other.totalCurrentStcok != null)
			return false;
	} else if (!totalCurrentStcok.equals(other.totalCurrentStcok))
		return false;
	return true;
}

@Override
public String toString() {
	return "TotalRusk [id=" + id + ", totalCurrentStcok=" + totalCurrentStcok + "]";
}

public void setId(Long id) {
	this.id = id;
}

public Long getTotalCurrentStcok() {
	return totalCurrentStcok;
}

public void setTotalCurrentStcok(Long totalCurrentStcok) {
	this.totalCurrentStcok = totalCurrentStcok;
}



}
