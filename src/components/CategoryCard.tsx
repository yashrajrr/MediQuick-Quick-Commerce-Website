import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";

interface CategoryCardProps {
  id: string;
  title: string;
  subtitle?: string;
  icon: LucideIcon;
  color: string;
  onClick: (id: string) => void;
}

export function CategoryCard({ id, title, subtitle, icon: Icon, color, onClick }: CategoryCardProps) {
  return (
    <Card 
      className="overflow-hidden border-0 shadow-sm cursor-pointer animate-scale-press hover:shadow-md transition-all"
      onClick={() => onClick(id)}
    >
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <div 
            className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
            style={{ backgroundColor: `${color}15` }}
          >
            <Icon className="h-6 w-6" style={{ color }} />
          </div>
          
          <div className="min-w-0 flex-1">
            <h3 className="font-medium text-sm leading-tight">{title}</h3>
            {subtitle && (
              <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}