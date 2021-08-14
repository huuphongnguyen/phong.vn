import useTranslation from "next-translate/useTranslation";

export default function RevueForm() {
  const { t } = useTranslation("common");

  return (
    <div className="text-black dark:text-white p-4 border-2 border-black dark:border-white border-dashed rounded-xl">
      <div className="space-y-1">
        <p className="text-black dark:text-white font-sourcecodepro uppercase font-bold">
          {t("subscribe-title")}
        </p>
        <p className="text-black dark:text-white text-sm">
          {t("subscribe-subtitle")}
        </p>
      </div>
      <div id="revue-embed">
        <form
          action="https://www.getrevue.co/profile/phong/add_subscriber"
          method="post"
          id="revue-form"
          name="revue-form"
          target="_blank"
        >
          <div className="md:flex md:items-center md:space-x-2">
            <div className="inline-flex items-center space-x-2 p-2 bg-gray-100 dark:bg-gray-800 rounded-xl my-2">
              <div class="revue-form-group w-full">
                <input
                  className="revue-form-field px-2 rounded-md w-auto md:w-[300px]"
                  placeholder={t("subscribe-placeholder")}
                  type="email"
                  name="member[email]"
                  id="member_email"
                />
              </div>
              <div className="revue-form-actions inline-flex items-center justify-center">
                <input
                  className="px-2 rounded-md rainbow_bg text-white font-bold uppercase text-sm transition-all  active:scale-[0.9]"
                  type="submit"
                  value={t("subscribe-button")}
                  name="member[subscribe]"
                  id="member_submit"
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <p className="text-black dark:text-white text-sm">
                {t("subscribe-poweredby")}
              </p>
              <a href="https://www.getrevue.co" target="_blank">
                <img src="/icons/revue.svg" className="w-20" />
              </a>
            </div>
          </div>
          <div className="revue-form-footer text-sm mt-2">
            {t("subscribe-note1")}{" "}
            <a
              className="font-bold rainbow_text_hover"
              target="_blank"
              href="https://www.getrevue.co/terms"
            >
              {t("subscribe-term")}
            </a>{" "}
            {t("subscribe-note2")}{" "}
            <a
              className="font-bold rainbow_text_hover"
              target="_blank"
              href="https://www.getrevue.co/privacy"
            >
              {t("subscribe-privacy")}
            </a>{" "}
            {t("subscribe-note3")}.
          </div>
        </form>
      </div>
    </div>
  );
}
