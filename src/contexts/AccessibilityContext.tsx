import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Theme = 'dark' | 'light' | 'high-contrast';

interface AccessibilityContextType {
  theme: Theme;
  setTheme: (t: Theme) => void;
  textZoom: 1 | 2 | 3;
  setTextZoom: (z: 1 | 2 | 3) => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | null>(null);

export const useAccessibility = () => {
  const ctx = useContext(AccessibilityContext);
  if (!ctx) throw new Error('useAccessibility must be inside provider');
  return ctx;
};

export const AccessibilityProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [textZoom, setTextZoom] = useState<1 | 2 | 3>(1);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark', 'light', 'high-contrast');
    if (theme !== 'dark') {
      root.classList.add(theme);
    }
  }, [theme]);

  return (
    <AccessibilityContext.Provider value={{ theme, setTheme, textZoom, setTextZoom }}>
      <div className={`text-zoom-${textZoom}`}>
        {children}
      </div>
    </AccessibilityContext.Provider>
  );
};
