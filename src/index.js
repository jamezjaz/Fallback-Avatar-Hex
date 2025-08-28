import React from 'react'

// const ExampleComponent = ({ text }) => {
//   return <div className={styles.test}>Example Component: {text}</div>
// };

// export default ExampleComponent;

const generateAvatarText = (name) => {
  return name?.charAt(0)?.toUpperCase();
};

const generateColorFromName = (name) => {
  let hash = 5381;
  for (let i = 0; i < name?.length; i++) {
    hash = (hash * 33) + name?.charCodeAt(i);
  };
  const r = (hash & 0xFF0000) >> 16;
  const g = (hash & 0x00FF00) >> 8;
  const b = hash & 0x0000FF;
  return `rgb(${r}, ${g}, ${b})`;
};

const generateAvatarColor = (name) => {
  const truncatedName = name?.slice(0, 3); // Use first 3 letters of name
  return generateColorFromName(truncatedName);
};

const FallbackAvatarHex = ({ text, size }) => {
  const avatarText = generateAvatarText(text);
  const backgroundColor = generateAvatarColor(text);

  return (
    <div
      style={{
        backgroundColor: text === 'r' ? '#6867FF' : backgroundColor,
        color: '#FFFFFF',
        width: `${size}rem`,
        height: `${size}rem`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: `${size / 2}rem`,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        clipPath:
          'polygon(50% 0, 85% 25%, 85% 75%, 50% 100%, 15% 75%, 15% 25%)'
      }}
    >
      {avatarText}
    </div>
  );
};

export default FallbackAvatarHex;
