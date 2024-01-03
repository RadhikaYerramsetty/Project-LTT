package com.example.TranslationTool.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service; 

import com.example.TranslationTool.Entity.Translation;
import com.example.TranslationTool.Repository.TranslationRepository;

@Service 
public class TranslationServiceImpl implements TranslationService {

    @Autowired
    public TranslationServiceImpl(TranslationRepository translationRepository) {
    }

    @Override
    public Translation translateText(String sourceLanguage, String targetLanguage, String sourceText) {
        
        Translation translation = new Translation();
        translation.setSourceLanguage(sourceLanguage);
        translation.setTargetLanguage(targetLanguage);
        translation.setSourceText(sourceText);
        translation.setTranslatedText("Translated Text"); 
        return Translation.save(translation);
    }
}
