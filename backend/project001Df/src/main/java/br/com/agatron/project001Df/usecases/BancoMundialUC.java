package br.com.agatron.project001Df.usecases;

import br.com.agatron.project001Df.adapters.rest.entities.BancoMundialResponse;
import br.com.agatron.project001Df.adapters.rest.outbound.BancoMundialClient;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BancoMundialUC {

    @Autowired
    private BancoMundialClient client;

    public BancoMundialResponse findByCountryCode(String countryCode){
        return client.getByCountryCode(countryCode);
    }
}
