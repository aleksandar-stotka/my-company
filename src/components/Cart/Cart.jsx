import React from "react";
import {
  Container,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import useStyles from "./styles";
import CartItem from "./CartItem/CartItem";
import Checkout from "../CeckoutForm/checkout/Checkout";
import { useState } from "react";

const Cart = ({
  cart,
  back,
  handleUpdatedCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
  const [showCheckout, setShowCheckout] = useState(false);

  const classes = useStyles();

  const showCheck = () => {
    setShowCheckout(true);
  };
  const hideCheck = () => {
    setShowCheckout(false);
  };

  const EmptyCart = () => (
    <Typography style={{ height: "50rem" }} variant="subtitle1">
      You have no items in your shopping cart, start adding some!
      <Button onClick={showCheck}>Back to products</Button>
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            {
              <CartItem
                item={item}
                onUpdateCartQty={handleUpdatedCartQty}
                onRemoveFromCart={handleRemoveFromCart}
              />
            }
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails} style={{ padding: "2em" }}>
        <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            onClick={handleEmptyCart}
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
          >
            Empty Cart
          </Button>
          <Button
            onClick={showCheck}
            className={classes.checkoutButton}
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            checkout
          </Button>
          <Button
            onClick={back}
            className={classes.checkoutButton}
            size="large"
            type="button"
            variant="contained"
          >
            back to products
          </Button>
        </div>
      </div>
    </>
  );
  if (!cart.line_items) return "loading";

  return (
    <>
      {!showCheckout && (
        <Container>
          <div className={classes.toolbar}></div>
          <Typography className={classes.title} variant="h3" gutterBottom>
            Your Shopping Cart
          </Typography>
          {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
      )}
      {showCheckout && <Checkout cart={cart} hideCheck={hideCheck} />}
    </>
  );
};

export default Cart;
