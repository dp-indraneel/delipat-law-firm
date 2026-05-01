"use client";

import { useEffect, useState } from "react";

type ChatMessage = {
  id: number;
  side: "ai" | "user";
  text: string;
};

const conversation: Omit<ChatMessage, "id">[] = [
  {
    side: "ai",
    text: "Hi, this is Delipat intake. Are you safe right now, and were you injured in the accident?",
  },
  {
    side: "user",
    text: "Yes, I was rear-ended and my neck is hurting.",
  },
  {
    side: "ai",
    text: "I'm sorry that happened. Did you receive medical treatment or plan to see a doctor?",
  },
  {
    side: "user",
    text: "I'm going to urgent care today.",
  },
  {
    side: "ai",
    text: "Thanks for letting me know. Before we proceed, can you share your phone number so our team can contact you?"
  },
  {
    side: "user",
    text: "+1 415-555-2671"
  },
  {
    side: "ai",
    text: "Got it. I'll notify the intake team now and make sure someone follows up with you immediately.",
  },
];

const wait = (duration: number) => new Promise((resolve) => setTimeout(resolve, duration));

export default function AIIntakePhone() {
  const [visibleMessages, setVisibleMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showStatus, setShowStatus] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const playConversation = async () => {
      while (!cancelled) {
        setVisibleMessages([]);
        setShowStatus(false);
        setIsTyping(false);
        await wait(1600);

        for (const [index, message] of conversation.entries()) {
          if (cancelled) return;

          if (message.side === "ai") {
            setIsTyping(true);
            await wait(2200);
            if (cancelled) return;
            setIsTyping(false);
            await wait(1100);
          }

          setVisibleMessages((current) => [...current, { ...message, id: index }]);
          await wait(message.side === "ai" ? 1350 : 1100);
        }

        if (cancelled) return;
        setShowStatus(true);
        await wait(2800);
      }
    };

    playConversation();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="relative mx-auto flex w-full max-w-[520px] justify-center py-6">
      <div className="relative h-[600px] w-full max-w-[345px] rounded-[42px] border border-black/[0.08] bg-[#0A1628] p-3 shadow-[0_12px_35px_rgba(0,0,0,0.035)] md:h-[620px]">
        <div className="absolute left-1/2 top-3 z-10 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-[#0A1628]" />
        <div className="flex h-full flex-col overflow-hidden rounded-[32px] bg-[#F8F8F6]">
          <div className="shrink-0 border-b border-black/[0.08] bg-white/92 px-5 pb-2 pt-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9A7B24]">AI Intake Flow</p>
            <div className="mt-2 flex items-center justify-between">
              <div>
                <h3 className="font-heading text-lg font-semibold tracking-[-0.02em] text-[#0A1628]">Delipat AI</h3>
                <p className="mt-0 flex items-center gap-2 text-xs font-semibold text-emerald-700"><span className="size-2 rounded-full bg-emerald-500" />Online now</p>
              </div>
              <div className="grid size-10 place-items-center rounded-2xl bg-[#C9A84C]/14 text-sm font-bold text-[#9A7B24]">AI</div>
            </div>
          </div>

          <div className="flex min-h-0 flex-1 flex-col px-4 py-4">
            <div className="flex min-h-0 flex-1 flex-col justify-end gap-2 overflow-hidden">
              {visibleMessages.map((message) => (
                <div key={message.id} className={`chat-entry flex ${message.side === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[86%] rounded-[18px] px-3.5 py-2.5 text-[13px] leading-[1.48] shadow-[0_6px_18px_rgba(0,0,0,0.025)] lg:text-sm lg:leading-[1.55] ${message.side === "user" ? "rounded-br-md bg-[#0A1628] text-white" : "rounded-bl-md border border-black/[0.06] bg-white text-[#0A1628]"}`}>
                    {message.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="chat-entry flex justify-start">
                  <div className="flex items-center gap-1 rounded-full border border-black/[0.06] bg-white px-4 py-3 shadow-[0_6px_18px_rgba(0,0,0,0.025)]">
                    <span className="typing-dot" />
                    <span className="typing-dot [animation-delay:0.16s]" />
                    <span className="typing-dot [animation-delay:0.32s]" />
                  </div>
                </div>
              )}
            </div>

            <div className="h-[52px] shrink-0 pt-3">
              {showStatus && (
                <div className="chat-entry rounded-2xl border border-[#C9A84C]/35 bg-[#C9A84C]/15 px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.13em] text-[#7A5F16]">
                  Lead qualified · Attorney review needed
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
