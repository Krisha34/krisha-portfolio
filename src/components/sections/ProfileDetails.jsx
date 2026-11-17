import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";
export const ProfileDetails = () => {
  return (
    <section id="experience" className="py-20 bg-blue-50 text-gray-800">
        <RevealOnScroll>
      <div className="max-w-4xl mx-auto ">
        {/* Experience Section */}
        <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="space-y-10 text-[17px] leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-blue-700 mb-1">💼 Application Developer – IBM</h3>
            <p className="text-sm text-gray-600 mb-2">June 2026 – Present · Baton Rouge, Louisiana</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Engineered a full-stack AI-powered cloud migration assessment tool that cut assessment generation time from 2–4 weeks to under 60 seconds, enabling junior consultants to independently deliver enterprise Oracle/SAP migration assessments.</li>
              <li>Developed and containerized an AP Invoice Agent integrated with Oracle Cloud Financials REST APIs via MCP, enabling natural language invoice queries, status checks, and approval workflows.</li>
              <li>Built a client-facing ERP portal module in JavaScript that chains 4 REST APIs, with search and drill-down from purchase orders to line items, product details, and warehouse stock using data providers and action chains; shipped via Git with team code reviews.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-700 mb-1">💼 Software Engineer – Project 990</h3>
            <p className="text-sm text-gray-600 mb-2">January 2026 – May 2026 · Bloomington, Indiana</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Developed features for a full-stack analytics platform for nonprofit funding research using React and Python, built 4+ dashboards and interactive data tables to explore foundation and grant data.</li>
              <li>Implemented backend API endpoints & database queries to support search, filtering, grant listings, and saved lists, enabling structured access to funding datasets.</li>
              <li>Leveraged LLM-assisted tools to accelerate UI development.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-700 mb-1">💼 Research Assistant – Indiana University Bloomington</h3>
            <p className="text-sm text-gray-600 mb-2">May 2025 – August 2025 · Bloomington, Indiana</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Developed a Python-based document processing pipeline using PyMuPDF and OpenCV to detect black-box redactions in legal PDFs and generate annotated outputs.</li>
              <li>Implemented a spatial grouping algorithm to cluster vertically aligned redaction boxes based on positional overlap and spacing rules.</li>
              <li>Automated extraction of legal document metadata from the ICC Legal Tools Database using ParseHub to build structured datasets for analysis.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-700 mb-1">💼 Software Intern – Siemens</h3>
            <p className="text-sm text-gray-600 mb-2">July 2023 – September 2023 · Pune, India</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Migrated performance test files to modern suite within an enterprise PLM system, improving test organization &amp; maintainability.</li>
              <li>Configured development units using internal automation tools within a CI/CD workflow involving continuous integration and automated testing to ensure reliable builds.</li>
              <li>Submitted change packages, addressed code review feedback, and validated builds and tests through automated pipelines.</li>
            </ul>
          </div>
        </div>

        {/* Education Section */}
        <h2 className="text-4xl font-bold text-center mt-20 mb-10 bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
          Education
        </h2>

        <div className="space-y-10 text-[17px] leading-relaxed">
          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-1">🎓 M.S. in Computer Science</h3>
            <p className="text-base text-gray-600 mb-2">Indiana University Bloomington (2024–2026)</p>
            <p>
              GPA: 3.9 / 4.0<br />
              <em>Courses:</em> Applied Algorithms, Software Engineering, Machine Learning, Database Technologies, Computer Networks
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-1">🎓 B.E. in Computer Engineering with Honors in Artificial Intelligence and Machine Learning </h3>
            <p className="text-base text-gray-600 mb-2">International Institute of Information Technology (2020–2024)</p>
            <p>
              GPA: 9.08 / 10<br />
            </p>
          </div>
        </div>
      </div></RevealOnScroll>
    </section>
  );
};
