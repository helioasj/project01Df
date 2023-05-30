package br.com.agatron.project001Df.adapters.rest.entities;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/teste")
public class TestResources {

    @GetMapping
    public String teste() {

        return "No ar";

    }

}
