import useSWR from "swr";

import fetcher from "../../lib/fetcher";
import useTranslation from "next-translate/useTranslation";

export default function HomeViewCounter({ slug, checkblog }) {
  const { t } = useTranslation("common");

  const { data } = useSWR(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  return (
    <div>
      {checkblog.map((check, index) => (
        <p
          key={index}
          className={`text-black dark:text-white text-xs ${
            check === "" ? "" : "hidden"
          }`}
        >
          {`${views ? new Number(views).toLocaleString() : "..."} ${t(
            "blog-views-counter-t1"
          )}`}
        </p>
      ))}
    </div>
  );
}
