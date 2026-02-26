import { useAccessibility } from '@/contexts/AccessibilityContext';
import { Sun, Moon, Eye, ZoomIn, ZoomOut } from 'lucide-react';

const AccessibilityToolbar = () => {
  const { theme, setTheme, textZoom, setTextZoom } = useAccessibility();

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 pixel-border bg-card p-3" role="toolbar" aria-label="Accessibility controls">
      <span className="font-pixel text-[8px] text-primary mb-1 text-center">A11Y</span>
      
      <button
        onClick={() => setTheme('dark')}
        className={`p-2 transition-colors ${theme === 'dark' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'}`}
        aria-label="Dark mode"
        title="Dark mode"
      >
        <Moon size={16} />
      </button>
      
      <button
        onClick={() => setTheme('light')}
        className={`p-2 transition-colors ${theme === 'light' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'}`}
        aria-label="Light mode"
        title="Light mode"
      >
        <Sun size={16} />
      </button>
      
      <button
        onClick={() => setTheme('high-contrast')}
        className={`p-2 transition-colors ${theme === 'high-contrast' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'}`}
        aria-label="High contrast mode"
        title="High contrast"
      >
        <Eye size={16} />
      </button>

      <div className="border-t border-border my-1" />

      <button
        onClick={() => setTextZoom(Math.min(3, textZoom + 1) as 1 | 2 | 3)}
        disabled={textZoom === 3}
        className="p-2 bg-muted text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
        aria-label="Increase text size"
        title="Zoom in"
      >
        <ZoomIn size={16} />
      </button>
      
      <button
        onClick={() => setTextZoom(Math.max(1, textZoom - 1) as 1 | 2 | 3)}
        disabled={textZoom === 1}
        className="p-2 bg-muted text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
        aria-label="Decrease text size"
        title="Zoom out"
      >
        <ZoomOut size={16} />
      </button>
    </div>
  );
};

export default AccessibilityToolbar;
