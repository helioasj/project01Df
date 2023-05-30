package br.com.agatron.project001Df.adapters.rest.entities;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CountryDTO {

    private String id;
    private String value;
}
