import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';
import { ReactChannelIO } from 'react-channel-plugin';
import { useRecoilState } from 'recoil';

import useChannelIO from 'hooks/useChannelIO';
import { channelIOBootedState } from 'store/store';

const ChannelIOHook = () => {
  const { show, hide } = useChannelIO();

  useEffect(() => {
    ScrollTrigger.create({
      trigger: document.querySelector("#home"),
      start: "bottom +=1",
      onEnter: show,
      onLeaveBack: hide,
    });
  }, []);

  return null;
};

const ChannelIO = () => {
  const [_, setChannelIOBooted] = useRecoilState(channelIOBootedState);

  const Component = ReactChannelIO as any;

  return (
    <Component
      pluginKey={process.env.NEXT_PUBLIC_CHANNEL_PLUGIN_KEY}
      language="ko"
      // ios에서 autoboot 딜레이
      autoBoot={!/iPhone|iPod|iPad/i.test(navigator.userAgent)}
      hideChannelButtonOnBoot
      onBoot={() => setChannelIOBooted(true)}
      verbose={false}
    >
      <ChannelIOHook />
    </Component>
  );
};

export default ChannelIO;
