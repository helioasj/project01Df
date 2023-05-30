package br.com.agatron.project001Df.adapters.rest.entities;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.domain.Page;

import java.util.List;

@Data
@Builder
public class BancoMundialDTO {

    private PageDTO page;
    private List<IndicadoresDTO> indicadoresDTOList;
}
