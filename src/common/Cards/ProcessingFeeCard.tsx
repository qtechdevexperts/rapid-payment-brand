import React from "react";
import style from "./index.module.scss";
import clsx from "clsx";


interface ProcessingFeeCardProps {
    title?:String
    description?:String
}


const ProcessingFeeCard = ({description,title}:ProcessingFeeCardProps) => {
  return (
    <div className={clsx(style.ProcessingFeeCard, "p-sm-4")}>
      <h2 className="text-capitalize">{title}</h2>
      <p className="para">
        {description}
      </p>
      <h4 className="text-primary-100">Contact us For Custom Price</h4>
    </div>
  );
};

export default ProcessingFeeCard;
