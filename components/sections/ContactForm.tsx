"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  function validate(values: FormState) {
    const next: Partial<FormState> = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Please enter a valid email.";
    }
    if (!values.phone.trim() || values.phone.replace(/\D/g, "").length < 10) {
      next.phone = "Please enter a valid phone number.";
    }
    if (!values.message.trim() || values.message.trim().length < 10) {
      next.message = "Please share a short message (at least 10 characters).";
    }
    return next;
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm(initial);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      {(
        [
          { id: "name", label: "Name", type: "text" },
          { id: "email", label: "Email", type: "email" },
          { id: "phone", label: "Phone", type: "tel" },
        ] as const
      ).map((field) => (
        <div key={field.id}>
          <label
            htmlFor={field.id}
            className="mb-2 block text-sm font-semibold text-charcoal"
          >
            {field.label}
          </label>
          <input
            id={field.id}
            type={field.type}
            value={form[field.id]}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, [field.id]: e.target.value }))
            }
            className="w-full rounded-2xl border border-charcoal/10 bg-cream-soft px-4 py-3 text-charcoal outline-none transition focus:border-gold"
            aria-invalid={Boolean(errors[field.id])}
            aria-describedby={errors[field.id] ? `${field.id}-error` : undefined}
          />
          {errors[field.id] && (
            <p id={`${field.id}-error`} className="mt-1 text-sm text-red-700">
              {errors[field.id]}
            </p>
          )}
        </div>
      ))}

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-semibold text-charcoal"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, message: e.target.value }))
          }
          className="w-full resize-y rounded-2xl border border-charcoal/10 bg-cream-soft px-4 py-3 text-charcoal outline-none transition focus:border-gold"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-700">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center rounded-2xl bg-gold px-6 py-3 text-sm font-semibold text-cream transition hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-sm font-medium text-green-800" role="status">
          Thank you — your message was received. We&apos;ll be in touch soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm font-medium text-red-700" role="alert">
          Something went wrong. Please call us or try again.
        </p>
      )}
    </form>
  );
}
