"use client";
import React, {useState} from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import MoreButton from "./ui/morebutton";

const Faq = () => {
  const [showMore, setShowMore] = useState(false);

  const initialFaqs = [
    {
      question: "What makes CareerGPT unique as a career development tool?",
      answer:
        "CareerGPT uses advanced AI to provide personalized career guidance, resume building, interview preparation, and job market insights, helping users make informed career decisions.",
    },
    {
      question: "How does CareerGPT generate tailored career advice?",
      answer:
        "CareerGPT analyzes your skills, experience, and industry trends using AI-powered algorithms to suggest relevant career paths, job opportunities, and skill improvement plans.",
    },
    {
      question: "How accurate and up-to-date is CareerGPT’s job market data?",
      answer:
        "CareerGPT gathers real-time data from multiple sources, including job boards and industry reports, ensuring that users receive the latest job trends and employer expectations.",
    },
    {
      question: "Is my data secure with CareerGPT?",
      answer:
        "Yes, CareerGPT follows strict security protocols, including data encryption and compliance with industry standards, to keep your personal and professional information safe.",
    },
  ];

  const additionalFaqs = [
    {
      question: "Can CareerGPT help me prepare for job interviews?",
      answer:
        "Absolutely! CareerGPT offers AI-driven mock interviews, common interview question analysis, and personalized feedback to help you perform confidently in interviews.",
    },
    {
      question:
        "How does CareerGPT assist in resume and cover letter creation?",
      answer:
        "CareerGPT provides AI-generated resumes and cover letters based on industry best practices. You can customize them to highlight your unique experiences and skills.",
    },
    {
      question: "Does CareerGPT offer career guidance for multiple industries?",
      answer:
        "Yes, CareerGPT covers various industries, from technology and finance to healthcare and creative fields, providing specialized career insights and recommendations.",
    },
    {
      question:
        "How can I track my job application and interview preparation progress?",
      answer:
        "CareerGPT features a progress tracker where users can monitor job applications, interview performance, and skill development, helping them stay on top of their career goals.",
    },
    {
      question: "Can I customize AI-generated content in CareerGPT?",
      answer:
        "Yes! CareerGPT allows users to edit AI-generated resumes, cover letters, and career plans to better align with their personal goals and experiences.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <Accordion type="single" collapsible className="w-full">
        {initialFaqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}

        {showMore &&
          additionalFaqs.map((faq, index) => (
            <AccordionItem key={index + 4} value={`item-${index + 5}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
      </Accordion>

      <div className="mt-4 flex justify-end">
        <MoreButton
          onClick={() => setShowMore(!showMore)}
          label={showMore ? "Close Additional FAQs" : "More FAQs"}
        />
      </div>
    </div>
  );
};

export default Faq;
