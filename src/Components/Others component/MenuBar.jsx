import { useRef, useEffect } from 'react';
import clickSound from '../../assets/audio/mixkit-clear-mouse-clicks-2997.wav'
import unclickedSound from '../../assets/audio/mixkit-camera-shutter-click-1133.wav'


export function Menubar() {

  const menuIconRef = useRef(null);
  const clickedRef = useRef(null);
  const unclickedRef = useRef(null);

  function toggleList() {
    const navElement = document.querySelector(`.menuOption`);

    menuIconRef.current?.classList.toggle("open");
    navElement.classList.toggle("open_profile");

    if (menuIconRef.current?.classList.contains("open")) {
      clickedRef.current?.play();
    } else {
      unclickedRef.current?.play();
    }
  }

  useEffect(() => {
    const closeMenuOnBodyClick = (event) => {
      const menuIcon = document.querySelector(`.menu-icon`);
      const navElement = document.querySelector(`.menuOption`);

      if (!menuIcon.contains(event.target) && !navElement.contains(event.target)) {
        menuIcon.classList.remove("open");
        navElement.classList.remove("open_profile");
      }
    };

    document.body.addEventListener('click', closeMenuOnBodyClick);
    window.addEventListener('scroll', closeMenuOnBodyClick);

    return () => {
      document.body.removeEventListener('click', closeMenuOnBodyClick);
      window.removeEventListener('scroll', closeMenuOnBodyClick);
    };
  }, []);

  return (
    <section>
      <div className="menu-icon" onClick={toggleList} ref={menuIconRef}>
        <div></div>
        <div></div>
      </div>
      <audio ref={clickedRef} src={clickSound}></audio>
      <audio ref={unclickedRef} src={unclickedSound}></audio>
    </section>
  );
}

export default Menubar;