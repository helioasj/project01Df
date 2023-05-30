package br.com.agatron.project001Df.adapters.rest.entities;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class IndicatorDTO {

    private String id;
    private String value;
}
