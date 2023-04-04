import React from "react";
import { CardtWidget } from "./CardtWidget";

export const CardtWidgetConteiner = () => {

  let ItemCarrito = 0;

  return (
    <div>
      <CardtWidget ItemCarrito={ItemCarrito} />
    </div>
  );
};
