import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.pageYOffset > 200);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Button
      onClick={scrollToTop}
      className={`back-to-top ${show ? 'show' : ''}`}
      aria-label="Back to top"
    >
      ↑
    </Button>
  );
}

export default BackToTop;
