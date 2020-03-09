package com.example.wbdvsp20xiaohaiserverjava.models;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Widget {
    @Id
    private String id;
    private String title;
    private String type;
    private String topicId;
    private int size = 1;
    
    public Widget() {
    }

    public Widget(String id, String title, String type) {
        this.id = id;
        this.title = title;
        this.type = type;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getTopicId() {
        return topicId;
    }

    public void setTopicId(String topicId) {
        this.topicId = topicId;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }
}