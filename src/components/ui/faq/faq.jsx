import styles from "./faq.css";
import React, { useState } from "react";
import { AccordionItem } from "./faq-item";

export const FaqUI = ({ faqText }) => {
  const [openId, setId] = useState(null);

  return (
    <>
      <section>
        <h1 className={styles.faqHeaderText}>Как всё устроено</h1>
        <ul className="accordion">
          {faqText?.map((item, id) => {
            return (
              <AccordionItem
                onClick={() => (id === openId ? setId(null) : setId(id))}
                item={item}
                isOpen={id === openId}
                key={id}
              />
            );
          })}
        </ul>
      </section>
    </>
  );
};
