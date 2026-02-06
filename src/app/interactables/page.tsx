"use client";

import {
  MessageInput,
  MessageInputSubmitButton,
  MessageInputTextarea,
  MessageInputToolbar,
} from "@/components/tambo/message-input";
import { ScrollableMessageContainer } from "@/components/tambo/scrollable-message-container";
import {
  ThreadContent,
  ThreadContentMessages,
} from "@/components/tambo/thread-content";
import { components, tools } from "@/lib/tambo";
import { TamboProvider } from "@tambo-ai/react";
import { ChevronLeft, ChevronRight, MessageSquare, Settings, Sparkles } from "lucide-react";
import { useState } from "react";
import { SettingsPanel } from "./components/settings-panel";

export default function InteractablesPage() {
  const [isChatOpen, setIsChatOpen] = useState(true);

  return (
    <TamboProvider
      apiKey={process.env.NEXT_PUBLIC_TAMBO_API_KEY!}
      components={components}
      tools={tools}
      tamboUrl={process.env.NEXT_PUBLIC_TAMBO_URL}
    >
      <div className="flex h-screen bg-linear-to-br from-background via-background to-muted/20">
        {/* Chat Sidebar */}
        <div
          className={`${isChatOpen ? "w-96" : "w-0"
            } border-r border-border/50 glass transition-all duration-300 flex flex-col relative shadow-xl`}
        >
          {isChatOpen && (
            <>
              <div className="p-6 border-b border-border/50 bg-linear-to-r from-primary/5 to-secondary/5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-linear-to-br from-primary to-secondary">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold gradient-text">
                    AI Assistant
                  </h2>
                </div>
                <p className="text-sm text-muted-foreground">
                  Update settings with natural language
                </p>
              </div>

              <ScrollableMessageContainer className="flex-1 p-6 bg-linear-to-b from-transparent to-muted/5">
                <ThreadContent variant="default">
                  <ThreadContentMessages />
                </ThreadContent>
              </ScrollableMessageContainer>

              <div className="p-6 border-t border-border/50 bg-linear-to-r from-primary/5 to-secondary/5">
                <MessageInput variant="bordered" className="glass">
                  <MessageInputTextarea
                    placeholder="Try: 'Change theme to dark' or 'Enable all notifications'"
                    className="bg-transparent"
                  />
                  <MessageInputToolbar>
                    <MessageInputSubmitButton className="btn-premium bg-linear-to-r from-primary to-secondary text-white" />
                  </MessageInputToolbar>
                </MessageInput>
              </div>
            </>
          )}

          {/* Toggle Button */}
          <button
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="absolute -right-12 top-1/2 -translate-y-1/2 glass rounded-r-xl p-3 hover:bg-primary/10 transition-all duration-300 shadow-lg group"
            aria-label={isChatOpen ? "Close chat" : "Open chat"}
          >
            {isChatOpen ? (
              <ChevronLeft className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            ) : (
              <ChevronRight className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            )}
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <div className="container mx-auto p-8 max-w-5xl">
            {/* Header */}
            <div className="mb-8 animate-slide-in-up">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-linear-to-br from-primary to-secondary">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-4xl font-bold gradient-text">
                  Interactive Settings
                </h1>
              </div>
              <p className="text-lg text-muted-foreground ml-[60px]">
                Control your preferences with AI-powered interactions
              </p>
            </div>

            {/* Info Card */}
            <div className="glass rounded-2xl p-6 mb-8 border-l-4 border-primary animate-slide-in-up" style={{ animationDelay: "100ms" }}>
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">How it works</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Use the AI assistant on the left to update your settings using natural language.
                    Try commands like <code className="px-2 py-1 rounded bg-muted text-primary font-mono text-xs">"Change my name to John"</code> or
                    <code className="px-2 py-1 rounded bg-muted text-primary font-mono text-xs ml-1">"Enable email notifications"</code>.
                    Watch as the settings update in real-time!
                  </p>
                </div>
              </div>
            </div>

            {/* Settings Panel */}
            <div className="animate-slide-in-up" style={{ animationDelay: "200ms" }}>
              <SettingsPanel />
            </div>
          </div>
        </div>
      </div>
    </TamboProvider>
  );
}
