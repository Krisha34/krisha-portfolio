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
            <h3 className="text-xl font-bold text-blue-700 mb-1">💼 Student Intern – Siemens</h3>
            <p className="text-sm text-gray-600 mb-2">Feb 2023 – May 2023</p>
            <p>
           Migrated legacy AOS test files to enhance distributed system efficiency, configured automation pipelines to improve build reliability, and contributed to code reviews, debugging, and integration testing for optimized performance delivery.

       </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-700 mb-1">💼 Data Analyst Intern – Pune Knowledge Cluster</h3>
            <p className="text-sm text-gray-600 mb-2">July 2023 – Sept 2023</p>
            <p>
              Analyzed large-scale COVID-19 datasets and built Power BI dashboards to visualize test results and demographic trends. Enabled data-driven insights that informed health reporting and public policy.
            </p>
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
              GPA: 4.0 / 4.0<br />
              <em>Courses:</em> Applied Algorithms, Software Engineering, Applied Machine Learning, Advanced Database Technologies
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
