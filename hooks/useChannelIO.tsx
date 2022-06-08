import { useEffect, useState } from "react";
import { useChannelIOApi, useChannelIOEvent } from "react-channel-plugin";
import { useRecoilState } from "recoil";

import {
  activeRouteState,
  animationEndedState,
  channelIOBootedState,
} from "store/store";

const useChannelIO = () => {
  const { showChannelButton, hideChannelButton, boot } = useChannelIOApi();
  const [channelIOBooted] = useRecoilState(channelIOBootedState);
  const [showButton, setShowButton] = useState(false);
  const [animationEnded] = useRecoilState(animationEndedState);
  const [activeRoute] = useRecoilState(activeRouteState);

  useChannelIOEvent("onShowMessenger", () => {
    if (/iPhone|iPod/i.test(navigator.userAgent)) {
      document.body.classList.add("channel-io-show");
    }
  });

  useChannelIOEvent("onHideMessenger", () => {
    if (/iPhone|iPod/i.test(navigator.userAgent)) {
      document.body.classList.remove("channel-io-show");
    }
  });

  useEffect(() => {
    if (animationEnded && /iPhone|iPod|iPad/i.test(navigator.userAgent)) {
      boot();
    }
  }, [animationEnded]);

  useEffect(() => {
    if (channelIOBooted && showButton) {
      setTimeout(
        () => showChannelButton(),
        /iPhone|iPod|iPad/i.test(navigator.userAgent) ? 1000 : 200
      );
    }
  }, [channelIOBooted, showButton, showChannelButton]);

  useEffect(() => {
    if (activeRoute && showButton) {
      showChannelButton();
    }
  }, [activeRoute, showButton]);

  const show = () => {
    showChannelButton();
    if (!channelIOBooted) {
      setShowButton(true);
    }
  };

  const hide = () => {
    hideChannelButton();
    if (!channelIOBooted) {
      setShowButton(false);
    }
  };

  return { show, hide };
};

export default useChannelIO;
