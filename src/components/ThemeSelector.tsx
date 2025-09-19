import { useState } from "react";
import { Palette, Check } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

interface Theme {
  id: string;
  name: string;
  description: string;
  className: string;
  preview: {
    primary: string;
    accent: string;
    background: string;
  };
}

const themes: Theme[] = [
  {
    id: 'default',
    name: 'Clinical Clean',
    description: 'White with soft blues (Default)',
    className: '',
    preview: {
      primary: '#4F9AF7',
      accent: '#10B981',
      background: '#FFFFFF'
    }
  },
  {
    id: 'gradient',
    name: 'Modern Gradient',
    description: 'Teal to purple gradient',
    className: 'theme-gradient',
    preview: {
      primary: '#0FB5A6',
      accent: '#FF6B5B',
      background: '#F7F8FA'
    }
  },
  {
    id: 'dark',
    name: 'Dark Mode',
    description: 'Deep navy with neon accents',
    className: 'theme-dark',
    preview: {
      primary: '#06B6D4',
      accent: '#F97316',
      background: '#0F172A'
    }
  }
];

interface ThemeSelectorProps {
  currentTheme: string;
  onThemeChange: (themeId: string) => void;
}

export function ThemeSelector({ currentTheme, onThemeChange }: ThemeSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Palette className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      
      <PopoverContent className="w-80 p-4" align="end">
        <div className="space-y-4">
          <h3 className="font-semibold text-sm">Choose Theme</h3>
          
          <div className="grid gap-3">
            {themes.map((theme) => (
              <Card
                key={theme.id}
                className={`cursor-pointer transition-all hover:shadow-md ${
                  currentTheme === theme.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => {
                  onThemeChange(theme.id);
                  setIsOpen(false);
                }}
              >
                <CardContent className="p-3">
                  <div className="flex items-center gap-3">
                    {/* Theme Preview */}
                    <div className="flex gap-1">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: theme.preview.primary }}
                      />
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: theme.preview.accent }}
                      />
                      <div 
                        className="w-4 h-4 rounded-full border"
                        style={{ backgroundColor: theme.preview.background }}
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm">{theme.name}</div>
                      <div className="text-xs text-muted-foreground">{theme.description}</div>
                    </div>
                    
                    {currentTheme === theme.id && (
                      <Check className="h-4 w-4 text-primary" />
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-xs text-muted-foreground">
            💡 Themes switch the entire design system colors, typography, and spacing tokens
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}