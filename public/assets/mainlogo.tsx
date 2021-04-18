const MainLogo = ({ width = 148, height = 48 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      viewBox="0 0 148 48"
      fill="none"
    >
      <rect width={width} height={height} fill="url(#pattern_mainlogo)" />
      <defs>
        <pattern id="pattern_mainlogo" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image_mainlogo" transform="scale(0.00675676 0.0208333)" />
        </pattern>
        <image
          id="image_mainlogo"
          width="148"
          height="48"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default MainLogo;
