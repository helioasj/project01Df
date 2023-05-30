package br.com.agatron.project001Df.adapters.rest.entities;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Data
@Builder
public class PageDTO {

    private Long page;
    private Long pages;
    private Long perPage;
    private Long total;
    private String sourceid;
    private LocalDate lastupdated;
}
