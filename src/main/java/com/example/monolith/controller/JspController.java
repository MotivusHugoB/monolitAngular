package com.example.monolith.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class JspController {

    @GetMapping("/jsp/hello")
    public String helloJsp() {
        return "hello";
    }
}
