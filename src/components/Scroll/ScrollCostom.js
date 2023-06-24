import React, { useRef, useEffect } from 'react';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import 'overlayscrollbars/overlayscrollbars.css';
import './scroll.css';

const CustomScrollbar = ({ children, width="100%", height="100%" }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollbarRef = scrollRef.current;

    if (scrollbarRef) {
      const scrollElement = scrollbarRef.current;

      if (scrollElement && typeof scrollElement.destroy === 'function') {
        return () => {
          scrollElement.destroy();
        };
      }
    }
  }, []);


  return (
    <OverlayScrollbarsComponent
      ref={scrollRef}
      style={{ width, height }}
    >

        {children}

    </OverlayScrollbarsComponent>
  );
};

export default CustomScrollbar;


