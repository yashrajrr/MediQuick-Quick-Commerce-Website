import { Bell, MapPin, Settings } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface MediQuickHeaderProps {
  title?: string;
  showLocation?: boolean;
  showNotifications?: boolean;
  compact?: boolean;
  onLocationClick?: () => void;
  onNotificationClick?: () => void;
  onSettingsClick?: () => void;
}

export function MediQuickHeader({
  title,
  showLocation = true,
  showNotifications = true,
  compact = false,
  onLocationClick,
  onNotificationClick,
  onSettingsClick
}: MediQuickHeaderProps) {
  return (
    <header className={`sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b ${compact ? 'p-3' : 'p-4'}`}>
      <div className="flex items-center justify-between">
        {/* Left side - Location or Title */}
        <div className="flex items-center gap-2 min-w-0 flex-1">
          {showLocation ? (
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-auto p-0 hover:bg-transparent"
              onClick={onLocationClick}
            >
              <div className="flex items-center gap-1 text-left">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <div className="min-w-0">
                  <div className="text-xs text-muted-foreground">Deliver to</div>
                  <div className="font-medium text-sm truncate">Downtown, NYC</div>
                </div>
              </div>
            </Button>
          ) : (
            <h1 className="font-semibold text-lg truncate">{title}</h1>
          )}
        </div>

        {/* Right side - Actions */}
        <div className="flex items-center gap-2">
          {showNotifications && (
            <Button
              variant="ghost"
              size="icon"
              className="relative h-9 w-9 animate-scale-press"
              onClick={onNotificationClick}
            >
              <Bell className="h-4 w-4" />
              <Badge 
                variant="destructive" 
                className="absolute -top-1 -right-1 h-4 w-4 p-0 text-xs flex items-center justify-center"
              >
                2
              </Badge>
            </Button>
          )}
          
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 animate-scale-press"
            onClick={onSettingsClick}
          >
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}