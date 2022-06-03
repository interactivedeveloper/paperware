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
      toggleActions: "play none none reverse",
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
      pluginKey="4901c2a2-59db-423c-a135-bf76f7b5bff6"
      language="ko"
      autoBoot
      hideChannelButtonOnBoot
      onBoot={() => setChannelIOBooted(true)}
      verbose={false}
    >
      <ChannelIOHook />
    </Component>
  );
};

export default ChannelIO;
