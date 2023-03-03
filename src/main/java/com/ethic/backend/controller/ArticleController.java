package com.ethic.backend.controller;

import com.ethic.backend.exception.ArticleNotFoundException;
import com.ethic.backend.model.Article;
import com.ethic.backend.repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
public class ArticleController implements ErrorController {

    @Autowired
    private ArticleRepository articleRepository;

    @GetMapping("/articles/all")
    public List<Article> getAllArticles() {
        return articleRepository.findAll();
    }

    @GetMapping("/articles/{id}")
    public Article getArticleById(@PathVariable Long id) {
        return articleRepository.findById(id)
                .orElseThrow(() -> new ArticleNotFoundException(id));
    }

    @PostMapping("/articles/add")
    public Article createArticle(@RequestBody Article newArticle) {
        return articleRepository.save(newArticle);
    }

    @PutMapping("/articles/{id}/edit")
    public Article updateArticle(@RequestBody Article updatedArticle, @PathVariable Long id) {
        return articleRepository.findById(id)
                .map(article -> {
                    article.setTitle(updatedArticle.getTitle());
                    article.setDescription(updatedArticle.getDescription());
                    article.setArticle(updatedArticle.getArticle());
                    return articleRepository.save(article);
                })
                .orElseThrow(() -> new ArticleNotFoundException(id));
    }

    @DeleteMapping("/articles/{id}")
    public String deleteArticle(@PathVariable Long id) {
        if (!articleRepository.existsById(id)) {
            throw new ArticleNotFoundException(id);
        }
        articleRepository.deleteById(id);
        return "Article with id " + id + " has been deleted.";
    }
}
