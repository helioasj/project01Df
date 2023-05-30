package br.com.agatron.project001Df.adapters.rest.inbound;

import br.com.agatron.project001Df.adapters.rest.entities.BancoMundialResponse;
import br.com.agatron.project001Df.usecases.BancoMundialUC;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/bancomundial")
public class BancoMundialResource {

    @Autowired
    private BancoMundialUC bancoMundialUC;

    @GetMapping
    public BancoMundialResponse teste() {

        return bancoMundialUC.findByCountryCode("BRA");

    }
}
