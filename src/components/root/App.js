import React from "react";
import { Route, Switch } from "react-router";
import { Container } from "reactstrap";
import CartDetail from "../cart/CartDetail";
import NotFound from "../common/NotFound";
import Navi from "../navi/Navi";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import DashBoard from "./DashBoard";

function App() {
  return (
    <Container>
      <Navi></Navi>
      <Switch>
        <Route path="/" exact component={DashBoard}></Route>
        <Route path="/product" exact component={DashBoard}></Route>
        <Route path="/saveproduct/:productId" component={AddOrUpdateProduct}></Route>
        <Route path="/saveproduct" component={AddOrUpdateProduct}></Route>
        <Route path="/cart" exact component={CartDetail}></Route>
        <Route exact component={NotFound}></Route>
      </Switch>
    </Container>
  );
}

export default App;
