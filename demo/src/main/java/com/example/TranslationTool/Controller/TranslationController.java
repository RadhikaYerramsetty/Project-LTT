package com.example.TranslationTool.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.TranslationTool.Entity.Translation;
import com.example.TranslationTool.Services.TranslationService;

@RestController
@RequestMapping("/api/translation")
public class TranslationController {

    private final TranslationService translationService;

    @Autowired
    public TranslationController(TranslationService translationService) {
        this.translationService = translationService;
    }

    @PostMapping("/translate")
    public Translation translateText(@RequestBody String sourceLanguage,
                                    @RequestBody String targetLanguage,
                                    @RequestBody String sourceText) {
        return translationService.translateText(sourceLanguage, targetLanguage, sourceText);
    }
}
