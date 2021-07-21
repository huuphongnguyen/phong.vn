import React, { useEffect } from "react";
import useTranslation from "next-translate/useTranslation";

export default function ArchillectTenMinutesCounter() {
  const { t } = useTranslation("archillect");

  const countdown = () => {
    let timer = document.getElementById("timer");
    let dt = new Date();
    let m = dt.getMinutes();
    let s = dt.getSeconds();

    // minutes remaining until next 10 minute mark
    m = s ? 9 - (m % 10) : 10 - (m % 10);

    // seconds remaining until next minute mark
    if (s) {
      s = 60 - s;
    }

    timer.textContent = `${m}:${s < 10 ? "0" + s : s}`;
  };

  useEffect(() => {
    const run = setInterval(countdown, 1000);
    return () => clearInterval(run);
  }, []);

  return (
    <div>
      <p className="text-black dark:text-white text-sm">
        {t("archillect-10counter")}{" "}
        <span
          id="timer"
          className="rainbow_text_animated inline-block p-1 font-bold font-sourcecodepro text-base"
        />
      </p>
    </div>
  );
}
