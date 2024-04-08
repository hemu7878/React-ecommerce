import React, { useState } from 'react'
import styles from "../../../styles/home/faqsRow.module.css";
import Title from '../../common/Title';
import Faq from "./Faqs";
import { faqs } from '../../../data/homePageData';

function FaqsRow() {
    const [selectedFaq, setSelectedFaq] = useState(0);
    return (
      <div className={styles.faqsRowContainer}>
        <Title
          title="FAQs"
          desc=""
        />
        <div className={styles.faqsRowContainerInner}>
          {faqs.map(function (faq, index) {
            return (
              <Faq
                key={faq.number}
                number={faq.number}
                question={faq.question}
                answer={faq.answer}
                index={index}
                selectedFaq={selectedFaq}
                setSelectedFaq={setSelectedFaq}
              />
            );
          })}
        </div>
      </div>
    );
  }

export default FaqsRow