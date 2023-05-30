package br.com.agatron.project001Df.adapters.rest.entities;

import com.fasterxml.jackson.annotation.JsonCreator;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.domain.Page;

import java.util.List;

@Data
@Builder
public class BancoMundialResponse {

    private List<BancoMundialDTO> bancoMundialDTOList;

}
