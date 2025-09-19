import { useState } from "react";
import { Plus, Minus, Clock, CheckCircle, AlertTriangle, Heart, Share2, Star, Pill } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardFooter } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion, AnimatePresence } from "motion/react";

interface DesktopProductCardProps {
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
  rating?: number;
  reviewCount?: number;
  hasInteractions?: boolean;
  discount?: number;
  isWishlisted?: boolean;
  variant?: 'grid' | 'list';
  onAddToCart: (id: string, quantity: number) => void;
  onViewDetails: (id: string) => void;
  onToggleWishlist?: (id: string) => void;
  onQuickView?: (id: string) => void;
}

export function DesktopProductCard({
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
  rating = 4.5,
  reviewCount = 0,
  hasInteractions = false,
  discount,
  isWishlisted = false,
  variant = 'grid',
  onAddToCart,
  onViewDetails,
  onToggleWishlist,
  onQuickView
}: DesktopProductCardProps) {
  const [cartQuantity, setCartQuantity] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAddToCart = () => {
    if (cartQuantity === 0) {
      setCartQuantity(1);
      onAddToCart(id, 1);
    } else {
      const newQuantity = cartQuantity + 1;
      setCartQuantity(newQuantity);
      onAddToCart(id, newQuantity);
    }
    
    // Trigger fly animation
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handleQuantityChange = (delta: number) => {
    const newQuantity = Math.max(0, cartQuantity + delta);
    setCartQuantity(newQuantity);
    onAddToCart(id, newQuantity);
  };

  if (variant === 'list') {
    return (
      <Card 
        className={`overflow-hidden transition-all duration-300 hover:shadow-lg animate-card-hover ${!inStock ? 'opacity-60' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-0">
          <div className="flex gap-4 p-4">
            {/* Product Image */}
            <div className="relative w-24 h-24 bg-muted rounded-lg flex items-center justify-center shrink-0">
              {image ? (
                <ImageWithFallback
                  src={image}
                  alt={name}
                  className="w-20 h-20 object-contain"
                />
              ) : (
                <Pill className="h-12 w-12 text-primary" />
              )}
              
              {/* Stock status */}
              <div className={`absolute -top-1 -right-1 h-3 w-3 rounded-full border-2 border-card ${
                inStock ? 'bg-success' : 'bg-destructive'
              }`} />

              {/* Discount badge */}
              {discount && (
                <Badge variant="destructive" className="absolute -top-2 -left-2 text-xs px-1 py-0">
                  -{discount}%
                </Badge>
              )}
            </div>

            {/* Product Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-2">
                <div className="min-w-0 flex-1">
                  <h3 
                    className="font-semibold cursor-pointer hover:text-primary transition-colors truncate"
                    onClick={() => onViewDetails(id)}
                  >
                    {name}
                  </h3>
                  {genericName && (
                    <p className="text-sm text-muted-foreground truncate">{genericName}</p>
                  )}
                  
                  {/* Badges */}
                  <div className="flex gap-2 mt-2">
                    {prescriptionRequired && (
                      <Badge variant="outline" className="text-xs py-0 px-2 bg-warning/10 text-warning border-warning/20">
                        Prescription Required
                      </Badge>
                    )}
                    {hasInteractions && (
                      <Badge variant="outline" className="text-xs py-0 px-2 bg-destructive/10 text-destructive border-destructive/20">
                        Drug Interactions
                      </Badge>
                    )}
                  </div>
                </div>
                
                {/* Actions */}
                <div className="flex items-center gap-2 ml-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => onToggleWishlist?.(id)}
                  >
                    <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current text-destructive' : ''}`} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Dosage & Quantity */}
              <div className="flex gap-4 text-sm text-muted-foreground mb-3">
                {dosage && <span>{dosage}</span>}
                {quantity && <span>• {quantity}</span>}
                {rating > 0 && (
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-current text-yellow-400" />
                    <span>{rating}</span>
                    {reviewCount > 0 && <span>({reviewCount})</span>}
                  </div>
                )}
              </div>

              {/* Price & Actions */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold">₹{price}</span>
                    {originalPrice && originalPrice > price && (
                      <span className="text-sm text-muted-foreground line-through">₹{originalPrice}</span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{eta}</span>
                  </div>
                </div>

                {/* Quantity Controls or Add Button */}
                <div className="flex items-center gap-2">
                  {cartQuantity > 0 ? (
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleQuantityChange(-1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="font-medium min-w-[2ch] text-center">{cartQuantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleQuantityChange(1)}
                        disabled={!inStock}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  ) : (
                    <Button
                      size="sm"
                      onClick={handleAddToCart}
                      disabled={!inStock}
                      className="bg-accent hover:bg-accent/90"
                    >
                      Add to Cart
                    </Button>
                  )}
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

  // Grid variant
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Card 
        className={`overflow-hidden h-full transition-all duration-300 hover:shadow-xl group ${!inStock ? 'opacity-60' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-0">
          {/* Product Image */}
          <div className="relative bg-muted aspect-square flex items-center justify-center overflow-hidden">
            {image ? (
              <ImageWithFallback
                src={image}
                alt={name}
                className="w-3/4 h-3/4 object-contain group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <Pill className="h-16 w-16 text-primary" />
            )}
            
            {/* Badges */}
            <div className="absolute top-2 left-2 flex flex-col gap-1">
              {discount && (
                <Badge variant="destructive" className="text-xs px-2 py-1">
                  -{discount}%
                </Badge>
              )}
              {prescriptionRequired && (
                <Badge variant="outline" className="text-xs px-2 py-1 bg-warning/10 text-warning border-warning/20">
                  Rx
                </Badge>
              )}
            </div>

            {/* Stock status */}
            <div className={`absolute top-2 right-2 h-3 w-3 rounded-full border-2 border-card ${
              inStock ? 'bg-success' : 'bg-destructive'
            }`} />

            {/* Hover Actions */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-2 right-2 flex flex-col gap-1"
                >
                  <Button
                    variant="secondary"
                    size="icon"
                    className="h-8 w-8 shadow-md"
                    onClick={() => onToggleWishlist?.(id)}
                  >
                    <Heart className={`h-3 w-3 ${isWishlisted ? 'fill-current text-destructive' : ''}`} />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="h-8 w-8 shadow-md"
                    onClick={() => onQuickView?.(id)}
                  >
                    <Share2 className="h-3 w-3" />
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Interaction Warning */}
            {hasInteractions && (
              <div className="absolute bottom-2 left-2">
                <Badge variant="outline" className="text-xs px-2 py-1 bg-destructive/10 text-destructive border-destructive/20">
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  Interactions
                </Badge>
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="p-4 space-y-3">
            <div>
              <h3 
                className="font-semibold line-clamp-2 cursor-pointer hover:text-primary transition-colors leading-tight"
                onClick={() => onViewDetails(id)}
              >
                {name}
              </h3>
              {genericName && (
                <p className="text-sm text-muted-foreground line-clamp-1">{genericName}</p>
              )}
            </div>

            {/* Dosage & Quantity */}
            <div className="flex gap-2 text-xs text-muted-foreground">
              {dosage && <span>{dosage}</span>}
              {quantity && <span>• {quantity}</span>}
            </div>

            {/* Rating */}
            {rating > 0 && (
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-current text-yellow-400" />
                <span className="text-sm font-medium">{rating}</span>
                {reviewCount > 0 && (
                  <span className="text-xs text-muted-foreground">({reviewCount})</span>
                )}
              </div>
            )}

            {/* Price */}
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg">₹{price}</span>
              {originalPrice && originalPrice > price && (
                <span className="text-sm text-muted-foreground line-through">₹{originalPrice}</span>
              )}
            </div>

            {/* Delivery Time */}
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span>{eta}</span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0">
          {/* Stock status */}
          {!inStock ? (
            <div className="w-full flex items-center gap-1 text-destructive">
              <AlertTriangle className="h-4 w-4" />
              <span className="text-sm">Out of stock</span>
            </div>
          ) : (
            // Quantity Controls or Add Button
            <div className="w-full">
              {cartQuantity > 0 ? (
                <div className="flex items-center justify-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => handleQuantityChange(-1)}
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="font-medium min-w-[2ch] text-center">{cartQuantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => handleQuantityChange(1)}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              ) : (
                <Button
                  className={`w-full bg-accent hover:bg-accent/90 relative ${isAnimating ? 'animate-fly-to-cart' : ''}`}
                  onClick={handleAddToCart}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              )}
            </div>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}