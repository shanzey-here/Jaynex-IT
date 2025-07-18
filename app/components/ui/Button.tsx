import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  onClick?: () => void;
  className?: string;
};

const baseStyles = 'py-4 px-8 rounded-full font-semibold transition-all duration-300 w-full max-w-xs sm:w-auto sm:max-w-none text-center';

const variantStyles = {
  primary: 'bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:-translate-y-1 hover:shadow-2xl',
  secondary: 'bg-transparent text-white border-2 border-gray-500 hover:border-blue-500 hover:bg-blue-500/10',
};

export default function Button({ children, variant = 'primary', href, onClick, className = '' }: ButtonProps) {
  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
