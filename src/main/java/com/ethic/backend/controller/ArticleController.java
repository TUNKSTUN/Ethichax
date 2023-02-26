package com.ethic.backend.controller;


import com.ethic.backend.exception.ArticleNotFoundException;
import com.ethic.backend.model.Article;
import com.ethic.backend.repository.ArticleRepository;
import com.google.cloud.storage.Cors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@CrossOrigin("https://ethichax.azurewebsites.net/")
public class ArticleController implements ErrorController {

    @Autowired
    private ArticleRepository articleRepository;
    @PostMapping("/articles")
    Article article(@RequestBody Article newArticle) {
        return articleRepository.save(newArticle);
    }
    @GetMapping("/articles")
    List<Article> getAllArticles() {
        return articleRepository.findAll();
    }

    @GetMapping("/articles/{id}")
    Article getArticleById(@PathVariable Long id) {
        return articleRepository.findById(id)
                .orElseThrow(() -> new ArticleNotFoundException(id));
    }

    @PutMapping("/articles/{id}")
    Article updateUser(@RequestBody Article newArticle, @PathVariable Long id) {
        return articleRepository.findById(id)
                .map(user -> {
                    user.setTitle(newArticle.getTitle());
                    user.setDescription(newArticle.getDescription());
                    user.setArticle(newArticle.getArticle());
                    return articleRepository.save(user);
                }).orElseThrow(() -> new ArticleNotFoundException(id));
    }

    @DeleteMapping("/article/{id}")
    String deleteUser(@PathVariable Long id){
        if(!articleRepository.existsById(id)){
            throw new ArticleNotFoundException(id);
        }
        articleRepository.deleteById(id);
        return  "User with id "+id+" has been deleted success.";
    }


}
