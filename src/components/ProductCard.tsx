import { Plus, Pill, Clock, CheckCircle, AlertTriangle } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProductCardProps {
  id: string;
  name: string;
  genericName?: string;
  price: number;
  originalPrice?: number;
  image?: string;
  type: 'prescription' | 'otc';
  inStock: boolean;
  eta?: string;
  dosage?: string;
  quantity?: string;
  prescriptionRequired?: boolean;
  onAddToCart: (id: string) => void;
  onViewDetails: (id: string) => void;
}

export function ProductCard({
  id,
  name,
  genericName,
  price,
  originalPrice,
  image,
  type,
  inStock,
  eta = "30 mins",
  dosage,
  quantity,
  prescriptionRequired,
  onAddToCart,
  onViewDetails
}: ProductCardProps) {
  return (
    <Card className="overflow-hidden border-0 shadow-sm bg-card hover:shadow-md transition-shadow animate-scale-press">
      <CardContent className="p-0">
        <div className="flex gap-3 p-4">
          {/* Product Image */}
          <div className="relative w-16 h-16 bg-secondary rounded-lg flex items-center justify-center shrink-0">
            {image ? (
              <ImageWithFallback
                src={image}
                alt={name}
                className="w-12 h-12 object-contain"
              />
            ) : (
              <Pill className="h-8 w-8 text-primary" />
            )}
            
            {/* Stock status indicator */}
            <div className={`absolute -top-1 -right-1 h-3 w-3 rounded-full border-2 border-card ${
              inStock ? 'bg-success' : 'bg-destructive'
            }`} />
          </div>

          {/* Product Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-1">
              <div className="min-w-0 flex-1">
                <h3 
                  className="font-medium text-sm leading-tight truncate cursor-pointer hover:text-primary"
                  onClick={() => onViewDetails(id)}
                >
                  {name}
                </h3>
                {genericName && (
                  <p className="text-xs text-muted-foreground truncate">{genericName}</p>
                )}
              </div>
              
              {/* Prescription badge */}
              {prescriptionRequired && (
                <Badge variant="outline" className="ml-2 text-xs py-0 px-1 bg-warning/10 text-warning border-warning/20">
                  Rx
                </Badge>
              )}
            </div>

            {/* Dosage & Quantity */}
            {(dosage || quantity) && (
              <div className="flex gap-2 mb-2">
                {dosage && <span className="text-xs text-muted-foreground">{dosage}</span>}
                {quantity && <span className="text-xs text-muted-foreground">• {quantity}</span>}
              </div>
            )}

            {/* Price & Actions */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm">₹{price}</span>
                {originalPrice && originalPrice > price && (
                  <span className="text-xs text-muted-foreground line-through">₹{originalPrice}</span>
                )}
              </div>

              {/* ETA & Add Button */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{eta}</span>
                </div>
                
                <Button
                  size="sm"
                  className="h-7 w-7 p-0 rounded-full bg-accent hover:bg-accent/90"
                  onClick={() => onAddToCart(id)}
                  disabled={!inStock}
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
            </div>

            {/* Stock status */}
            {!inStock && (
              <div className="flex items-center gap-1 mt-2">
                <AlertTriangle className="h-3 w-3 text-destructive" />
                <span className="text-xs text-destructive">Out of stock</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}