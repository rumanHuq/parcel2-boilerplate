import React, { useState } from "react";
import AppCss from "./App.module.scss";
import { Button } from "./Button/Button";

export function App() {
  const [theme, setTheme] = useState(AppCss.light);

  return (
    <div className={[AppCss.App, theme].join(" ")}>
      App!!
      <Button onClick={(t: string) => setTheme(t)} />
    </div>
  );
}
