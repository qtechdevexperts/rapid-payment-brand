import React from "react";
import style from "./index.module.scss";
import clsx from "clsx";
import { OnlinePaymentService } from "@/utils/data";


interface IntegrationCardProps {
    title?:String
    desc?:String
}




const IntegrationCard = ({desc,title}:IntegrationCardProps) => {
  return (
    <div className={clsx(style.IntegratationCard,'p-2')}>
      <div
        className={clsx(
          style.integrationIcon,
          "d-flex justify-content-center align-items-center"
        )}
      >
        <img src="/images/icon/diamond-icon.png" alt="" />
      </div>
      <h2 dangerouslySetInnerHTML={{ __html:title || "" }} />
      <p className="text-center para">
        {desc}
      </p>
    </div>
  );
};

export default IntegrationCard;
