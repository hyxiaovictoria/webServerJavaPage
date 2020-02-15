package com.example.wbdvsp20xiaohaiserverjava.service;

import java.util.List;
import java.util.ArrayList;
import java.util.stream.Collectors;

import com.example.wbdvsp20xiaohaiserverjava.models.Widget;
import com.example.wbdvsp20xiaohaiserverjava.service.WidgetService;


public class WidgetService {
    List<Widget> listWidgets = new ArrayList<>();

    public WidgetService() {
        Widget w1 = new Widget("123", "WA", "HEADING");
        Widget w2 = new Widget("234", "WB", "PARAGRAPH");
        Widget w3 = new Widget("345", "WC", "HEADING");
        Widget w4 = new Widget("456", "WD", "PARAGRAPH");
        Widget w5 = new Widget("567", "WE", "HEADING");

        w1.setTopicId("111");
        w2.setTopicId("111");

        w3.setTopicId("222");
        w4.setTopicId("222");
        w5.setTopicId("222");

        listWidgets.add(w1);
        listWidgets.add(w2);
        listWidgets.add(w3);
        listWidgets.add(w4);
        listWidgets.add(w5);
    }

    public Widget createWidget(Widget widget) {
        listWidgets.add(widget);
        return widget;
    }

    public Widget findWidgetById(String wid) {
        for (Widget widget : listWidgets) {
            if (widget.getId().equals(wid)) {
                return widget;
            }
        }

        return null;
    }

    public List<Widget> findAllWidgets() {
        return listWidgets;
    }

    public List<Widget> findWidgetsForTopic(String topicId) {
        List<Widget> results = new ArrayList<>();
        for (Widget widget : listWidgets) {
            if (widget.getTopicId().equals(topicId)) {
                results.add(widget);
            }
        }

        return results;
    }

    public int deleteWidget(String wid) {
        listWidgets = listWidgets.stream()
                .filter(w -> !w.getId().equals(wid)).collect(Collectors.toList());
        return 1;
    }

    public int updateWidget(String wid, Widget updatedWidget) {
        for (int i = 0; i < listWidgets.size(); i++) {
            if (listWidgets.get(i).getId().equals(wid)) {
                listWidgets.set(i, updatedWidget);
                return 1;
            }
        }

        return 0;
    }
}