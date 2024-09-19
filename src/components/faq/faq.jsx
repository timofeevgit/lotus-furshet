import { FaqUI } from "../ui/faq/index";
import React, { useState } from "react";
import { faqText } from "../ui/faq/faq-text";


export const Faq = () => {
  return <FaqUI faqText={faqText} />
};
