import React from 'react';
import { MessageSquare } from 'lucide-react';

export function ChatHeader() {
  return (
    <div className="border-b border-gray-200 p-4 bg-white">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
          <MessageSquare className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h1 className="text-lg font-semibold text-gray-900">AI Assistant</h1>
          <p className="text-sm text-gray-500">Always here to help</p>
        </div>
      </div>
    </div>
  );
}