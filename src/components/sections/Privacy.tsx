import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Privacy() {
  const [tocOpen, setTocOpen] = useState(false);

  useEffect(() => {
    const original = document.documentElement.style.scrollBehavior;
    const originalScrollRestoration =
      typeof window !== "undefined" && "scrollRestoration" in window.history
        ? window.history.scrollRestoration
        : undefined;
    try {
      if (
        typeof window !== "undefined" &&
        "scrollRestoration" in window.history
      ) {
        window.history.scrollRestoration = "manual";
      }
      document.documentElement.style.scrollBehavior = "smooth";
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    } catch (e) {}
    return () => {
      document.documentElement.style.scrollBehavior = original || "";
      if (
        typeof window !== "undefined" &&
        originalScrollRestoration !== undefined
      ) {
        window.history.scrollRestoration = originalScrollRestoration;
      }
    };
  }, []);

  const sections = [
    { id: "section-1", title: "1. Information We Collect" },
    { id: "section-2", title: "2. How We Use Your Information" },
    { id: "section-3", title: "3. Sharing Your Information" },
    { id: "section-4", title: "4. Cookies and Tracking Technologies" },
    { id: "section-5", title: "5. Your Rights" },
    { id: "section-6", title: "6. Data Security" },
    { id: "section-7", title: "7. Retention of Data" },
    { id: "section-8", title: "8. Third-Party Links" },
    { id: "section-9", title: "9. Changes to This Policy" },
    { id: "section-10", title: "10. Contact Us" },
  ];

  const SectionCard = ({
    id,
    title,
    children,
  }: {
    id: string;
    title: string;
    children: React.ReactNode;
  }) => (
    <section
      id={id}
      className="mb-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 lg:p-10"
    >
      <div className="flex items-start gap-4">
        <div className="hidden md:block w-1.5 h-10 rounded-full bg-lime-600 mt-1" />
        <div className="flex-1">
          <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-3">
            {title}
          </h3>
          <div className="space-y-4 text-base lg:text-lg leading-7 text-gray-700">
            {children}
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div id="top" className="min-h-screen bg-gray-50 text-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Page header */}
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            CovSpace — Privacy Policy
          </h1>
          <p className="mt-3 text-lg text-gray-600 max-w-3xl">
            At Covspace, we value your trust and are committed to protecting your personal information. 
            This Privacy Policy outlines how we collect, use, and safeguard your information when you use our platform.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Last Updated: November 15, 2025
          </p>
        </header>

        <div className="md:grid md:grid-cols-12 md:gap-8">
          {/* Table of Contents */}
          <aside className="md:col-span-4 lg:col-span-3">
            <div className="md:sticky md:top-24">
              <div className="block md:hidden mb-4">
                <button
                  onClick={() => setTocOpen((s) => !s)}
                  className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-lg shadow-sm"
                  aria-expanded={tocOpen}
                >
                  <span className="font-medium text-gray-900">
                    On this page
                  </span>
                  <span className="text-sm text-gray-500">
                    {tocOpen ? "Hide" : "Show"}
                  </span>
                </button>
                {tocOpen && (
                  <nav className="mt-3 bg-white border border-gray-100 rounded-lg p-4 shadow-sm">
                    <ul className="space-y-2">
                      {sections.map((s) => (
                        <li key={s.id}>
                          <a
                            href={`#${s.id}`}
                            className="text-gray-700 hover:text-lime-600 block pl-2"
                            onClick={() => setTocOpen(false)}
                          >
                            {s.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                )}
              </div>

              <div className="hidden md:block">
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Contents
                  </h4>
                  <nav>
                    <ul className="space-y-3 text-gray-700 text-sm">
                      {sections.map((s) => (
                        <li key={s.id}>
                          <a
                            href={`#${s.id}`}
                            className="block hover:text-lime-600 transition-colors pl-1"
                          >
                            {s.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <div className="mt-6 pt-4 border-t border-gray-100 text-sm text-gray-600">
                    <div className="mb-2">Need help?</div>
                    <Link
                      to="/contact"
                      className="text-lime-600 font-medium hover:underline"
                    >
                      Contact us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Content */}
          <main className="md:col-span-8 lg:col-span-9">
            {/* Section 1 */}
            <SectionCard id="section-1" title="1. Information We Collect">
              <p>
                We collect the following types of information:
              </p>
              <div className="pl-4">
                <p>
                  <strong>a. Personal Information:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li><strong>For Job Seekers:</strong> Name, email address, phone number, resume/CV, work experience, education details, and skills.</li>
                  <li><strong>For Employers:</strong> Company name, contact details, job postings, and other business-related information.</li>
                </ul>
                <p className="mt-4">
                  <strong>b. Non-Personal Information:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Browser type, IP address, device type, and usage data.</li>
                  <li>Cookies and tracking technologies for analytics and functionality.</li>
                </ul>
              </div>
            </SectionCard>

            {/* Section 2 */}
            <SectionCard id="section-2" title="2. How We Use Your Information">
              <p>
                We use your information to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Facilitate job matches between job seekers and employers.</li>
                <li>Process applications and manage user profiles.</li>
                <li>Provide customer support and respond to inquiries.</li>
                <li>Send updates, job alerts, or promotional offers (with your consent).</li>
                <li>Improve our platform through analytics and user feedback.</li>
              </ul>
            </SectionCard>

            {/* Section 3 */}
            <SectionCard id="section-3" title="3. Sharing Your Information">
              <p>
                We may share your data in the following situations:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>With Employers:</strong> Job seekers' profiles and applications will be shared with employers when applying for positions.</li>
                <li><strong>With Job Seekers:</strong> Job postings and employer information will be visible to users.</li>
                <li><strong>Third-Party Service Providers:</strong> For platform operations, analytics, and marketing.</li>
                <li><strong>Legal Requirements:</strong> If required by law or to protect our rights and users.</li>
              </ul>
            </SectionCard>

            {/* Section 4 */}
            <SectionCard id="section-4" title="4. Cookies and Tracking Technologies">
              <p>
                We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, 
                and personalize content. You can manage cookie preferences in your browser settings.
              </p>
            </SectionCard>

            {/* Section 5 */}
            <SectionCard id="section-5" title="5. Your Rights">
              <p>
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Access, update, or delete your personal information.</li>
                <li>Opt-out of marketing communications.</li>
                <li>Deactivate your account by contacting us.</li>
                <li>Request a copy of your data.</li>
              </ul>
            </SectionCard>

            {/* Section 6 */}
            <SectionCard id="section-6" title="6. Data Security">
              <p>
                We use industry-standard measures to protect your personal information. While we strive to ensure security, 
                no system is completely secure.
              </p>
            </SectionCard>

            {/* Section 7 */}
            <SectionCard id="section-7" title="7. Retention of Data">
              <p>
                We retain your data for as long as necessary to provide our services or as required by law. 
                You may request data deletion at any time.
              </p>
            </SectionCard>

            {/* Section 8 */}
            <SectionCard id="section-8" title="8. Third-Party Links">
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices 
                of these websites.
              </p>
            </SectionCard>

            {/* Section 9 */}
            <SectionCard id="section-9" title="9. Changes to This Policy">
              <p>
                We may update this Privacy Policy to reflect changes to our practices or for other operational, legal, 
                or regulatory reasons. Changes will be posted on this page with a revised "Last Updated" date.
              </p>
            </SectionCard>

            {/* Section 10 */}
            <SectionCard id="section-10" title="10. Contact Us">
              <p>
                If you have any questions or concerns about this Privacy Policy or your data, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg border">
                <p className="font-medium text-gray-900">Contact Information</p>
                <div className="mt-2 space-y-1 text-gray-700">
                  <p>Email: privacy@covspace.com</p>
                  <p>Phone: +91 918893 9892, +91 735659 3629</p>
                  <p>Address: GK Tower, Chakkarapparambu Road<br />
                Near to NH 66 Bypass, Near Holiday Inn Hotel<br />
                Ernakulam- 682028
                </p>
                </div>
              </div>
            </SectionCard>

            {/* Footer of privacy policy */}
            <div className="mt-8 bg-white rounded-2xl border border-gray-100 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
              <div>
                <div className="text-sm text-gray-600">
                  For any questions about this Privacy Policy:
                </div>
                <div className="mt-2">
                  <Link
                    to="/contact"
                    className="text-lime-600 font-medium hover:underline"
                  >
                    Contact us
                  </Link>
                </div>
              </div>

              <div className="text-sm text-gray-500">
                <a href="#top" className="hover:text-lime-600">
                  Back to top
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}