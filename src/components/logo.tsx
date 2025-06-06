import './logo.css';
export default function Logo() {

  const lines = [
    'ZIVY',
  ];

  return (
    <>
      <div className="logo__animation">

        <h1 className="logo" style={{ display: 'inline-block' }}>
          {lines.map((line, index) => (
            <div key={index}
              style={{
                display: 'block',
                position: 'relative',
                overflow: 'hidden',
                zIndex: 1,
              }}
            >
              {line.split('').map((char, charIndex) => (
                <div key={char}
                  className="logo"
                  style={{
                    display: 'inline-block',
                    // overflow: 'hidden',
                    zIndex: 1,
                    filter: 'blur(8px)',
                    animationDelay: `${(1000 + index * 400 + charIndex * 90)}ms`
                  }}
                >
                  {char === '' ? '\u00A0' : char}
                </div>
              ))}
            </div>
          ))}
        </h1>
      </div>
    </>
  );
}

