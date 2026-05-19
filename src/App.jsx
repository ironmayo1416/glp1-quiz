import { useState } from "react";
import { QUESTIONS, RESULT_TYPES, calcResult } from "./quizData";

// ─── SHARED STYLES ────────────────────────────────────────────────────────────
const S = {
  // Layout
  page: {
    minHeight: "100vh",
    background: "#F7F5F0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 1rem 4rem",
  },
  header: {
    width: "100%",
    maxWidth: 680,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1.5rem 0 0",
    marginBottom: "2rem",
  },
  card: {
    background: "#FFFFFF",
    borderRadius: 16,
    padding: "2.5rem 2.5rem",
    width: "100%",
    maxWidth: 640,
    boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 4px 20px rgba(0,0,0,0.04)",
  },

  // Typography
  serif: { fontFamily: "'DM Serif Display', serif" },
  sans: { fontFamily: "'DM Sans', sans-serif" },

  // Colors
  green: "#0F6E56",
  greenLight: "#E1F5EE",
  greenDark: "#085041",
  stone: "#F7F5F0",
  ink: "#1A1A1A",
  muted: "#6B6860",
  faint: "#A8A49E",
};

// ─── HEADER ──────────────────────────────────────────────────────────────────
function Header({ step, total }) {
  return (
    <div style={S.header}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: S.green,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"
              fill="white"
            />
            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" fill="none" />
            <path d="M8 12 L10.5 14.5 L16 9" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        </div>
        <div>
          <div
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: S.ink,
              letterSpacing: "-0.01em",
            }}
          >
            Dr. JJ Mayo
          </div>
          <div style={{ fontSize: 11, color: S.muted }}>GLP-1 Metabolic Rebuild</div>
        </div>
      </div>
      {step > 0 && step <= total && (
        <div style={{ fontSize: 13, color: S.muted }}>
          {step} / {total}
        </div>
      )}
    </div>
  );
}

// ─── PROGRESS BAR ─────────────────────────────────────────────────────────────
function ProgressBar({ pct }) {
  return (
    <div
      style={{
        height: 3,
        background: "#E8E6E1",
        borderRadius: 2,
        marginBottom: "2rem",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${pct}%`,
          background: S.green,
          borderRadius: 2,
          transition: "width 0.4s ease",
        }}
      />
    </div>
  );
}

// ─── INTRO SCREEN ─────────────────────────────────────────────────────────────
function IntroScreen({ onStart }) {
  return (
    <div style={S.card}>
      <div
        style={{
          display: "inline-block",
          background: S.greenLight,
          color: S.greenDark,
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          padding: "4px 10px",
          borderRadius: 6,
          marginBottom: "1.5rem",
        }}
      >
        Free Assessment · 90 seconds
      </div>

      <h1
        style={{
          ...S.serif,
          fontSize: "clamp(26px, 5vw, 34px)",
          lineHeight: 1.25,
          color: S.ink,
          marginBottom: "1rem",
        }}
      >
        Why Has Your Weight Loss Stalled on GLP-1?
      </h1>

      <p
        style={{
          fontSize: 16,
          color: S.muted,
          lineHeight: 1.7,
          marginBottom: "2rem",
        }}
      >
        You're paying hundreds of dollars a month for medication that worked —
        and now it doesn't. Answer 10 questions and find out exactly which of
        the 4 plateau patterns is keeping you stuck, plus a personalized
        3-step protocol to break through it.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          marginBottom: "2rem",
        }}
      >
        {[
          "Discover your specific plateau type",
          "Get a 3-step personalized protocol",
          "Understand why eating less made it worse",
        ].map((item) => (
          <div
            key={item}
            style={{ display: "flex", alignItems: "center", gap: 10 }}
          >
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                background: S.greenLight,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                <path
                  d="M1 4L3.5 6.5L9 1"
                  stroke={S.green}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span style={{ fontSize: 15, color: S.ink }}>{item}</span>
          </div>
        ))}
      </div>

      <button
        onClick={onStart}
        style={{
          width: "100%",
          padding: "0.9rem",
          background: S.green,
          color: "white",
          border: "none",
          borderRadius: 10,
          fontSize: 16,
          fontWeight: 600,
          cursor: "pointer",
          fontFamily: "'DM Sans', sans-serif",
          letterSpacing: "-0.01em",
          transition: "background 0.15s",
        }}
        onMouseEnter={(e) => (e.target.style.background = S.greenDark)}
        onMouseLeave={(e) => (e.target.style.background = S.green)}
      >
        Find Out Why I'm Stuck →
      </button>

      <p
        style={{
          fontSize: 12,
          color: S.faint,
          textAlign: "center",
          marginTop: "1rem",
        }}
      >
        No spam. No sales pitch. Just your results.
      </p>
    </div>
  );
}

// ─── QUESTION SCREEN ──────────────────────────────────────────────────────────
function QuestionScreen({ question, stepNum, total, selected, onSelect, onNext, onBack }) {
  const pct = Math.round((stepNum / total) * 100);

  return (
    <div style={S.card}>
      <ProgressBar pct={pct} />

      <div
        style={{
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: S.green,
          marginBottom: "0.5rem",
        }}
      >
        Question {stepNum} of {total}
      </div>

      <h2
        style={{
          ...S.serif,
          fontSize: "clamp(18px, 4vw, 22px)",
          lineHeight: 1.35,
          color: S.ink,
          marginBottom: "1.75rem",
          fontWeight: 400,
        }}
      >
        {question.text}
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {question.options.map((opt, i) => {
          const isSelected = selected === opt;
          return (
            <button
              key={i}
              onClick={() => onSelect(opt)}
              style={{
                textAlign: "left",
                padding: "0.875rem 1.125rem",
                background: isSelected ? S.greenLight : "#FAFAF8",
                border: `1.5px solid ${isSelected ? S.green : "#E8E6E1"}`,
                borderRadius: 10,
                fontSize: 15,
                color: isSelected ? S.greenDark : S.ink,
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: isSelected ? 500 : 400,
                lineHeight: 1.5,
                transition: "all 0.12s ease",
              }}
              onMouseEnter={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.borderColor = S.green;
                  e.currentTarget.style.background = "#F0FAF6";
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.borderColor = "#E8E6E1";
                  e.currentTarget.style.background = "#FAFAF8";
                }
              }}
            >
              {opt.label}
            </button>
          );
        })}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "1.75rem",
        }}
      >
        <button
          onClick={onBack}
          style={{
            background: "none",
            border: "none",
            color: S.muted,
            fontSize: 14,
            cursor: "pointer",
            padding: 0,
            fontFamily: "'DM Sans', sans-serif",
            visibility: stepNum === 1 ? "hidden" : "visible",
          }}
        >
          ← Back
        </button>

        <button
          onClick={onNext}
          disabled={!selected}
          style={{
            padding: "0.6rem 1.5rem",
            background: selected ? S.green : "#E8E6E1",
            color: selected ? "white" : S.faint,
            border: "none",
            borderRadius: 8,
            fontSize: 15,
            fontWeight: 500,
            cursor: selected ? "pointer" : "default",
            fontFamily: "'DM Sans', sans-serif",
            transition: "all 0.15s",
          }}
        >
          {stepNum === total ? "See my results" : "Next →"}
        </button>
      </div>
    </div>
  );
}

// ─── EMAIL GATE ───────────────────────────────────────────────────────────────
function GateScreen({ onSubmit, onSkip }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email) return;
    setLoading(true);

    // ── POST to GoHighLevel webhook ──────────────────────────────────────────
    // Replace YOUR_GHL_WEBHOOK_URL below with your actual GHL webhook endpoint.
    // In GHL: Automations → New Workflow → Trigger: Webhook → copy the URL.
    // The payload keys (firstName, email) map to GHL contact fields automatically.
    // ────────────────────────────────────────────────────────────────────────
   const GHL_WEBHOOK_URL = "https://link.flowi.io/widget/form/2GwElu5DXX5nfWoGqEBY";

    try {
      const params = new URLSearchParams({
        first_name: name,
        email: email,
      });
      await fetch(`${GHL_WEBHOOK_URL}?${params.toString()}`, {
        method: "GET",
        mode: "no-cors",
      });
    } catch (err) {
      console.warn("GHL form error:", err);
    }

    setLoading(false);
    onSubmit({ name, email });
  };

  const inputStyle = {
    width: "100%",
    padding: "0.75rem 1rem",
    fontSize: 15,
    border: "1.5px solid #E8E6E1",
    borderRadius: 8,
    fontFamily: "'DM Sans', sans-serif",
    background: "#FAFAF8",
    color: S.ink,
    outline: "none",
  };

  return (
    <div style={S.card}>
      <ProgressBar pct={100} />

      <div style={{ textAlign: "center" }}>
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: S.greenLight,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1.25rem",
          }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 12l2 2 4-4"
              stroke={S.green}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="12" r="9" stroke={S.green} strokeWidth="1.5" />
          </svg>
        </div>

        <h2
          style={{
            ...S.serif,
            fontSize: "clamp(22px, 4vw, 28px)",
            color: S.ink,
            marginBottom: "0.6rem",
            fontWeight: 400,
          }}
        >
          Your results are ready
        </h2>
        <p
          style={{
            fontSize: 15,
            color: S.muted,
            lineHeight: 1.65,
            marginBottom: "2rem",
            maxWidth: 380,
            margin: "0 auto 2rem",
          }}
        >
          Enter your name and email to see your plateau type, what's driving it,
          and your personalized 3-step protocol.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            maxWidth: 360,
            margin: "0 auto",
          }}
        >
          <input
            style={inputStyle}
            type="text"
            placeholder="First name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={(e) => (e.target.style.borderColor = S.green)}
            onBlur={(e) => (e.target.style.borderColor = "#E8E6E1")}
          />
          <input
            style={inputStyle}
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={(e) => (e.target.style.borderColor = S.green)}
            onBlur={(e) => (e.target.style.borderColor = "#E8E6E1")}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />
          <button
            onClick={handleSubmit}
            disabled={!email || loading}
            style={{
              width: "100%",
              padding: "0.85rem",
              background: email ? S.green : "#E8E6E1",
              color: email ? "white" : S.faint,
              border: "none",
              borderRadius: 8,
              fontSize: 16,
              fontWeight: 600,
              cursor: email ? "pointer" : "default",
              fontFamily: "'DM Sans', sans-serif",
              marginTop: 4,
              transition: "background 0.15s",
            }}
          >
            {loading ? "Sending…" : "Show My Results →"}
          </button>
        </div>

        <button
          onClick={onSkip}
          style={{
            background: "none",
            border: "none",
            color: S.faint,
            fontSize: 13,
            cursor: "pointer",
            marginTop: "1rem",
            fontFamily: "'DM Sans', sans-serif",
            textDecoration: "underline",
          }}
        >
          Skip — show results without saving
        </button>

        <p
          style={{
            fontSize: 11,
            color: S.faint,
            marginTop: "0.75rem",
          }}
        >
          No spam. Unsubscribe anytime. Your info stays private.
        </p>
      </div>
    </div>
  );
}

// ─── SCORE BAR ────────────────────────────────────────────────────────────────
function ScoreBar({ label, pct, isWinner, color }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 8,
      }}
    >
      <div
        style={{
          fontSize: 12,
          color: isWinner ? S.ink : S.muted,
          fontWeight: isWinner ? 600 : 400,
          minWidth: 140,
        }}
      >
        {label}
      </div>
      <div
        style={{
          flex: 1,
          height: 6,
          background: "#E8E6E1",
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${pct}%`,
            background: isWinner ? color : "#C8C5BF",
            borderRadius: 3,
            transition: "width 0.8s ease",
          }}
        />
      </div>
      <div
        style={{
          fontSize: 12,
          color: isWinner ? S.ink : S.faint,
          minWidth: 32,
          textAlign: "right",
          fontWeight: isWinner ? 600 : 400,
        }}
      >
        {pct}%
      </div>
    </div>
  );
}

// ─── RESULT SCREEN ────────────────────────────────────────────────────────────
function ResultScreen({ result, totals, userName, onRestart }) {
  const t = RESULT_TYPES[result];
  const maxScore = Math.max(...Object.values(totals));
  const typeLabels = {
    A: "Metabolic Slowdown",
    B: "Metabolic Window",
    C: "Muscle Loss",
    D: "Lifestyle Interference",
  };

  const greeting = userName ? `${userName}, you're in the ` : "You're in the ";

  return (
    <div style={{ width: "100%", maxWidth: 640 }}>
      {/* Result header card */}
      <div
        style={{
          ...S.card,
          borderTop: `4px solid ${t.borderColor}`,
          marginBottom: "1.25rem",
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: t.bgLight,
            color: t.color,
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "4px 10px",
            borderRadius: 6,
            marginBottom: "1rem",
          }}
        >
          Your plateau type
        </div>

        <h2
          style={{
            ...S.serif,
            fontSize: "clamp(22px, 5vw, 30px)",
            color: S.ink,
            lineHeight: 1.25,
            marginBottom: "0.4rem",
            fontWeight: 400,
          }}
        >
          {greeting}
          <span style={{ color: t.color }}>{t.label}</span>
        </h2>

        <p
          style={{
            fontSize: 15,
            color: S.muted,
            fontStyle: "italic",
            marginBottom: "1.25rem",
          }}
        >
          {t.subtitle}
        </p>

        <p
          style={{
            fontSize: 15,
            color: S.muted,
            lineHeight: 1.75,
            marginBottom: "1.5rem",
          }}
        >
          {t.description}
        </p>

        {/* Score breakdown */}
        <div
          style={{
            background: "#FAFAF8",
            borderRadius: 10,
            padding: "1rem 1.25rem",
            marginBottom: "0.25rem",
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              color: S.muted,
              marginBottom: "0.75rem",
            }}
          >
            How your answers scored
          </div>
          {Object.entries(typeLabels).map(([k, label]) => {
            const pct = maxScore > 0 ? Math.round((totals[k] / maxScore) * 100) : 0;
            return (
              <ScoreBar
                key={k}
                label={label}
                pct={pct}
                isWinner={k === result}
                color={t.color}
              />
            );
          })}
        </div>
      </div>

      {/* Protocol card */}
      <div style={{ ...S.card, marginBottom: "1.25rem" }}>
        <div
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: S.muted,
            marginBottom: "1.25rem",
          }}
        >
          Your 3-step protocol
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {t.steps.map((step, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 14,
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  minWidth: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: t.bgLight,
                  color: t.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 13,
                  fontWeight: 700,
                  flexShrink: 0,
                  marginTop: 1,
                }}
              >
                {i + 1}
              </div>
              <div>
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: S.ink,
                    marginBottom: "0.3rem",
                  }}
                >
                  {step.title}
                </div>
                <div
                  style={{ fontSize: 14, color: S.muted, lineHeight: 1.65 }}
                >
                  {step.body}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Urgency callout */}
        <div
          style={{
            background: t.bgLight,
            borderLeft: `3px solid ${t.borderColor}`,
            borderRadius: "0 8px 8px 0",
            padding: "0.875rem 1rem",
            marginTop: "1.5rem",
            fontSize: 14,
            color: t.color,
            lineHeight: 1.6,
          }}
        >
          <strong style={{ fontWeight: 600 }}>Note: </strong>
          {t.urgency}
        </div>
      </div>

      {/* CTA card */}
      <div
        style={{
          ...S.card,
          background: S.greenDark,
          marginBottom: "1rem",
        }}
      >
        <div
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.5)",
            marginBottom: "0.75rem",
          }}
        >
          Ready to fix this in 12 weeks?
        </div>
        <h3
          style={{
            ...S.serif,
            fontSize: "clamp(18px, 4vw, 22px)",
            color: "white",
            lineHeight: 1.3,
            marginBottom: "0.75rem",
            fontWeight: 400,
          }}
        >
          The GLP-1 Metabolic Rebuild Program is built specifically for your plateau type.
        </h3>
        <p
          style={{
            fontSize: 14,
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.65,
            marginBottom: "1.5rem",
          }}
        >
          Dr. JJ Mayo helps women over 40 break through their GLP-1 plateau —
          losing fat, protecting muscle, and getting confident about how to eat
          and move on medication. Real results, not generic advice.
        </p>
        <a
          href="https://jjmayo.com/bookacall"  // ← swap with your booking/sales page URL
          target="_blank"
          rel="noreferrer"
          style={{
            display: "block",
            width: "100%",
            textAlign: "center",
            padding: "0.9rem",
            background: "#10B981",
            color: "white",
            border: "none",
            borderRadius: 10,
            fontSize: 16,
            fontWeight: 600,
            cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif",
            textDecoration: "none",
            letterSpacing: "-0.01em",
          }}
        >
          Book a Free Metabolic Assessment →
        </a>
        <p
          style={{
            fontSize: 12,
            color: "rgba(255,255,255,0.4)",
            textAlign: "center",
            marginTop: "0.75rem",
          }}
        >
          No obligation. 30-minute call. Spots are limited.
        </p>
      </div>

      <div style={{ textAlign: "center" }}>
        <button
          onClick={onRestart}
          style={{
            background: "none",
            border: "none",
            color: S.faint,
            fontSize: 13,
            cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif",
            textDecoration: "underline",
          }}
        >
          Start over
        </button>
      </div>
    </div>
  );
}

// ─── APP ROOT ─────────────────────────────────────────────────────────────────
export default function App() {
  const [phase, setPhase] = useState("intro"); // intro | quiz | gate | result
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [resultData, setResultData] = useState(null);
  const [userName, setUserName] = useState("");

  const total = QUESTIONS.length;

  function handleStart() {
    setPhase("quiz");
    setStep(0);
  }

  function handleSelect(opt) {
    setAnswers((prev) => ({ ...prev, [step]: opt }));
  }

  function handleNext() {
    if (!answers[step]) return;
    if (step === total - 1) {
      setPhase("gate");
    } else {
      setStep((s) => s + 1);
    }
  }

  function handleBack() {
    if (step > 0) setStep((s) => s - 1);
  }

  function showResult(info) {
    if (info?.name) setUserName(info.name);
    const { winner, totals } = calcResult(answers);
    setResultData({ winner, totals });
    setPhase("result");
  }

  function handleRestart() {
    setPhase("intro");
    setStep(0);
    setAnswers({});
    setResultData(null);
    setUserName("");
  }

  return (
    <div style={S.page}>
      <Header step={phase === "quiz" ? step + 1 : phase === "gate" ? total : 0} total={total} />

      {phase === "intro" && <IntroScreen onStart={handleStart} />}

      {phase === "quiz" && (
        <QuestionScreen
          question={QUESTIONS[step]}
          stepNum={step + 1}
          total={total}
          selected={answers[step] || null}
          onSelect={handleSelect}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}

      {phase === "gate" && (
        <GateScreen
          onSubmit={(info) => showResult(info)}
          onSkip={() => showResult(null)}
        />
      )}

      {phase === "result" && resultData && (
        <ResultScreen
          result={resultData.winner}
          totals={resultData.totals}
          userName={userName}
          onRestart={handleRestart}
        />
      )}

      {/* Footer */}
      <div
        style={{
          marginTop: "3rem",
          fontSize: 12,
          color: S.faint,
          textAlign: "center",
        }}
      >
        © {new Date().getFullYear()} Dr. JJ Mayo · GLP-1 Metabolic Rebuild
      </div>
    </div>
  );
}
