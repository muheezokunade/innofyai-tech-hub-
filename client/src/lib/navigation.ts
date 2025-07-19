// Navigation utility for CTA buttons across the website

export const navigateToContact = () => {
  // Navigate to contact page
  window.location.href = '/contact';
};

export const navigateToConsultation = () => {
  // Navigate to contact page with consultation focus
  window.location.href = '/contact?type=consultation';
};

export const navigateToServices = () => {
  // Navigate to services page
  window.location.href = '/services';
};

export const navigateToPortfolio = () => {
  // Navigate to portfolio page
  window.location.href = '/portfolio';
};

export const navigateToGenerativeAI = () => {
  // Navigate to generative AI page
  window.location.href = '/generative-ai';
};

export const navigateToLagos = () => {
  // Navigate to Lagos page
  window.location.href = '/lagos';
};

export const navigateToEcommerceSolutions = () => {
  // Navigate to e-commerce solutions page
  window.location.href = '/ecommerce-solutions';
};

export const navigateToIndustrySolutions = () => {
  // Navigate to industry solutions page
  window.location.href = '/industry-solutions';
};

export const navigateToClientSuccessStories = () => {
  // Navigate to client success stories page
  window.location.href = '/client-success-stories';
};

export const navigateToServiceComparison = () => {
  // Navigate to service comparison page
  window.location.href = '/service-comparison';
};

// Scroll to specific sections on the same page
export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Open external links
export const openExternalLink = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

// Handle different types of CTA actions
export const handleCTA = (action: string, target?: string) => {
  switch (action) {
    case 'contact':
      navigateToContact();
      break;
    case 'consultation':
      navigateToConsultation();
      break;
    case 'services':
      navigateToServices();
      break;
    case 'portfolio':
      navigateToPortfolio();
      break;
    case 'generative-ai':
      navigateToGenerativeAI();
      break;
    case 'lagos':
      navigateToLagos();
      break;
    case 'ecommerce':
      navigateToEcommerceSolutions();
      break;
    case 'industry':
      navigateToIndustrySolutions();
      break;
    case 'success-stories':
      navigateToClientSuccessStories();
      break;
    case 'comparison':
      navigateToServiceComparison();
      break;
    case 'scroll':
      if (target) scrollToSection(target);
      break;
    case 'external':
      if (target) openExternalLink(target);
      break;
    default:
      navigateToContact();
  }
};

// CTA button configurations
export const ctaConfigs = {
  'start-project': {
    action: 'contact',
    label: 'Start Your Project',
    className: 'bg-white text-blue-600 hover:bg-gray-100'
  },
  'schedule-consultation': {
    action: 'consultation',
    label: 'Schedule a Consultation',
    className: 'border-2 border-white text-white hover:bg-white hover:text-blue-600'
  },
  'get-started': {
    action: 'contact',
    label: 'Get Started Today',
    className: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
  },
  'learn-more': {
    action: 'services',
    label: 'Learn More',
    className: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600'
  },
  'view-portfolio': {
    action: 'portfolio',
    label: 'View Portfolio',
    className: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
  },
  'try-generative-ai': {
    action: 'generative-ai',
    label: 'Try Generative AI',
    className: 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700'
  }
}; 