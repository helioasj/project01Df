package br.com.agatron.project001Df.adapters.rest.entities;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class IndicadoresDTO {

    private IndicatorDTO indicator;
    private CountryDTO country;
    private CountryIsoDTO countryiso3code;
}
