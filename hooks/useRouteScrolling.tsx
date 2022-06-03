import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { RefObject, useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { activeRouteState } from 'store/store';

const useRouteScrolling = ({
  ref,
  route,
}: {
  ref: RefObject<HTMLElement>;
  route: string;
}) => {
  const [_, setActiveRoute] = useRecoilState(activeRouteState);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ref.current,
      start: "top +=1",
      end: "bottom top",
      onEnter: () => setActiveRoute(route),
      onEnterBack: () => setActiveRoute(route),
    });
  }, [ref, route, setActiveRoute]);
};

export default useRouteScrolling;
