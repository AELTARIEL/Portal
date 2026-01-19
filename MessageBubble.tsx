import React from 'react';
import { Message, Role } from '../types';
import { PortalIcon, TravelerIcon } from './Icons';

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isAngel = message.role === Role.MODEL;

  return (
    <div className={`flex w-full mb-10 ${isAngel ? 'justify-start' : 'justify-end'} animate-fade-in group`}>
      <div className={`flex max-w-[95%] md:max-w-[85%] ${isAngel ? 'flex-row' : 'flex-row-reverse'} items-start gap-6`}>
        
        {/* Avatar */}
        <div className={`
          flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center border transition-all duration-500
          ${isAngel 
            ? 'bg-gradient-to-b from-black via-zinc-900 to-black border-gold-400/30 shadow-[0_0_20px_rgba(212,175,55,0.2)]' 
            : 'bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.4)]'}
        `}>
          {isAngel ? (
            <PortalIcon className="w-12 h-12 text-gold-300 drop-shadow-md" />
          ) : (
            <TravelerIcon className="w-10 h-10 text-indigo-300 drop-shadow-lg" />
          )}
        </div>

        {/* Message Content */}
        <div className={`
          relative p-8 md:p-10 rounded-sm
          ${isAngel 
            ? 'bg-black/60 border border-gold-500/20 text-gold-50 shadow-[0_0_30px_-10px_rgba(212,175,55,0.1)] rounded-tl-none' 
            : 'bg-zinc-900/80 border border-white/5 text-zinc-300 shadow-lg rounded-tr-none'}
        `}>
          {/* Decorative lines for Angel */}
          {isAngel && (
            <>
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/10 to-transparent" />
              <div className="absolute -inset-[1px] bg-gradient-to-b from-gold-500/5 to-transparent rounded-sm -z-10 blur-sm opacity-50" />
            </>
          )}

          {/* Increased font size for content */}
          <div className={`text-xl md:text-2xl leading-loose whitespace-pre-wrap tracking-wide ${isAngel ? 'font-mystic' : 'font-mystic font-light'}`}>
            {message.text}
            {message.isStreaming && (
              <span className="inline-block w-3 h-3 ml-3 bg-gold-400 rounded-full animate-pulse align-middle shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
            )}
          </div>
          
          {/* Metadata/Timestamp decoration */}
          <div className={`mt-3 text-xs tracking-[0.2em] uppercase opacity-30 ${isAngel ? 'text-gold-200' : 'text-zinc-500'} text-right font-sacred`}>
            {new Date(message.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
          </div>
        </div>
      </div>
    </div>
  );
};