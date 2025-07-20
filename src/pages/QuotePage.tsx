// src/pages/QuotePage.tsx
import React from "react";
import { QuoteForm } from "@/components/QuoteForm";

const QuotePage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
        Request a Security Quote
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Fill in your details below and we’ll get back to you within 24 hours.
      </p>
      <QuoteForm />
    </div>
  );
};

export default QuotePage;
