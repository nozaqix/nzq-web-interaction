"use client";

import { Send } from "lucide-react";
import { useState } from "react";

import { ExperimentCard } from "../experiment-card";

const MAX_MESSAGE_LENGTH = 48;

export function SmartInputExperiment() {
  const [draft, setDraft] = useState("");
  const [sentMessage, setSentMessage] = useState("Hover. Click. Feel.");

  const sendMessage = () => {
    const message = draft.trim();
    if (!message) return;

    setSentMessage(message);
    setDraft("");
  };

  return (
    <ExperimentCard
      index="07"
      title="SMART INPUT"
      category="input"
      className="message-card"
    >
      <div className="message-preview">
        <span className="avatar">NQ</span>
        <div>
          <small>NOW</small>
          <p key={sentMessage}>{sentMessage}</p>
        </div>
      </div>
      <div className="composer">
        <input
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={(event) => event.key === "Enter" && sendMessage()}
          placeholder="Write something small..."
          maxLength={MAX_MESSAGE_LENGTH}
        />
        <span>
          {draft.length}/{MAX_MESSAGE_LENGTH}
        </span>
        <button onClick={sendMessage} disabled={!draft.trim()} aria-label="Send">
          <Send size={18} />
        </button>
      </div>
    </ExperimentCard>
  );
}
