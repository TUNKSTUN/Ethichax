package com.ethic.backend.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

    @Configuration
    public class MvcConfig implements WebMvcConfigurer {
        public void addViewControllers(ViewControllerRegistry registry) {
            registry.addViewController("/").setViewName("forward:/index.html");
        }

        @Override
        public void addResourceHandlers(ResourceHandlerRegistry registry) {
            registry.addResourceHandler("/**")
                    .addResourceLocations("classpath:/static/")
                    .setCachePeriod(0);
        }

        @Controller
        public static class RoutesController {
            @GetMapping(value = "/{path:[^\\.]*}")
            public String redirect() {
                return "forward:/index.html";
            }

            @GetMapping(value = "/")
            public String index() {
                return "forward:/index.html";
            }

            @GetMapping(value = "/api/**")
            public void api() {
            }
        }

    }


