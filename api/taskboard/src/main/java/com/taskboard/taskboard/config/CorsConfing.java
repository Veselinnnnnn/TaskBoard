package com.taskboard.taskboard.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfing {

    @Value("${allowed.origin}")
    private String allowedOrigin;

    //  Configuration which allows front end to be connected successfully to api without Cross restriction
    @Bean
    public WebMvcConfigurer getCorsConfiguration(){
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins(allowedOrigin)
                        .allowedMethods("GET","POST","PUT","PATCH","DELETE")
                        .allowedHeaders("*");
            }
        };
    }
}
