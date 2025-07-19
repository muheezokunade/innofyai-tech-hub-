import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { handleCTA, ctaConfigs } from '../lib/navigation';

interface CTAButtonProps {
  type?: keyof typeof ctaConfigs;
  action?: string;
  target?: string;
  label?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  icon?: boolean;
  external?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  type,
  action,
  target,
  label,
  className = '',
  variant = 'primary',
  size = 'md',
  icon = true,
  external = false,
  fullWidth = false,
  disabled = false,
  onClick
}) => {
  // Get configuration from type or use custom props
  const config = type ? ctaConfigs[type] : null;
  const buttonAction = action || config?.action || 'contact';
  const buttonLabel = label || config?.label || 'Get Started';
  const buttonClassName = className || config?.className || '';

  // Size classes
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  // Variant classes
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
    gradient: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
  };

  // Base classes
  const baseClasses = `
    font-semibold rounded-lg transition-all duration-300 
    flex items-center justify-center gap-2 
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 active:scale-95'}
  `;

  const handleClick = () => {
    if (disabled) return;
    
    if (onClick) {
      onClick();
    } else {
      handleCTA(buttonAction, target);
    }
  };

  return (
    <motion.button
      className={`${baseClasses} ${buttonClassName}`}
      onClick={handleClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      transition={{ duration: 0.2 }}
    >
      <span>{buttonLabel}</span>
      {icon && (
        external ? (
          <ExternalLink className="w-4 h-4" />
        ) : (
          <ArrowRight className="w-4 h-4" />
        )
      )}
    </motion.button>
  );
};

// Pre-configured CTA buttons for common use cases
export const StartProjectButton: React.FC<Omit<CTAButtonProps, 'type'>> = (props) => (
  <CTAButton type="start-project" {...props} />
);

export const ScheduleConsultationButton: React.FC<Omit<CTAButtonProps, 'type'>> = (props) => (
  <CTAButton type="schedule-consultation" {...props} />
);

export const GetStartedButton: React.FC<Omit<CTAButtonProps, 'type'>> = (props) => (
  <CTAButton type="get-started" {...props} />
);

export const LearnMoreButton: React.FC<Omit<CTAButtonProps, 'type'>> = (props) => (
  <CTAButton type="learn-more" {...props} />
);

export const ViewPortfolioButton: React.FC<Omit<CTAButtonProps, 'type'>> = (props) => (
  <CTAButton type="view-portfolio" {...props} />
);

export const TryGenerativeAIButton: React.FC<Omit<CTAButtonProps, 'type'>> = (props) => (
  <CTAButton type="try-generative-ai" {...props} />
);

export default CTAButton; 