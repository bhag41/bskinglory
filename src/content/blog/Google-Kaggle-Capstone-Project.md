---
title: 'Google/Kaggle Capstone Project - Social Stories'
author: 'Bhagyashree Kulkarni'
pubDate: '2025-04-13'
description: 'My entry for Google Kaggle Capstone project, Social Stories using Gemini API, GenAI, RAG.'
tags: ['GenAI', 'Autism', 'Social Stories', 'Google', 'Kaggle']
---

I attended Google/Kaggle's 5 day Intensive course on GenAI from 31st March - 5th April. Following is the blogpost explaining the capstone project that I submitted.

## Project Goal - Using GenAI, few shot prompts, train the model to create social stories to help individuals with Autism.

# 🧠 Empowering Neurodiverse Children with Social Stories using GenAI

## 💖 Inspiration

As a mother of a non-verbal autistic child, I often find myself navigating a world full of complex emotions, unpredictable social situations, and the challenge of helping my son make sense of it all. Social stories have always played an important role in how I help him prepare for everyday experiences—from doctor visits to birthday parties.

With the advent of **Generative AI**, I began to wonder: _What if this technology could assist parents like me?_ What if it could take a simple idea or scenario and turn it into a meaningful, visual story that my child can connect with?

This project is a deeply personal step toward answering that question.

By combining the power of language models and AI-generated imagery, my goal is to create tools that can **bridge the communication gap** and **offer emotional clarity** for neurodiverse children. If this can help even one family feel more supported, understood, or empowered, then it's a step in the right direction.

This is my way of using technology not just to build apps or solve problems—but to connect, to nurture, and to uplift.

## 📌 Table of Contents

1. [Introduction](#introduction)
2. [Problem Statement](#problem-statement)
3. [Solution Overview](#solution-overview)
4. [Key Features](#key-features)
5. [How It Works](#how-it-works)
6. [Tools & Technologies Used](#tools--technologies-used)
7. [Sample Outputs](#sample-outputs)
8. [Future Improvements](#future-improvements)
9. [Conclusion](#conclusion)

---

## 🪄 Introduction

Social stories are short narratives that help neurodiverse children—especially those with autism—understand everyday situations, emotions, and social cues. This project aims to automate the generation of personalized social stories using **Generative AI**, enabling parents, teachers, and therapists to create supportive content on demand.

---

## 🚧 Problem Statement

Children on the autism spectrum often struggle with social communication and emotional understanding. While social stories have been proven to help, creating them manually is time-consuming, subjective, and not easily scalable for every unique situation.

Some of the key challenges:

- Customization for the child’s specific needs
- Visual representation for comprehension
- Lack of multilingual, culturally relevant content
- Limited access for parents without a therapeutic background

---

## 💡 Solution Overview

This project uses Google’s **Gemini 2.0** multimodal model to generate **custom social stories** based on user input. A parent or caregiver can describe a social situation—like “going to the dentist” or “waiting in line at school”—and the model generates:

- A child-friendly narrative
- Simple illustrations using AI-generated images
- Optional reinforcement strategies or follow-up questions

The stories are designed to be:

- Visually engaging
- Age-appropriate
- Emotionally supportive
- Accessible and customizable

---

## 🌟 Key Features

- 🧩 **Prompt-based Generation**: Custom social stories based on brief user descriptions
- 🖼️ **AI Image Integration-ready**: Gemini-generated illustrations matching the story context
- 🌐 **Multilingual Potential**: Can be adapted to regional languages like Marathi or Hindi
- 🎯 **Child-Focused Design**: Simple, direct language optimized for young readers
- 🔄 **Iterative Improvements**: Easy to refine and regenerate parts of the story

---

## ⚙️ How It Works

1. **User Input**: Caregiver provides a short description of the scenario (e.g., “First day at a new school”)
2. **Text Generation**: Gemini generates a personalized social story with 5–8 sentences, maintaining a positive, calming tone
3. **Image Generation**: Using the Gemini Flash model, relevant images are created to visually support the story
4. **Formatting**: The story and images are combined in a structured, readable format (Markdown, PDF, etc.)
5. **Optional Feedback Loop**: Users can regenerate or adapt specific parts of the story

---

## 🧰 Tools & Technologies Used

| Tool/Library               | Purpose                     |
| -------------------------- | --------------------------- |
| Google Gemini 2.0 (Flash)  | Text and image generation   |
| Kaggle Notebooks           | Development & presentation  |
| Python (Gemini SDK)        | Backend logic and API calls |
| Markdown/HTML              | Story formatting            |
| Jupyter Widgets (Optional) | User input interface        |

---

## ✨ Sample Outputs

### Scenario: “Going to the Doctor”

> Today, I am going to the doctor.  
> The doctor is kind and wants to help me feel better.  
> I might sit in the waiting room for a little while.  
> When it’s my turn, the doctor will ask me a few questions.  
> If I feel nervous, I can hold my toy and take deep breaths.  
> After the visit, I will go home and feel proud!

**_(Image: A smiling child with a doctor in a colorful clinic)_**

---

## 🔮 Future Improvements

- Add **audio narration** for non-readers
- Enable **drag-and-drop templates** for therapists
- Build a **mobile-friendly web interface**
- Allow **user-uploaded characters** (e.g., a favorite toy or family member)
- Enable **feedback learning** to fine-tune story tone/emotion

---

## ✅ Conclusion

This project merges compassion with technology. By combining the power of Generative AI with the proven framework of social stories, we hope to support neurodiverse children in navigating their world more confidently and joyfully.

It’s a small step toward making **inclusive AI** a reality—one story at a time.
