import React from 'react';
import { DeepChat } from 'deep-chat-react';
import { ChatHeader } from './ChatHeader';

export function ChatContainer() {
  return (
    <div className="container mx-auto max-w-3xl h-full p-4">
      <div className="flex flex-col h-full bg-white rounded-lg shadow-lg overflow-hidden">
        <ChatHeader />
        <div className="flex-1 overflow-hidden">
          <DeepChat
            style={{
              borderRadius: '0',
              border: 'none',
              width: '100%',
              height: '100%',
            }}
            initialMessages={[
              {
                role: 'assistant',
                text: "Hello! I'm your AI assistant. How can I help you today?",
              },
            ]}
            textInput={{
              placeholder: { text: "Type your message..." },
              styles: {
                container: {
                  borderTop: '1px solid #e5e7eb',
                  padding: '1rem',
                },
                input: {
                  borderRadius: '9999px',
                  padding: '0.5rem 1rem',
                  border: '1px solid #e5e7eb',
                },
                button: {
                  borderRadius: '9999px',
                  backgroundColor: '#2563eb',
                  padding: '0.5rem',
                  marginLeft: '0.5rem',
                },
              },
            }}
            messageStyles={{
              default: {
                avatar: true,
                avatarSize: '2rem',
                bubbleColor: '#f3f4f6',
                textColor: '#111827',
                maxWidth: '70%',
                fontSize: '0.875rem',
                padding: '0.75rem 1rem',
                borderRadius: '1rem',
              },
              assistant: {
                bubbleColor: '#f3f4f6',
                textColor: '#111827',
              },
              user: {
                bubbleColor: '#2563eb',
                textColor: '#ffffff',
              },
            }}
            connect={{
              request: {
                url: '/api/chat',
                method: 'POST',
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}