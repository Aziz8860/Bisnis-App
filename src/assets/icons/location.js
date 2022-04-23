import React from 'react';
import Svg, {Path} from 'react-native-svg';

const location = () => {
  return (
    <Svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M9 1.5C6.0975 1.5 3.75 3.8475 3.75 6.75C3.75 9.8775 7.065 14.19 8.43 15.8325C8.73 16.1925 9.2775 16.1925 9.5775 15.8325C10.935 14.19 14.25 9.8775 14.25 6.75C14.25 3.8475 11.9025 1.5 9 1.5ZM9 8.625C7.965 8.625 7.125 7.785 7.125 6.75C7.125 5.715 7.965 4.875 9 4.875C10.035 4.875 10.875 5.715 10.875 6.75C10.875 7.785 10.035 8.625 9 8.625Z"
        fill="#C4C4C4"
      />
    </Svg>
  );
};

export default location;