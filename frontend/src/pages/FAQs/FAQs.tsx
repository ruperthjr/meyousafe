import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import {
  FAQsContainer,
  HeroSection,
  HeroTitle,
  HeroDescription,
  FAQsList,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
  QuestionText,
  ToggleIcon,
  CategoryTitle,
  CategorySection,
} from './FAQs.styles';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  faqs: FAQ[];
}

export const FAQs: React.FC = () => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const categories: FAQCategory[] = [
    {
      title: 'General Questions',
      faqs: [
        {
          question: 'What is MeYouSafe?',
          answer: 'MeYouSafe is a secure, confidential platform designed to help individuals in Kenya report incidents of sexual harassment. We provide a safe space for survivors to document their experiences and connect with support resources.',
        },
        {
          question: 'Is this service free?',
          answer: 'Yes, MeYouSafe is completely free to use. There are no charges for submitting reports or accessing support resources through our platform.',
        },
        {
          question: 'Who can use MeYouSafe?',
          answer: 'Anyone who has experienced sexual harassment in Kenya can use MeYouSafe. This includes incidents in workplaces, schools, public spaces, online environments, and other settings.',
        },
      ],
    },
    {
      title: 'Privacy & Security',
      faqs: [
        {
          question: 'Is my report anonymous?',
          answer: 'You have the option to submit your report anonymously. We do not require any personal identifying information unless you choose to provide it. However, providing contact information can help us follow up with support resources.',
        },
        {
          question: 'How is my data protected?',
          answer: 'All data submitted through MeYouSafe is encrypted using industry-standard security protocols. We store your information securely and never share it with third parties without your explicit consent.',
        },
        {
          question: 'Can anyone see my report?',
          answer: 'Your report is kept confidential. Only authorized personnel who are trained in handling sensitive information have access to reports, and they are bound by strict confidentiality agreements.',
        },
        {
          question: 'What is the reference code for?',
          answer: 'The reference code is a unique identifier for your report. You can use it to check the status of your report, provide additional information, or access your submission later. Keep this code safe as it is the only way to access your specific report.',
        },
      ],
    },
    {
      title: 'Reporting Process',
      faqs: [
        {
          question: 'What information do I need to provide?',
          answer: 'You will need to provide details about what happened, when and where it occurred, and any other relevant information you feel comfortable sharing. Required fields are marked with an asterisk (*), but we encourage you to provide as much detail as possible.',
        },
        {
          question: 'Can I save my report and complete it later?',
          answer: 'Yes, your progress is automatically saved every 30 seconds. You can also manually save and return to complete your report at any time.',
        },
        {
          question: 'What happens after I submit my report?',
          answer: 'After submission, you will receive a reference code. Your report is securely stored and may be reviewed by trained professionals. Depending on the nature of your report and the preferences you indicated, appropriate support resources may be made available to you.',
        },
        {
          question: 'Can I update my report after submitting it?',
          answer: 'Yes, you can use your reference code to access your report and provide additional information if needed.',
        },
      ],
    },
    {
      title: 'Support & Resources',
      faqs: [
        {
          question: 'What support resources are available?',
          answer: 'MeYouSafe connects you with various support resources including crisis hotlines (available 24/7), counseling services, legal aid organizations, and other support networks for survivors of sexual harassment.',
        },
        {
          question: 'Do I need to report to the police separately?',
          answer: 'Reporting through MeYouSafe does not replace formal legal reporting. If you wish to pursue legal action, we recommend also reporting to the police. We can provide information about legal aid organizations that can assist you through this process.',
        },
        {
          question: 'Is counseling support available?',
          answer: 'Yes, we provide information about professional counseling services. Check our Support page for contact details of counseling organizations that can help you.',
        },
      ],
    },
    {
      title: 'Safety Concerns',
      faqs: [
        {
          question: 'What if I am in immediate danger?',
          answer: 'If you are in immediate danger, please call emergency services at 999 or 112. You can also contact the GBVRC hotline at 1195 for immediate assistance with gender-based violence.',
        },
        {
          question: 'What if I fear retaliation?',
          answer: 'Your safety is our priority. If you fear retaliation, consider submitting your report anonymously and reach out to legal aid organizations for advice on protecting yourself. Emergency contact information is available on our Support page.',
        },
      ],
    },
  ];

  const toggleItem = (index: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <FAQsContainer>
      <HeroSection>
        <HelpCircle size={64} strokeWidth={2} style={{ color: '#6366f1', marginBottom: '1.5rem' }} />
        <HeroTitle>Frequently Asked Questions</HeroTitle>
        <HeroDescription>
          Find answers to common questions about MeYouSafe and the reporting process
        </HeroDescription>
      </HeroSection>

      {categories.map((category, categoryIndex) => (
        <CategorySection key={categoryIndex}>
          <CategoryTitle>{category.title}</CategoryTitle>
          <FAQsList>
            {category.faqs.map((faq, faqIndex) => {
              const itemKey = `${categoryIndex}-${faqIndex}`;
              const isOpen = openItems.has(itemKey);

              return (
                <FAQItem key={itemKey}>
                  <FAQQuestion onClick={() => toggleItem(itemKey)} $isOpen={isOpen}>
                    <QuestionText>{faq.question}</QuestionText>
                    <ToggleIcon>
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </ToggleIcon>
                  </FAQQuestion>
                  {isOpen && <FAQAnswer>{faq.answer}</FAQAnswer>}
                </FAQItem>
              );
            })}
          </FAQsList>
        </CategorySection>
      ))}
    </FAQsContainer>
  );
};

export default FAQs;