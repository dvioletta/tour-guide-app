package com.codeclan.TourGuideApp.models;

import com.codeclan.TourGuideApp.enums.AccessibilityType;
import com.codeclan.TourGuideApp.enums.TimeOfDayType;

import javax.persistence.*;
import java.util.ArrayList;

@Entity
@Table(name = "attractions")
public class Attraction {

    @Id
    @Column(name="id")
    @GeneratedValue
    private Long id;

    @Column
    private String name;

    @Column
    private String location;

    @Column
    private String description;

    @Column
    private double fee;

    @Column
    private String pic;

    @Column
    private ArrayList<AccessibilityType> accessibility;

    @Column
    private String category;

    @Column
    private TimeOfDayType openingTime;

    @OneToOne(mappedBy = "attraction")
    @JoinColumn(name = "booking_id", nullable = true)
    private Booking booking;


    public Attraction(String name, String location, String description, double fee, String pic, String category, TimeOfDayType openingTime){
        this.name = name;
        this.location = location;
        this.description = description;
        this.fee = fee;
        this.pic = pic;
        this.accessibility = new ArrayList<>();
        this.category = category;
        this.openingTime = openingTime;

    }

    public Attraction(){}


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getFee() {
        return fee;
    }

    public void setFee(double fee) {
        this.fee = fee;
    }

    public String getPic() {
        return pic;
    }

    public void setPic(String pic) {
        this.pic = pic;
    }

    public ArrayList<AccessibilityType> getAccessibility() {
        return accessibility;
    }

    public void addManyAccessibility(ArrayList<AccessibilityType> accessibilityList) {
        this.accessibility = accessibilityList;
    }

    public void addAccessibility(AccessibilityType accessibility){
        this.accessibility.add(accessibility);
    }

    public boolean removeAccessibility(AccessibilityType accessibility){
        return this.accessibility.remove(accessibility);
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public
    TimeOfDayType getOpeningTime() {
        return openingTime;
    }

    public
    void setOpeningTime(TimeOfDayType openingTime) {
        this.openingTime = openingTime;
    }
}
