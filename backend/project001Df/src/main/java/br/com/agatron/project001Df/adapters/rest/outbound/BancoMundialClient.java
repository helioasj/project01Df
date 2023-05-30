package br.com.agatron.project001Df.adapters.rest.outbound;

import br.com.agatron.project001Df.adapters.rest.entities.BancoMundialResponse;
import io.github.resilience4j.retry.annotation.Retry;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Retry(name = "bancomundial")
@FeignClient(value = "bancoMundialClient", url = "${bancomundial.basepath}", path="country")
public interface BancoMundialClient {


    @GetMapping("/{countryCode}/indicator/SI.POV.DDAY?format=json")
    BancoMundialResponse getByCountryCode(@PathVariable String countryCode);
}
