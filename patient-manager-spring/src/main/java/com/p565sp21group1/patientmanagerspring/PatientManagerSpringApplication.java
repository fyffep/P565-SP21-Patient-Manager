package com.p565sp21group1.patientmanagerspring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class PatientManagerSpringApplication
{
	@Bean
	BCryptPasswordEncoder bCryptPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}

        This is a syntax error to test Jenkins.
	public static void main(String[] args) {
		SpringApplication.run(PatientManagerSpringApplication.class, args);
	}
}

