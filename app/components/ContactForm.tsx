"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}${phone ? `\nPhone: ${phone}` : ""}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:zakezelove@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(212, 175, 55, 0.04)",
    border: "1px solid rgba(212, 175, 55, 0.25)",
    borderRadius: "2px",
    padding: "10px 14px",
    color: "#f5f1e8",
    fontFamily: "var(--font-body)",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.3s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "var(--font-heading)",
    fontSize: "10px",
    letterSpacing: "0.25em",
    color: "rgba(212, 175, 55, 0.6)",
    marginBottom: "6px",
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 py-8">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="20"
            cy="20"
            r="18"
            stroke="#d4af37"
            strokeWidth="1.2"
            opacity="0.6"
          />
          <path
            d="M12 20 L18 26 L28 14"
            stroke="#d4af37"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p
          className="font-heading text-sm tracking-[0.2em] text-center"
          style={{ color: "rgba(212,175,55,0.85)" }}
        >
          YOUR MESSAGE HAS BEEN PREPARED
        </p>
        <p className="font-body text-cream/60 text-sm text-center leading-relaxed">
          Your email client should have opened with your message ready to send.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-2 font-heading text-[10px] tracking-[0.2em] text-cream/50 hover:text-accent-gold transition-colors duration-300"
        >
          ← SEND ANOTHER
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Name + Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label style={labelStyle}>YOUR NAME *</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Smith"
            style={inputStyle}
            onFocus={(e) =>
              (e.currentTarget.style.borderColor = "rgba(212,175,55,0.6)")
            }
            onBlur={(e) =>
              (e.currentTarget.style.borderColor = "rgba(212,175,55,0.25)")
            }
          />
        </div>
        <div>
          <label style={labelStyle}>EMAIL ADDRESS *</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@example.com"
            style={inputStyle}
            onFocus={(e) =>
              (e.currentTarget.style.borderColor = "rgba(212,175,55,0.6)")
            }
            onBlur={(e) =>
              (e.currentTarget.style.borderColor = "rgba(212,175,55,0.25)")
            }
          />
        </div>
      </div>

      {/* Phone */}
      <div>
        <label style={labelStyle}>TELEPHONE (OPTIONAL)</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+44 7000 000000"
          style={inputStyle}
          onFocus={(e) =>
            (e.currentTarget.style.borderColor = "rgba(212,175,55,0.6)")
          }
          onBlur={(e) =>
            (e.currentTarget.style.borderColor = "rgba(212,175,55,0.25)")
          }
        />
      </div>

      {/* Message */}
      <div>
        <label style={labelStyle}>YOUR ENQUIRY *</label>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Please describe your enquiry or the vehicle you are interested in…"
          rows={5}
          style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
          onFocus={(e) =>
            (e.currentTarget.style.borderColor = "rgba(212,175,55,0.6)")
          }
          onBlur={(e) =>
            (e.currentTarget.style.borderColor = "rgba(212,175,55,0.25)")
          }
        />
      </div>

      {/* Submit */}
      <div className="flex justify-center pt-2">
        <button
          type="submit"
          className="group relative font-heading text-[11px] tracking-[0.3em] px-10 py-3 transition-all duration-300"
          style={{
            color: "#d4af37",
            border: "1px solid rgba(212,175,55,0.45)",
            background: "rgba(212,175,55,0.05)",
            borderRadius: "2px",
            cursor: "pointer",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = "rgba(212,175,55,0.12)";
            e.currentTarget.style.borderColor = "rgba(212,175,55,0.7)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = "rgba(212,175,55,0.05)";
            e.currentTarget.style.borderColor = "rgba(212,175,55,0.45)";
          }}
        >
          SEND ENQUIRY
        </button>
      </div>
    </form>
  );
}
