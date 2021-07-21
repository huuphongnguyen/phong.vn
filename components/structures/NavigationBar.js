import Logo from "../elements/Logo";
import LanguageSwitcher from "../features/LanguageSwitcher";
import ThemeSwitcher from "../features/ThemeSwitcher";

export default function NavigationBar() {
  return (
    <nav className="flex items-center justify-between">
      <div className="">
        <LanguageSwitcher />
      </div>
      <div className="ml-0 md:ml-9">
        <Logo />
      </div>
      <div className="flex items-center space-x-1">
        <div className="items-center hidden md:flex mb-0 mr-2">
          <a
            href="https://github.com/huuphongnguyen/phong.vn"
            target="_blank"
            className="text-black dark:text-white rainbow_text_hover font-sourcodepro text-sm uppercase"
          >
            source
          </a>
        </div>

        <div className="flex items-center justify-center">
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}
