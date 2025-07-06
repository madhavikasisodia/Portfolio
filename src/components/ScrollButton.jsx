import { useState, useEffect } from 'react';
import '../styles/ScrollButton.css';

function ScrollButton() {
  const [scrollPosition, setScrollPosition] = useState('top');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if at top
      if (scrollY < 100) {
        setScrollPosition('top');
        return;
      }

      // Check if at bottom
      if (scrollY + windowHeight >= documentHeight - 100) {
        setScrollPosition('bottom');
        return;
      }

      setScrollPosition('middle');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const sections = Array.from(document.querySelectorAll('section'));
    const currentSection = sections.find(section => {
      const rect = section.getBoundingClientRect();
      return rect.top <= 100 && rect.bottom > 100;
    });

    if (currentSection) {
      const nextSection = sections[sections.indexOf(currentSection) + 1];
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="scroll-button-container">
      {scrollPosition !== 'top' && (
        <button
          className="scroll-button up"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          ⭡
        </button>
      )}
      {scrollPosition !== 'bottom' && (
        <button
          className="scroll-button down"
          onClick={scrollToNextSection}
          aria-label="Scroll to next section"
          title="Scroll to next section"
        >
          ⭣
        </button>
      )}
    </div>
  );
}

export default ScrollButton;

