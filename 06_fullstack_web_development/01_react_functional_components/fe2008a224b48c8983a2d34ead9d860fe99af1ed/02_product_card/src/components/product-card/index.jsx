import React from "react";
import CardHeader from "./header";
import CardFooter from "./footer";
import CardBody from "./body";

const ProductCard = (props) => {
  return (
    <>
      <div className="total">
        <div>
          <CardHeader
            names={props.product.name}
            platforms={props.product.platforms}
            addate={props.product.first_release_date}
          />
        </div>
        <div>
          <CardBody screenshots={props.product.screenshots} />
        </div>
        <div>
          <CardFooter cover={props.product.cover.url} />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
