"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_4w6zzms";
const TEMPLATE_ID = "template_bkp1fkj";
const PUBLIC_KEY = "PFCpXMu5q-zeQR8VB";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [sendError, setSendError] = useState("");

  function validate() {
    const newErrors = { name: "", email: "", message: "" };
    let valid = true;
    if (!form.name.trim()) {
      newErrors.name = "Name is required.";
      valid = false;
    }
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
      valid = false;
    }
    if (!form.message.trim()) {
      newErrors.message = "Message is required.";
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  }

  async function handleSubmit() {
    if (!validate()) return;
    setSending(true);
    setSendError("");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        PUBLIC_KEY,
      );
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } catch {
      setSendError("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Get In <span className="text-cyan-500 dark:text-cyan-400">Touch</span>
        </h2>
        <p className="text-center text-gray-500 dark:text-slate-400 mb-12">
          Have a project in mind or just want to say hi? Feel free to reach out!
        </p>

        {submitted ? (
          <div className="bg-cyan-50 dark:bg-cyan-900/40 border border-cyan-200 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-300 p-6 rounded-2xl text-center font-medium">
            Message sent successfully! I will get back to you soon.
          </div>
        ) : (
          <div className="flex flex-col gap-4 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg">
            <div>
              <label className="block text-gray-700 dark:text-slate-300 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-gray-900 dark:text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Your name"
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-gray-700 dark:text-slate-300 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-gray-900 dark:text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Your email"
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-gray-700 dark:text-slate-300 font-medium mb-1">
                Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-gray-900 dark:text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Your message"
                rows={5}
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {sendError && <p className="text-red-400 text-sm text-center">{sendError}</p>}

            <button
              onClick={handleSubmit}
              disabled={sending}
              className="bg-cyan-500 text-white dark:text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 transition-all duration-300 hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </div>
        )}

        <div className="mt-10 text-center text-gray-500 dark:text-slate-400">
          <p>
            Or reach me directly at:
            <span className="text-cyan-600 dark:text-cyan-400 ml-1">
              roydeoortilano@gmail.com
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}