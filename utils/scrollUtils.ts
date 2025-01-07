export const scrollToMedia = () => {
  const mediaSection = document.getElementById('media-section');
  if (mediaSection) {
    const yOffset = -25;
    const y = mediaSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
    
    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  }
};
