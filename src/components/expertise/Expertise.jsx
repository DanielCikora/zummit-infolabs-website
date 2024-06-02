import { useState } from "react";
import ExpertiseAccordion from "./ExpertiseAccordion";
export default function Expertise() {
  const [openIndex, setOpenIndex] = useState(null);
  const accordionItems = [
    {
      key: 0,
      accordionTitle: "Emotion detection",
      accordionParagraph:
        "Racism and Terrorism detection are some of the key use cases around emotion detection. Uses Deep Neural Networks and architectures similar to AlexNet under Computer Vision.",
    },
    {
      key: 1,
      accordionTitle: "Time Series analysis",
      accordionParagraph:
        "Analysis of Time Series data is quite an interesting area, especially when dealing with use cases like Stock Market Predictions, Forex, Crypto and the like",
    },
    {
      key: 2,
      accordionTitle: "Reinforcement Learning (RL)",
      accordionParagraph:
        "A powerful approach for scenarios other than linear or ANN problems. A model that learns over time by observing data. Autonomous driving is one of the best examples of RL.",
    },
    {
      key: 3,
      accordionTitle: "Anomaly Detection",
      accordionParagraph:
        "Fraud detection is one of the best examples of detection anomalous transactions in Banking and financial applications. Prescriptive analytics in ecommerce, healthcare disease data and more.",
    },
    {
      key: 4,
      accordionTitle: "Generative Solutions",
      accordionParagraph:
        "One of the most cutting edge use cases around Fashion domain like Hairstyle suggestions, apparel design, 3D models of house designs, Anime characters generation and more.",
    },
    {
      key: 5,
      accordionTitle: "Data Analytics",
      accordionParagraph:
        "One of the key benefits or outcome of AI/ML solutions is the ability to provide analytics, be it, Preditive Analytics, Prescriptive Analytics or even Descriptive Analytics.",
    },
  ];
  return (
    <article className='expertise'>
      <div className='wrapper wrapper--expertise'>
        <div className='expertise-text'>
          <div className='expertise-text__content'>
            <h2 className='expertise-text__h2'>Our Expertise</h2>
          </div>
          <div className='expertise-text__accordion'>
            {accordionItems.map((accordionItem, index) => (
              <ExpertiseAccordion
                key={accordionItem.key}
                index={index}
                title={accordionItem.accordionTitle}
                text={accordionItem.accordionParagraph}
                openIndex={openIndex}
                setOpenIndex={setOpenIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
