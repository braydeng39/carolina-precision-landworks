import React from "react";

const sections = [
  {
    title: "1. Information We Collect",
    body: "When you contact Carolina Precision Landworks or submit a quote request through our website, we may collect your name, phone number, email address, property address, and project details.",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use the information you provide to respond to quote requests, contact you about services, schedule projects, provide customer support, and improve our services.",
  },
  {
    title: "3. Sharing Your Information",
    body: "Carolina Precision Landworks does not sell your personal information. We may share information with trusted service providers when necessary to operate our website, process inquiries, communicate with customers, or comply with legal requirements.",
  },
  {
    title: "4. Cookies and Website Tracking",
    body: "Our website may use cookies, analytics tools, and advertising tracking technologies to understand website traffic, improve user experience, and measure advertising performance.",
  },
  {
    title: "5. Protecting Your Information",
    body: "We take reasonable steps to protect personal information submitted through our website. However, no method of electronic transmission or storage is completely secure.",
  },
  {
    title: "6. Your Privacy Rights",
    body: "You may contact us to request access to, correction of, or deletion of personal information you have provided, subject to applicable legal requirements.",
  },
];

export default function PrivacyPolicy() {
  return (
    <section
      id="privacy-policy"
      className="relative bg-[#111311] border-t border-white/10 py-20 md:py-28 scroll-mt-20"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-4">
            <div className="cpl-eyebrow text-[#D96C4B] mb-4">Legal</div>
            <h2 className="cpl-display text-3xl md:text-4xl font-bold text-[#F2F2F2] leading-[0.95]">
              Privacy
              <br />
              Policy
            </h2>
            <p className="text-[#A3A8A3] text-sm mt-6">
              Effective Date: November 15, 2026
            </p>
          </div>

          <div className="col-span-12 md:col-span-7 md:col-start-6 mt-10 md:mt-0">
            <div className="space-y-8">
              {sections.map((s) => (
                <div key={s.title}>
                  <h3 className="cpl-display text-sm font-semibold text-[#F2F2F2] mb-2.5">
                    {s.title}
                  </h3>
                  <p className="text-[#A3A8A3] text-[15px] leading-relaxed">
                    {s.body}
                  </p>
                </div>
              ))}

              <div className="pt-8 border-t border-white/10">
                <h3 className="cpl-display text-sm font-semibold text-[#F2F2F2] mb-3">
                  7. Contact Information
                </h3>
                <p className="text-[#A3A8A3] text-[15px] leading-relaxed mb-4">
                  Carolina Precision Landworks
                </p>
                <div className="space-y-2 text-[15px]">
                  <div className="flex flex-wrap gap-x-2">
                    <span className="text-[#A3A8A3]">Email:</span>
                    <a
                      href="mailto:CarolinaPrecisionLandworks@gmail.com"
                      className="text-[#D96C4B] hover:text-[#e08366] break-all transition-colors"
                    >
                      CarolinaPrecisionLandworks@gmail.com
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-x-2">
                    <span className="text-[#A3A8A3]">Website:</span>
                    <a
                      href="https://carolinaprecisionlandworks.com"
                      className="text-[#D96C4B] hover:text-[#e08366] break-all transition-colors"
                    >
                      https://carolinaprecisionlandworks.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}