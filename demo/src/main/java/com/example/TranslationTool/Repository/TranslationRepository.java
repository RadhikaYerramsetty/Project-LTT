package com.example.TranslationTool.Repository;

import org.hibernate.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.TranslationTool.Entity.Translation;

public interface TranslationRepository 
    extends JpaRepository<Transaction, Long>{

    Translation save(Translation translation);}

