package br.com.agatron.project001Df;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class Project001DfApplication {

	public static void main(String[] args) {
		SpringApplication.run(Project001DfApplication.class, args);
	}

}
