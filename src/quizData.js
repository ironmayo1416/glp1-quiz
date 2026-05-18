export const QUESTIONS = [
  {
    id: 1,
    text: "How long have you been on a GLP-1 medication (Ozempic, Wegovy, Mounjaro, or Zepbound)?",
    options: [
      { label: "Less than 2 months", scores: { A: 0, B: 1, C: 0, D: 0 } },
      { label: "2–4 months", scores: { A: 1, B: 2, C: 1, D: 0 } },
      { label: "4–8 months", scores: { A: 2, B: 1, C: 2, D: 1 } },
      { label: "8+ months", scores: { A: 1, B: 0, C: 2, D: 2 } },
    ],
  },
  {
    id: 2,
    text: "How would you describe your appetite most days since starting the medication?",
    options: [
      { label: "Still pretty normal — I get hungry regularly", scores: { A: 0, B: 2, C: 1, D: 1 } },
      { label: "Reduced — I can skip meals but I'm not miserable", scores: { A: 1, B: 1, C: 1, D: 1 } },
      { label: "Very suppressed — food rarely sounds good", scores: { A: 2, B: 0, C: 2, D: 1 } },
      { label: "Inconsistent — some days nothing, some days I overeat", scores: { A: 1, B: 1, C: 0, D: 2 } },
    ],
  },
  {
    id: 3,
    text: "Roughly how much protein are you eating per day?",
    options: [
      { label: "I honestly don't track it", scores: { A: 1, B: 1, C: 2, D: 1 } },
      { label: "Under 60 grams", scores: { A: 1, B: 0, C: 3, D: 1 } },
      { label: "60–100 grams", scores: { A: 1, B: 1, C: 1, D: 0 } },
      { label: "Over 100 grams consistently", scores: { A: 0, B: 2, C: 0, D: 0 } },
    ],
  },
  {
    id: 4,
    text: "How many calories do you estimate you're eating on most days?",
    options: [
      { label: "Under 800 calories", scores: { A: 3, B: 0, C: 2, D: 1 } },
      { label: "800–1,100 calories", scores: { A: 2, B: 1, C: 1, D: 1 } },
      { label: "1,100–1,400 calories", scores: { A: 0, B: 2, C: 0, D: 1 } },
      { label: "I don't track — I just eat when hungry", scores: { A: 1, B: 1, C: 2, D: 1 } },
    ],
  },
  {
    id: 5,
    text: "How would you describe your current exercise routine?",
    options: [
      { label: "Little to no exercise", scores: { A: 1, B: 1, C: 3, D: 1 } },
      { label: "Mostly cardio (walking, cycling, classes)", scores: { A: 1, B: 1, C: 2, D: 1 } },
      { label: "Some strength training — inconsistent", scores: { A: 0, B: 2, C: 1, D: 1 } },
      { label: "Regular strength training 2–3x per week", scores: { A: 0, B: 3, C: 0, D: 0 } },
    ],
  },
  {
    id: 6,
    text: "How has your body composition felt over the past several weeks?",
    options: [
      { label: "Softer or flabbier even though the scale moves", scores: { A: 1, B: 0, C: 3, D: 1 } },
      { label: "Weaker — workouts feel harder than they used to", scores: { A: 2, B: 0, C: 2, D: 1 } },
      { label: "About the same, just less of it", scores: { A: 0, B: 2, C: 0, D: 1 } },
      { label: "The scale barely moves — nothing seems to be changing", scores: { A: 2, B: 1, C: 1, D: 2 } },
    ],
  },
  {
    id: 7,
    text: "How are your energy levels most days?",
    options: [
      { label: "Exhausted — especially mid-afternoon", scores: { A: 2, B: 0, C: 2, D: 1 } },
      { label: "Low but functional", scores: { A: 1, B: 1, C: 1, D: 1 } },
      { label: "Decent — better than before I started", scores: { A: 0, B: 2, C: 0, D: 1 } },
      { label: "Inconsistent — crash and burn patterns", scores: { A: 1, B: 0, C: 1, D: 3 } },
    ],
  },
  {
    id: 8,
    text: "How is your sleep and stress level these days?",
    options: [
      { label: "Poor sleep, high stress — most nights under 6 hours", scores: { A: 1, B: 0, C: 0, D: 3 } },
      { label: "Moderate stress, inconsistent sleep", scores: { A: 1, B: 1, C: 0, D: 2 } },
      { label: "Stress is manageable, sleep is okay", scores: { A: 0, B: 1, C: 1, D: 1 } },
      { label: "I sleep well and feel low-stress most days", scores: { A: 0, B: 2, C: 1, D: 0 } },
    ],
  },
  {
    id: 9,
    text: "How long has your weight loss been stalled or significantly slowed?",
    options: [
      { label: "Less than 2 weeks", scores: { A: 0, B: 1, C: 0, D: 1 } },
      { label: "2–6 weeks", scores: { A: 1, B: 1, C: 1, D: 1 } },
      { label: "6 weeks to 3 months", scores: { A: 2, B: 1, C: 2, D: 2 } },
      { label: "More than 3 months", scores: { A: 3, B: 1, C: 2, D: 2 } },
    ],
  },
  {
    id: 10,
    text: "What is your biggest fear right now?",
    options: [
      { label: "That the medication has stopped working and I've wasted money", scores: { A: 2, B: 1, C: 1, D: 1 } },
      { label: "That I'm losing muscle and won't be able to get it back", scores: { A: 0, B: 0, C: 3, D: 1 } },
      { label: "That I'll gain the weight back if I stop or reduce the dose", scores: { A: 1, B: 2, C: 1, D: 2 } },
      { label: "That no matter what I do, I just can't make this work", scores: { A: 1, B: 1, C: 1, D: 3 } },
    ],
  },
];

export const RESULT_TYPES = {
  A: {
    key: "A",
    label: "Metabolic Slowdown Loop",
    subtitle: "Eating less locked you in — not the medication.",
    color: "#B45309",
    bgLight: "#FFFBEB",
    borderColor: "#F59E0B",
    description:
      "Your body has adapted to very low calorie intake by dramatically slowing its metabolism. This is a pattern I see often — a client comes in eating around 900 calories a day and has actually started gaining weight. It sounds backwards, but eating less is what locked in your plateau. Your metabolism has downshifted to match your intake, making fat loss nearly impossible until we break the cycle strategically.",
    urgency:
      "This plateau pattern can become self-reinforcing the longer it continues. The sooner you correct it, the faster the scale moves again.",
    steps: [
      {
        title: "Increase calories strategically",
        body: "Raise daily intake in phases — not all at once — to signal metabolic safety without triggering fat storage.",
      },
      {
        title: "Prioritize protein first",
        body: "Set a protein-first eating strategy so your body has the raw material to preserve and rebuild lean muscle as intake rises.",
      },
      {
        title: "Add resistance training",
        body: "Even 2 sessions per week sends a powerful signal that your body should hold onto muscle, not break it down for fuel.",
      },
    ],
  },
  B: {
    key: "B",
    label: "Underutilized Metabolic Window",
    subtitle: "The window is open — but you haven't stepped through it yet.",
    color: "#065F46",
    bgLight: "#ECFDF5",
    borderColor: "#10B981",
    description:
      "Your GLP-1 appetite suppression is working — but you haven't paired it with the strategy to make it count. This is the most common pattern in the first 6 months. The medication is giving you a powerful window to rebuild your metabolism, but without the right protein intake, strength training, and fueling system, you're leaving most of that opportunity on the table.",
    urgency:
      "You're in the best position of the four patterns — the window is open right now. The key is acting on it before your body fully adapts.",
    steps: [
      {
        title: "Lock in your protein target",
        body: "Calculate your personalized daily protein goal based on body weight. This single change often breaks a stalled plateau within 2–3 weeks.",
      },
      {
        title: "Add resistance training 2–3x per week",
        body: "Convert appetite suppression into real metabolic improvement by giving your body a reason to build, not just shrink.",
      },
      {
        title: "Build a low-appetite nutrition framework",
        body: "Create a simple system for hitting protein targets even on days when food doesn't sound appealing.",
      },
    ],
  },
  C: {
    key: "C",
    label: "Silent Muscle Loss Plateau",
    subtitle: "The scale may move — but underneath, something important is being lost.",
    color: "#7C3AED",
    bgLight: "#F5F3FF",
    borderColor: "#8B5CF6",
    description:
      "This is the pattern that concerns me most. Your weight may be dropping — or stalling — but underneath, muscle loss is quietly happening. Low protein plus low or no strength training on GLP-1 creates a state where your body breaks down muscle for fuel. Less muscle means a slower metabolism. A slower metabolism means your plateau is structural, not temporary.",
    urgency:
      "Muscle loss accelerates the longer protein and training stay under-supported. This is very fixable — but time matters.",
    steps: [
      {
        title: "Hit your minimum protein target today",
        body: "For most women this means roughly 0.7–1g per pound of ideal body weight. This is the single most important number on GLP-1.",
      },
      {
        title: "Begin a muscle-preserving training protocol",
        body: "Standard gym workouts aren't designed for GLP-1 users. You need resistance training specifically structured for low-calorie metabolic conditions.",
      },
      {
        title: "Track body composition, not just weight",
        body: "Request a DEXA scan or InBody assessment so you can track fat vs. muscle — not just a number on the scale.",
      },
    ],
  },
  D: {
    key: "D",
    label: "Lifestyle Interference Pattern",
    subtitle: "It's not just what you eat — it's what your nervous system is doing while you eat.",
    color: "#9F1239",
    bgLight: "#FFF1F2",
    borderColor: "#F43F5E",
    description:
      "Your plateau is being driven less by what you're eating and more by what's happening around it — cortisol from chronic stress, disrupted sleep, inconsistent patterns, and an environment that keeps pulling you off course. GLP-1 quiets physical hunger, but it doesn't quiet cortisol. And cortisol is a powerful driver of fat storage, especially around the midsection. No nutrition plan fully overcomes a dysregulated nervous system.",
    urgency:
      "Lifestyle interference compounds over time and can quietly undermine an otherwise solid nutrition and training plan.",
    steps: [
      {
        title: "Identify your top cortisol drivers",
        body: "Pinpoint your 2–3 highest-stress lifestyle factors — sleep duration, eating environment, emotional triggers — and build one targeted habit around each.",
      },
      {
        title: "Stabilize your eating pattern",
        body: "Consistent meal timing and amounts — even on low-appetite days — sends clear metabolic signals and prevents the crash-and-overeat cycle.",
      },
      {
        title: "Build an emotional eating protocol",
        body: "Stress-driven cravings are hormonal, not a willpower failure. You need a specific strategy for when medication effect wears off and emotion takes over.",
      },
    ],
  },
};

export function calcResult(answers) {
  const totals = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach((opt) => {
    Object.entries(opt.scores).forEach(([k, v]) => {
      totals[k] += v;
    });
  });
  return {
    winner: Object.entries(totals).sort((a, b) => b[1] - a[1])[0][0],
    totals,
  };
}
