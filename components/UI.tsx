import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

// --- Types ---
interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  title?: string;
  icon?: React.ReactNode;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  icon?: React.ReactNode;
}

// --- Bento Card with Spotlight Effect ---
export const BentoCard: React.FC<CardProps> = ({ children, className = "", onClick, title, icon }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      className={`relative rounded-3xl border border-white/10 bg-[#0a0a0a] overflow-hidden group transition-all duration-300 ${className} ${onClick ? 'cursor-pointer' : ''}`}
    >
      {/* Spotlight Gradient */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.08), transparent 40%)`,
        }}
      />
      
      {/* Content */}
      <div className="relative h-full p-6 flex flex-col z-10">
        {title && (
          <div className="flex items-center gap-2 mb-4 text-gray-400">
            {icon && <span className="text-white">{icon}</span>}
            <span className="text-xs font-semibold uppercase tracking-wider">{title}</span>
          </div>
        )}
        {children}
      </div>
    </motion.div>
  );
};

// --- Button ---
export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = "", icon, ...props }) => {
  const baseStyle = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-200 active:scale-95 text-sm";
  
  const variants = {
    primary: "bg-white text-black hover:bg-gray-100 shadow-[0_0_20px_rgba(255,255,255,0.1)]",
    secondary: "bg-white/10 text-white hover:bg-white/20 border border-white/5",
    outline: "border border-white/20 text-white hover:bg-white/5",
    ghost: "text-gray-400 hover:text-white hover:bg-white/5"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </button>
  );
};

// --- Badge ---
export const Badge: React.FC<{ children: React.ReactNode; color?: string }> = ({ children, color = "bg-white/5" }) => (
  <span className={`px-3 py-1 rounded-md text-[12px] font-medium text-gray-300 border border-white/10 ${color} inline-block`}>
    {children}
  </span>
);

// --- Section Heading ---
export const SectionHeading: React.FC<{ children: React.ReactNode; id?: string; subtitle?: string }> = ({ children, id, subtitle }) => (
  <motion.div 
    className="mb-12"
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <h2 id={id} className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
      {children}
    </h2>
    {subtitle && <p className="text-gray-400 text-lg max-w-2xl">{subtitle}</p>}
  </motion.div>
);