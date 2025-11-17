import { useState } from "react";

const languages = ["English", "Spanish", "French", "German", "Portuguese"];
const roles = ["Student", "Entrepreneur", "Professional"];

const tips = {
  English: {
    Student: "Practice daily with short stories and vocabulary lists.",
    Entrepreneur: "Focus on business phrases and negotiation vocabulary.",
    Professional: "Improve technical writing and presentation skills."
  },
  Spanish: {
    Student: "Learn 10 new words daily and use them in sentences.",
    Entrepreneur: "Master common business expressions and polite forms.",
    Professional: "Practice industry-specific terms and formal writing."
  },
  French: {
    Student: "Use flashcards for verbs and grammar basics.",
    Entrepreneur: "Learn polite greetings and networking phrases.",
    Professional: "Focus on reports, emails, and technical vocabulary."
  },
  German: {
    Student: "Memorize key verbs and practice sentence building.",
    Entrepreneur: "Learn negotiation and contract vocabulary.",
    Professional: "Focus on precision in technical terms."
  },
  Portuguese: {
    Student: "Practice pronunciation with audio clips.",
    Entrepreneur: "Learn common business idioms.",
    Professional: "Focus on presentations and professional writing."
  }
};

export default function Home() {
  const [language, setLanguage] = useState("");
  const [role, setRole] = useState("");
  const [tip, setTip] = useState("");

  const getTip = () => {
    if (language && role) {
      setTip(tips[language][role]);
    } else {
      setTip("Please select both a language and a role.");
    }
  };

  return (
    <div style={{ fontFamily: "Arial", padding: 20 }}>
      <h1>LinguaBoost 🌍</h1>
      <p>Learn languages faster — tailored for students, entrepreneurs, and professionals.</p>

      <div style={{ marginBottom: 20 }}>
        <label>Choose a language: </label>
        <select onChange={e => setLanguage(e.target.value)}>
          <option value="">--Select--</option>
          {languages.map(l => (
            <option key={l} value={l}>{l}</option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: 20 }}>
        <label>Choose your role: </label>
        <select onChange={e => setRole(e.target.value)}>
          <option value="">--Select--</option>
          {roles.map(r => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>

      <button onClick={getTip} style={{ padding: "8px 12px" }}>Get Learning Tip</button>

      {tip && (
        <div style={{ marginTop: 20, padding: 10, background: "#f7f7f7", borderRadius: 8 }}>
          <strong>Tip:</strong> {tip}
        </div>
      )}
    </div>
  );
}
