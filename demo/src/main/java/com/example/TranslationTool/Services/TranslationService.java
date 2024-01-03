package com.example.TranslationTool.Services;

import com.example.TranslationTool.Entity.Translation;

public interface TranslationService {
    Translation translateText(String sourceLanguage, String targetLanguage, String sourceText);
}
