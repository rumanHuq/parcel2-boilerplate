import React from "react";
import AppCss from "../App.module.scss";
import ButtonCss from "./Button.module.scss";

export function Button({ onClick }: { onClick: (theme: string) => void }) {
  return (
    <div className={ButtonCss.buttonGroup}>
      <button type="button" className={ButtonCss.button} onClick={() => onClick(AppCss.dark)}>
        Dark
      </button>
      <button type="button" className={ButtonCss.button} onClick={() => onClick(AppCss.light)}>
        Light
      </button>
    </div>
  );
}
