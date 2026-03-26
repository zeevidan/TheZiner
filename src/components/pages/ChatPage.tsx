'use client';

import { Send, Paperclip, Smile, Phone, Video, MoreVertical, Search, CheckCheck } from 'lucide-react';

const contacts = [
  { name: 'Sarah Wilson', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face', lastMsg: 'Sounds great! Let me know when...', time: '2m', unread: 3, online: true },
  { name: 'Design Team', avatar: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=80&h=80&fit=crop&crop=face', lastMsg: 'Alex: Updated the mockups', time: '15m', unread: 0, online: false },
  { name: 'James Cooper', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face', lastMsg: 'The meeting is confirmed for...', time: '1h', unread: 1, online: true },
  { name: 'Marketing', avatar: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=80&h=80&fit=crop&crop=face', lastMsg: 'Lisa: Campaign results are in!', time: '3h', unread: 0, online: false },
  { name: 'Emily Davis', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face', lastMsg: 'Thanks for the help!', time: '5h', unread: 0, online: false },
  { name: 'Tech Support', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face', lastMsg: 'Issue #4521 has been resolved', time: '1d', unread: 0, online: false },
];

const messages = [
  { from: 'them', name: 'Sarah Wilson', text: 'Hey! Have you seen the new design system I shared?', time: '10:30 AM' },
  { from: 'me', name: 'You', text: 'Yes! It looks amazing. I love the color palette you chose.', time: '10:32 AM' },
  { from: 'them', name: 'Sarah Wilson', text: 'Thanks! I spent a lot of time on the typography choices. Do you think we should go with Inter or Poppins?', time: '10:33 AM' },
  { from: 'me', name: 'You', text: 'I think Inter works better for the dashboard components. It has great readability at small sizes.', time: '10:35 AM' },
  { from: 'them', name: 'Sarah Wilson', text: 'Good point. What about the border radius? I was thinking 8px for cards and 4px for buttons.', time: '10:36 AM' },
  { from: 'me', name: 'You', text: 'That works! Maybe we can also add some subtle shadows to give the cards more depth.', time: '10:38 AM' },
  { from: 'them', name: 'Sarah Wilson', text: 'Sounds great! Let me know when you\'re free to discuss the component library structure. I have some ideas about the token system.', time: '10:40 AM' },
];

export default function ChatPage() {
  return (
    <div
      className="flex h-[600px] overflow-hidden"
      style={{
        fontFamily: 'var(--t-font-body)',
        border: `var(--t-border-width) solid var(--t-border)`,
        borderRadius: 'var(--t-radius)',
        boxShadow: 'var(--t-shadow)',
      }}
    >
      {/* Sidebar */}
      <div
        className="w-80 flex flex-col border-r flex-shrink-0"
        style={{ borderColor: 'var(--t-border)', backgroundColor: 'var(--t-card)' }}
      >
        <div className="p-4 border-b" style={{ borderColor: 'var(--t-border)' }}>
          <h2 className="text-lg font-bold mb-3" style={{ fontFamily: 'var(--t-font-heading)' }}>Messages</h2>
          <div
            className="flex items-center gap-2 px-3 py-2"
            style={{
              backgroundColor: 'var(--t-muted)',
              borderRadius: 'var(--t-radius)',
              border: `var(--t-border-width) solid var(--t-border)`,
            }}
          >
            <Search size={14} style={{ color: 'var(--t-muted-fg)' }} />
            <span className="text-sm" style={{ color: 'var(--t-muted-fg)' }}>Search messages...</span>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {contacts.map((contact, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-3 cursor-pointer transition-colors"
              style={{
                backgroundColor: i === 0 ? 'var(--t-muted)' : 'transparent',
                borderLeft: i === 0 ? `3px solid var(--t-primary)` : '3px solid transparent',
              }}
            >
              <div className="relative flex-shrink-0">
                <img
                  src={contact.avatar}
                  alt={contact.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                {contact.online && (
                  <div
                    className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2"
                    style={{ backgroundColor: 'var(--t-success)', borderColor: 'var(--t-card)' }}
                  />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold truncate">{contact.name}</span>
                  <span className="text-[10px] flex-shrink-0" style={{ color: 'var(--t-muted-fg)' }}>{contact.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs truncate" style={{ color: 'var(--t-muted-fg)' }}>{contact.lastMsg}</span>
                  {contact.unread > 0 && (
                    <span
                      className="w-5 h-5 flex items-center justify-center text-[10px] font-bold rounded-full flex-shrink-0"
                      style={{ backgroundColor: 'var(--t-primary)', color: 'var(--t-primary-fg)' }}
                    >
                      {contact.unread}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat area */}
      <div className="flex-1 flex flex-col" style={{ backgroundColor: 'var(--t-bg)' }}>
        {/* Chat header */}
        <div
          className="flex items-center justify-between p-4 border-b"
          style={{ borderColor: 'var(--t-border)', backgroundColor: 'var(--t-card)' }}
        >
          <div className="flex items-center gap-3">
            <img
              src={contacts[0].avatar}
              alt="Sarah Wilson"
              className="w-9 h-9 rounded-full object-cover"
            />
            <div>
              <div className="text-sm font-semibold">Sarah Wilson</div>
              <div className="text-xs" style={{ color: 'var(--t-success)' }}>Online</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:opacity-70"><Phone size={16} style={{ color: 'var(--t-muted-fg)' }} /></button>
            <button className="p-2 hover:opacity-70"><Video size={16} style={{ color: 'var(--t-muted-fg)' }} /></button>
            <button className="p-2 hover:opacity-70"><MoreVertical size={16} style={{ color: 'var(--t-muted-fg)' }} /></button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.from === 'me' ? 'justify-end' : 'justify-start'}`}>
              <div
                className="max-w-[70%] px-3 py-2"
                style={{
                  backgroundColor: msg.from === 'me' ? 'var(--t-primary)' : 'var(--t-card)',
                  color: msg.from === 'me' ? 'var(--t-primary-fg)' : 'var(--t-card-fg)',
                  borderRadius: 'var(--t-radius)',
                  border: msg.from === 'me' ? 'none' : `var(--t-border-width) solid var(--t-border)`,
                  boxShadow: 'var(--t-shadow)',
                }}
              >
                <p className="text-sm leading-relaxed">{msg.text}</p>
                <div className="flex items-center justify-end gap-1 mt-1">
                  <span className="text-[10px] opacity-70">{msg.time}</span>
                  {msg.from === 'me' && <CheckCheck size={12} className="opacity-70" />}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t" style={{ borderColor: 'var(--t-border)', backgroundColor: 'var(--t-card)' }}>
          <div
            className="flex items-center gap-2 px-3 py-2"
            style={{
              backgroundColor: 'var(--t-muted)',
              borderRadius: 'var(--t-radius)',
              border: `var(--t-border-width) solid var(--t-border)`,
            }}
          >
            <button className="hover:opacity-70"><Paperclip size={18} style={{ color: 'var(--t-muted-fg)' }} /></button>
            <span className="flex-1 text-sm" style={{ color: 'var(--t-muted-fg)' }}>Type a message...</span>
            <button className="hover:opacity-70"><Smile size={18} style={{ color: 'var(--t-muted-fg)' }} /></button>
            <button
              className="p-1.5"
              style={{
                backgroundColor: 'var(--t-primary)',
                color: 'var(--t-primary-fg)',
                borderRadius: 'var(--t-radius)',
              }}
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
