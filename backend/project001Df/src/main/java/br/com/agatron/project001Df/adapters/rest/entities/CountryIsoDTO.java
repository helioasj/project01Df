package br.com.agatron.project001Df.adapters.rest.entities;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CountryIsoDTO {

    private String countryiso3code;
    private String date;
    private Long value;
    private String unit;
    private String obs_status;
    private Double decimal;
}
