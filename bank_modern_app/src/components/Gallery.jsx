import React, { useState, useEffect, useRef } from 'react';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [displayedRows, setDisplayedRows] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const getRandomSize = () => {
      const randomNumber = Math.random();
      if (randomNumber < 0.2) {
        return { width: 400, height: 300 };
      } else if (randomNumber < 0.6) {
        return { width: 300, height: 200 };
      } else {
        return { width: 200, height: 150 + Math.floor(Math.random() * 100) };
      }
    };

    const getRandomPhoto = () => {
      const size = getRandomSize();
      const randomId = Math.floor(Math.random() * 1000);
      return { url: `https://picsum.photos/${size.width}/${size.height}?image=${randomId}`, ...size };
    };

    const updatePhotos = () => {
      const newPhotos = Array.from({ length: 15 }, () => getRandomPhoto());
      setPhotos(newPhotos);
    };

    updatePhotos();

    const intervalId = setInterval(() => {
      updatePhotos();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const chunkArray = (arr, size) => {
      return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
        arr.slice(index * size, index * size + size)
      );
    };

    const container = containerRef.current;

    const updateDisplayedRows = () => {
      const rowHeight = 200;
      const containerHeight = container.clientHeight;
      const firstVisibleRowIndex = Math.floor(container.scrollTop / rowHeight);
      const visibleRowCount = Math.ceil(containerHeight / rowHeight);
      const maxRowIndex = Math.max(chunkArray(photos, 5).length - visibleRowCount, 0);
      const clampedIndex = Math.min(firstVisibleRowIndex, maxRowIndex);

      const displayedRows = chunkArray(photos, 5).slice(clampedIndex, clampedIndex + visibleRowCount);

      setDisplayedRows(displayedRows);
    };

    container.addEventListener('scroll', updateDisplayedRows);
    updateDisplayedRows();

    return () => container.removeEventListener('scroll', updateDisplayedRows);
  }, [photos]);

  return (
    <div className="container" style={{ height: '1350px', overflowY: 'auto', display: 'flex', flexDirection: 'column' }} ref={containerRef}>
      {displayedRows.map((row, rowIndex) => (
        <div key={rowIndex} className="row" style={{ display: 'flex' }}>
          {row.map((photo, index) => (
            <div key={index} className="image" style={{ flex: photo.width, overflow: 'hidden', margin: '5px' }}>
              <img
                src={photo.url}
                alt={`Photo ${index}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Gallery;
