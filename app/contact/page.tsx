import { Metadata } from "next";
import ContactForm from "./ContactForm";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Israel Olaleye for frontend development projects, collaborations, or just to say hi. I'm always open to discussing new opportunities.",
  openGraph: {
    title: "Contact | Israel Olaleye",
    description:
      "Get in touch with Israel Olaleye for frontend development projects and collaborations.",
    url: "/contact",
  },
  twitter: {
    title: "Contact | Israel Olaleye",
    description:
      "Get in touch with Israel Olaleye for frontend development projects and collaborations.",
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
      {/* Header */}
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Get In Touch
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
          Have a project in mind or just want to chat? I&apos;d love to hear from you.
          Fill out the form below or reach out directly.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-800">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Send Me a Message</h2>
            <ContactForm />
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          {/* Contact Details */}
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>

            <div className="space-y-4">
              <a
                href="mailto:theisraelolaleye@gmail.com"
                className="flex items-start gap-4 text-gray-300 hover:text-blue-400 transition-colors group"
              >
                <FaEnvelope className="w-5 h-5 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-medium text-white">Email</p>
                  <p className="text-sm break-all">theisraelolaleye@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+2348103874770"
                className="flex items-start gap-4 text-gray-300 hover:text-blue-400 transition-colors group"
              >
                <FaPhone className="w-5 h-5 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <p className="text-sm">+234 810 387 4770</p>
                </div>
              </a>

              <div className="flex items-start gap-4 text-gray-300">
                <FaMapMarkerAlt className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Location</p>
                  <p className="text-sm">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h3 className="text-xl font-bold mb-6">Connect With Me</h3>

            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://github.com/theisraelolaleye"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 hover:scale-105 transition-all group"
              >
                <FaGithub className="w-8 h-8 group-hover:text-blue-400 transition-colors" />
                <span className="text-sm">GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/theisraelolaleye"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 hover:scale-105 transition-all group"
              >
                <FaLinkedin className="w-8 h-8 group-hover:text-blue-400 transition-colors" />
                <span className="text-sm">LinkedIn</span>
              </a>

              <a
                href="https://twitter.com/theisraelolal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 hover:scale-105 transition-all group"
              >
                <FaTwitter className="w-8 h-8 group-hover:text-blue-400 transition-colors" />
                <span className="text-sm">Twitter</span>
              </a>

              <a
                href="https://instagram.com/theisraelolaleye"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 hover:scale-105 transition-all group"
              >
                <FaInstagram className="w-8 h-8 group-hover:text-blue-400 transition-colors" />
                <span className="text-sm">Instagram</span>
              </a>
            </div>
          </div>

          {/* Availability */}
          <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl p-6 border border-blue-500/20">
            <h3 className="text-xl font-bold mb-3">Availability</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              I&apos;m currently available for freelance projects and full-time opportunities.
              I typically respond within 24 hours.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-400 font-medium">Available for work</span>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16 md:mt-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <h3 className="text-lg font-semibold mb-2 text-blue-400">
              What services do you offer?
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              I specialize in frontend development, WordPress development, e-commerce solutions,
              and UI/UX design. I can help with both new projects and improving existing ones.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <h3 className="text-lg font-semibold mb-2 text-blue-400">
              What is your typical response time?
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              I aim to respond to all inquiries within 24 hours during weekdays. For urgent
              matters, feel free to call me directly.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <h3 className="text-lg font-semibold mb-2 text-blue-400">
              Do you work on fixed-price or hourly projects?
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              I work on both models depending on the project scope. For well-defined projects,
              fixed-price works best. For ongoing work, hourly rates are more flexible.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <h3 className="text-lg font-semibold mb-2 text-blue-400">
              Can you help with an existing project?
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Absolutely! I&apos;m experienced in jumping into existing codebases, fixing bugs,
              adding features, and optimizing performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}