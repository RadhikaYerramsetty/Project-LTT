package com.example.TranslationTool.Entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class Translation {
   @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

public void setSourceLanguage(String sourceLanguage) {
}

public void setTargetLanguage(String targetLanguage) {
}

public void setTranslatedText(String string) {
}

public void setSourceText(String sourceText) {
}

public static Translation save(Translation translation) {
    return null;
}
}
