import { useTheme } from "@/hooks/useThemeMode";
import { Switch } from "@/components";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    switch (theme) {
      case "light":
        setTheme("dark");
        break;
      case "dark":
        setTheme("light");
        break;
      default:
        setTheme("system");
        break;
    }
  };
  return (
    <div>
      <Switch
        id="theme"
        checked={theme === "dark"}
        onCheckedChange={toggleTheme}
      />
    </div>
  );
};

export default ThemeSwitcher;
