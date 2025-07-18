import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test/utils';
import { LoadingSpinner, PageSpinner, InlineSpinner } from '../LoadingSpinner';

describe('LoadingSpinner', () => {
  it('renders main loading spinner with correct elements', () => {
    render(<LoadingSpinner />);
    
    // Check for loading text
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    
    // Check for spinner elements
    const spinner = screen.getByRole('status', { hidden: true });
    expect(spinner).toBeInTheDocument();
  });

  it('applies correct CSS classes', () => {
    render(<LoadingSpinner />);
    
    const container = screen.getByText('Loading...').parentElement;
    expect(container).toHaveClass('flex', 'items-center', 'justify-center', 'min-h-screen');
  });
});

describe('PageSpinner', () => {
  it('renders page spinner with correct styling', () => {
    render(<PageSpinner />);
    
    const container = screen.getByRole('status', { hidden: true }).parentElement;
    expect(container).toHaveClass('flex', 'items-center', 'justify-center', 'py-20');
  });

  it('has smaller size than main spinner', () => {
    render(<PageSpinner />);
    
    const spinner = screen.getByRole('status', { hidden: true });
    expect(spinner).toHaveClass('w-8', 'h-8');
  });
});

describe('InlineSpinner', () => {
  it('renders inline spinner with correct styling', () => {
    render(<InlineSpinner />);
    
    const spinner = screen.getByRole('status', { hidden: true });
    expect(spinner).toHaveClass('inline-block', 'w-4', 'h-4');
  });

  it('has smallest size among all spinners', () => {
    render(<InlineSpinner />);
    
    const spinner = screen.getByRole('status', { hidden: true });
    expect(spinner).toHaveClass('w-4', 'h-4');
  });
}); 