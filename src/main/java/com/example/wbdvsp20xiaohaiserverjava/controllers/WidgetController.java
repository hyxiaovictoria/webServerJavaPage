package com.example.wbdvsp20xiaohaiserverjava.controllers;

import com.example.wbdvsp20xiaohaiserverjava.service.WidgetService;
import com.example.wbdvsp20xiaohaiserverjava.models.Widget;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.ArrayList;

@RestController
@CrossOrigin(origins = "*")
public class WidgetController {
    WidgetService service = new WidgetService();

    @GetMapping("/widgets")
    public List<Widget> findAllWidgets() {
        return service.findAllWidgets();
    }

    @GetMapping("/widget/{widgetId}")
    public Widget findWidgetById(
            @PathVariable("widgetId") String wid) {
        return service.findWidgetById(wid);
    }

    @GetMapping("/topics/{topicId}/widgets")
    public List<Widget> findWidgetsForTopic(
            @PathVariable("topicId") String tid) {
        return service.findWidgetsForTopic(tid);
    }

    @PostMapping("/widgets")
    public Widget createWidget(
            @RequestBody Widget newWidget) {
        return service.createWidget(newWidget);
    }

    @DeleteMapping("/widgets/{widgetId}")
    public int deleteWidget(
            @PathVariable("widgetId") String wid) {
        return service.deleteWidget(wid);
    }

    @PutMapping("/widgets/{widgetId}")
    public int updateWidget(
            @PathVariable("widgetId") String wid,
            @RequestBody Widget widget) {
        return service.updateWidget(wid, widget);
    }
}
