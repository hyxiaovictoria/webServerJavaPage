package com.example.wbdvsp20xiaohaiserverjava.controllers;

import com.example.wbdvsp20xiaohaiserverjava.service.WidgetService;
import com.example.wbdvsp20xiaohaiserverjava.models.Widget;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

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
    public Widget findWidgetById(@PathVariable("widgetId") String wid) {
        return service.findWidgetById(wid);
    }
}
