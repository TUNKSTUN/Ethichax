package com.ethic.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan
@SpringBootApplication
public class EthichaxApplication {

	public static void main(String[] args) {
		SpringApplication.run(EthichaxApplication.class, args);
	}

}
