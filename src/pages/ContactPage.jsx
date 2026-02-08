import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useLocation } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { CONTACT_INFO, SERVICES } from "../data";
// import SectionHeading from "../components/ui/SectionHeading";

/* INITIAL FORM STATE */
const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  phone: "",
  service: "",
  mode: "",
  message: "",
};

const ContactPage = () => {
  const nameInputRef = useRef(null);
  const formCardRef = useRef(null); // NEW
  const location = useLocation();
  const selectedService = location.state?.service || "";
  const presetMessage = location.state?.message || "";

  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // NEW

  useEffect(() => {
    if (selectedService) {
      document
        .getElementById("contact-form")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });

      setTimeout(() => {
        nameInputRef.current?.focus();
      }, 400);
    }
  }, [selectedService]);

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({
        ...prev,
        service: selectedService,
      }));
    }
  }, [selectedService]);

  useEffect(() => {
    if (presetMessage) {
      setFormData((prev) => ({
        ...prev,
        message: presetMessage,
      }));
      document
        .getElementById("contact-form")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });

      setTimeout(() => {
        nameInputRef.current?.focus();
      }, 400);
    }
  }, [presetMessage]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    const serviceLabel =
      SERVICES.find((service) => service.id === formData.service)?.title ||
      formData.service ||
      "Not selected";

    const modeLabel =
      formData.mode === "online"
        ? "Online"
        : formData.mode === "offline"
        ? "Offline"
        : "Not selected";

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || "Not provided",
      service: serviceLabel,
      mode: modeLabel,
      message: formData.message,
      date: new Date().toLocaleString(),
    };

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .send(serviceId, templateId, templateParams, { publicKey })
      .then(() => {
        setIsSubmitted(true);
        setIsSubmitting(false);

        /* CLEAR FORM DATA */
        setFormData({
          ...INITIAL_FORM_STATE,
          service: selectedService || "",
        });

        /* SCROLL + FOCUS FORM CARD */
        formCardRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        setTimeout(() => setIsSubmitted(false), 3000);
      })
      .catch((error) => {
        console.error("EmailJS send failed:", error);
        setIsSubmitting(false);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const focusFormWithMessage = (message) => {
    setFormData((prev) => ({ ...prev, message }));
    document
      .getElementById("contact-form")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => {
      nameInputRef.current?.focus();
    }, 400);
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative !pt-32 !pb-20 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5A623]/10 to-transparent" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F5A623]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <span className="text-[#F5A623] text-sm font-bold uppercase tracking-[0.2em] !mb-4 block">
              Get In Touch
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white !mb-6 leading-tight">
              Let's Start Your <br />
              <span className="gradient-text">Transformation</span>
            </h1>
            <p className="text-xl text-gray-400">
              Have questions about our classes or membership? We're here to help
              you take the first step.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="!py-24 bg-[#0A0A0A]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-white !mb-8">
                Contact Information
              </h2>

              <div className="space-y-8 !mb-12">
                <div className="flex items-start group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center !mr-6 shrink-0 group-hover:bg-[#F5A623] transition-colors">
                    <MapPin
                      size={24}
                      className="text-[#F5A623] group-hover:text-black transition-colors"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-white !mb-1">
                      Visit Our Studio
                    </h4>
                    <a
                      href={CONTACT_INFO.googleMaps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#F5A623] transition-colors"
                    >
                      <div dangerouslySetInnerHTML={{ __html: CONTACT_INFO.address }} />
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center !mr-6 shrink-0 group-hover:bg-[#F5A623] transition-colors">
                    <Phone
                      size={24}
                      className="text-[#F5A623] group-hover:text-black transition-colors"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-white !mb-1">Call Us</h4>
                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="text-gray-400 hover:text-[#F5A623] transition-colors"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center !mr-6 shrink-0 group-hover:bg-[#F5A623] transition-colors">
                    <Mail
                      size={24}
                      className="text-[#F5A623] group-hover:text-black transition-colors"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-white !mb-1">Email Us</h4>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-gray-400 hover:text-[#F5A623] transition-colors"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center !mr-6 shrink-0 group-hover:bg-[#F5A623] transition-colors">
                    <Clock
                      size={24}
                      className="text-[#F5A623] group-hover:text-black transition-colors"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-white !mb-1">Studio Hours</h4>
                    <p className="text-gray-400">
                      Weekdays: {CONTACT_INFO.hours.weekdays}
                      <br />
                      Weekends: {CONTACT_INFO.hours.weekends}
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <a
                href={CONTACT_INFO.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1A1A1A] rounded-2xl overflow-hidden h-64 relative border border-white/10 block group/map hover:border-[#F5A623]/50 transition-all"
              >
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <MapPin
                      size={48}
                      className="mx-auto !mb-4 text-[#F5A623]/50 group-hover:text-[#F5A623] group-hover:scale-110 transition-all"
                    />
                    <p className="text-white font-medium">
                      View Interactive Map
                    </p>
                    <p className="text-sm text-gray-600">
                      <div dangerouslySetInnerHTML={{ __html: CONTACT_INFO.address }} />
                    </p>
                  </div>
                </div>
              </a>
            </div>

            {/* Contact Form */}
            <div>
              <div
                id="contact-form"
                ref={formCardRef} //NEW
                className="bg-[#1A1A1A] rounded-3xl !p-8 lg:!p-10 border border-white/10"
              >
                <h3 className="text-2xl font-bold text-white !mb-2">
                  Send Us a Message
                </h3>
                <p className="text-gray-500 !mb-8">
                  We'll get back to you within 24 hours
                </p>

                {isSubmitted ? (
                  <div className="text-center !py-16">
                    <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto !mb-6">
                      <CheckCircle size={40} className="text-green-500" />
                    </div>
                    <h4 className="text-xl font-bold text-white !mb-2">
                      Message Sent!
                    </h4>
                    <p className="text-gray-400">We'll be in touch soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 !mb-2">
                        Full Name
                      </label>
                      <input
                        ref={nameInputRef}
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-xl !px-4 !py-3.5 text-white placeholder-gray-500 focus:border-[#F5A623]"
                      />
                    </div>

                    {/* Phone & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 xxxxx xxxxx"
                        className="w-full bg-white/5 border border-white/10 rounded-xl !px-4 !py-3.5 text-white"
                      />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl !px-4 !py-3.5 text-white"
                      />
                    </div>

                    {/* Selects */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl !px-4 !py-3.5 text-white"
                      >
                        <option value="" className="text-black bg-white">Select a Service</option>
                        {SERVICES.map((service) => (
                          <option key={service.id} value={service.id} className="text-black bg-white">
                            {service.title}
                          </option>
                        ))}
                      </select>

                      <select
                        name="mode"
                        value={formData.mode}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl !px-4 !py-3.5 text-white"
                      >
                        <option value="" className="text-black bg-white">
                          Select Mode
                        </option>
                        <option value="online" className="text-black bg-white">
                          Online Classes
                        </option>
                        <option value="offline" className="text-black bg-white">
                          Offline Classes
                        </option>
                      </select>
                    </div>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      required
                      placeholder="Tell us about your fitness goals..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl !px-4 !py-3.5 text-white resize-none"
                    />

                    <button
                      type="submit"
                      disabled={isSubmitting} //DISABLE BUTTON
                      className={`w-full font-bold !py-4 rounded-xl flex items-center justify-center transition-all ${
                        isSubmitting
                          ? "bg-gray-500 cursor-not-allowed"
                          : "bg-[#F5A623] hover:bg-[#FFBE4D]"
                      }`}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send size={18} className="!ml-2" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="!py-16 bg-[#1A1A1A]">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 rounded-2xl !p-8 text-center hover:bg-white/10 transition-colors border border-white/5">
              <div className="w-16 h-16 rounded-2xl bg-[#F5A623]/10 flex items-center justify-center mx-auto !mb-4">
                <Mail size={28} className="text-[#F5A623]" />
              </div>
              <h4 className="text-lg font-bold text-white !mb-2">
                Book a Trial
              </h4>
              <p className="text-gray-500 text-sm !mb-4">
                Experience your first class free
              </p>
              <a
                href="#contact-form"
                onClick={(e) => {
                  e.preventDefault();
                  focusFormWithMessage(
                    "I want to book a trial. I'm interested in exploring the studio or classes."
                  );
                }}
                className="text-[#F5A623] font-semibold text-sm"
              >
                Book Now →
              </a>
            </div>
            <div className="bg-white/5 rounded-2xl !p-8 text-center hover:bg-white/10 transition-colors border border-white/5">
              <div className="w-16 h-16 rounded-2xl bg-[#F5A623]/10 flex items-center justify-center mx-auto !mb-4">
                <Phone size={28} className="text-[#F5A623]" />
              </div>
              <h4 className="text-lg font-bold text-white !mb-2">
                Schedule a Call
              </h4>
              <p className="text-gray-500 text-sm !mb-4">
                Speak with our wellness advisor
              </p>
              <a
                href="#contact-form"
                onClick={(e) => {
                  e.preventDefault();
                  focusFormWithMessage(
                    "I want to schedule a call. I'm interested in learning more."
                  );
                }}
                className="text-[#F5A623] font-semibold text-sm"
              >
                Schedule Now →
              </a>
            </div>
            <div className="bg-white/5 rounded-2xl !p-8 text-center hover:bg-white/10 transition-colors border border-white/5">
              <div className="w-16 h-16 rounded-2xl bg-[#F5A623]/10 flex items-center justify-center mx-auto !mb-4">
                <MapPin size={28} className="text-[#F5A623]" />
              </div>
              <h4 className="text-lg font-bold text-white !mb-2">
                Visit Studio
              </h4>
              <p className="text-gray-500 text-sm !mb-4">
                Take a tour of our facility
              </p>
              <a
                href={CONTACT_INFO.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5A623] font-semibold text-sm hover:underline"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;


