import Icon from "@/components/common/Icon";
import React from "react";
import { Profile_Menu } from "@/data/index";
import { Button, Switch } from "@/components";
import { useTheme } from "@/hooks/useThemeMode";
import { useAppSelector, useAppDispatch } from "@/hooks/useAppState";
import { incre } from "@/app/resources/Counter.slice";
import Avatar from "@/components/common/Avatar";

interface Props {}

const Home = (props: Props) => {
  const { theme, setTheme } = useTheme();

  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="mt-8 flex items-center justify-center space-x-5">
      <Switch
        id="theme"
        onCheckedChange={() => {
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
        }}
      />
      <label htmlFor="theme">switch</label>
      <Icon Icon={Profile_Menu[1].icon} size={24} className="" />
      <Button onClick={() => dispatch(incre())}>{count}</Button>
      <Avatar label="vinit" />
    </div>
  );
};

export default Home;
