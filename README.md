# GLP-1 Plateau Diagnosis Quiz
### Dr. JJ Mayo · GLP-1 Metabolic Rebuild

A 10-question lead magnet quiz that diagnoses which of the 4 plateau patterns
a woman is experiencing on GLP-1 medication. Captures email before showing results
and sends leads directly to GoHighLevel via webhook.

---

## Before You Deploy — 2 Things to Swap

Open `src/App.jsx` and find these two lines:

### 1. GoHighLevel Webhook URL (line ~130)
```js
const GHL_WEBHOOK_URL = "YOUR_GHL_WEBHOOK_URL";
```
Replace with your actual GHL webhook URL.

**How to get your GHL webhook URL:**
1. Go to Automations → New Workflow
2. Set the trigger to **Webhook**
3. Copy the webhook URL shown
4. Paste it above

The quiz sends: `{ firstName, email, source: "GLP1 Plateau Quiz", tags: ["quiz-lead", "glp1-plateau"] }`

### 2. CTA Button URL (line ~305)
```js
href="https://jjmayo.com"
```
Replace with your booking page, sales page, or discovery call link.

---

## Deploy to Vercel (Free — 5 minutes)

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Click Deploy — done

Your quiz will be live at `your-project.vercel.app`

---

## Embed in GoHighLevel

Once deployed, add this to any GHL page or funnel:

```html
<iframe
  src="https://your-project.vercel.app"
  width="100%"
  height="900"
  frameborder="0"
  style="border: none; border-radius: 12px;"
></iframe>
```

For a full-page experience, set height to `100vh` or use a custom page in GHL
with the iframe filling the content area.

---

## To Edit Questions or Results

All quiz content lives in one file: `src/quizData.js`

- **Questions:** Edit the `QUESTIONS` array — change text, options, or scoring
- **Result types:** Edit the `RESULT_TYPES` object — change descriptions, steps, urgency copy
- **Scoring logic:** Each answer option has a `scores` object `{ A, B, C, D }` — the highest
  total at the end of the quiz determines the result type shown

---

## Local Development

```bash
npm install
npm start
```

Opens at `http://localhost:3000`

---

## Tech Stack
- React 18
- No external UI libraries — fully custom CSS
- DM Sans + DM Serif Display (Google Fonts)
- Sends leads to GoHighLevel via webhook POST
