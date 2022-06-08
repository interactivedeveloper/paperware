import { atom } from "recoil";

export const activeRouteState = atom({
  key: "activeRouteState",
  default: "",
});

export const channelIOBootedState = atom({
  key: "channelIOBootedState",
  default: false,
});

export const scrollStartedState = atom({
  key: "scrollStartedState",
  default: false,
});

export const animationEndedState = atom({
  key: "animationEndedState",
  default: false,
});
