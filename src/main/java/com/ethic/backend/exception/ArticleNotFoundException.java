package com.ethic.backend.exception;

public class ArticleNotFoundException extends RuntimeException{
    public ArticleNotFoundException(Long id){
        super("Could not found the user with id "+ id);
    }
}
