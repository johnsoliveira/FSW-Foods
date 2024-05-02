import { useContext } from "react";
import { CartContext } from "../_context/cart";
import CartItem from "./cart-item";
import { Card, CardContent } from "./ui/card";
import { formatCurrency } from "../_helpers/price";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const Cart = () => {
  const { products, totalDiscounts, totalPrice, subtotalPrice } =
    useContext(CartContext);
  return (
    <>
      <div>
        <div className="space-y-4">
          {products.map((product) => (
            <CartItem cartProduct={product} key={product.id} />
          ))}
        </div>
        <div className="mt-6">
          <Card>
            <CardContent className="space-y-2 p-5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatCurrency(subtotalPrice)}</span>
              </div>

              <Separator className="h-[0.5px]" />

              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Entrega</span>
                <span>
                  {Number(products[0].restaurant.deliveryFee) > 0 ? (
                    formatCurrency(Number(products[0].restaurant.deliveryFee))
                  ) : (
                    <span className="uppercase text-primary">
                      Entrega grátis
                    </span>
                  )}
                </span>
              </div>

              <Separator />

              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Descontos</span>
                <span>- {formatCurrency(totalDiscounts)}</span>
              </div>

              <Separator />

              <div className="flex items-center justify-between text-xs font-semibold">
                <span>Total</span>
                <span>{formatCurrency(totalPrice)}</span>
              </div>
            </CardContent>
          </Card>
        </div>
        <Button className="mt-6 w-full">Finalizar pedido</Button>
      </div>
    </>
  );
};

export default Cart;
