import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useState } from 'react';
import { useChannelIOApi, useChannelIOEvent } from 'react-channel-plugin';
import { useRecoilState } from 'recoil';

import { channelIOBootedState } from 'store/store';

const useChannelIO = () => {
  const { boot, showChannelButton, hideChannelButton } = useChannelIOApi();
  const [channelIOBooted] = useRecoilState(channelIOBootedState);
  const [showButton, setShowButton] = useState(false);

  useChannelIOEvent("onHideMessenger", ScrollTrigger.refresh);

  useEffect(() => {
    if (channelIOBooted && showButton) {
      setTimeout(() => showChannelButton(), 1000);
    }
  }, [channelIOBooted]);

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
