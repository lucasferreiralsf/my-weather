/* eslint-disable */
import React from 'react';

function EmptyLogo(props: any) {
  const {
    width = '100%',
    height = '100%',
    fontSize = 'inherit',
    fill = 'none',
    className,
    ...otherProps
  } = props;

  return (
    <svg
      height={height}
      width={width}
      fontSize={fontSize}
      viewBox="0 0 221 142"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill={fill}
      {...otherProps}
    >
      <path
        d="M188.5 13.5V22.5H186.5V13.5H188.5ZM198 10.5V12.5H190V10.5H198ZM185 10.5V12.5H177V10.5H185ZM188.5 0V9H186.5V0H188.5Z"
        fill="#C2CCD5"
        fillOpacity="0.3"
      />
      <path
        d="M198.214 91.6V98H196.786V91.6H198.214ZM205 89.4667V90.8889H199.286V89.4667H205ZM195.714 89.4667V90.8889H190V89.4667H195.714ZM198.214 82V88.4H196.786V82H198.214Z"
        fill="#E3E4E6"
      />
      <path
        d="M8.21429 86.6V93H6.78571V86.6H8.21429ZM15 84.4667V85.8889H9.28571V84.4667H15ZM5.71429 84.4667V85.8889H0V84.4667H5.71429ZM8.21429 77V83.4H6.78571V77H8.21429Z"
        fill="#E3E4E6"
      />
      <path
        d="M45 20C48.866 20 52 16.866 52 13C52 9.13401 48.866 6 45 6C41.134 6 38 9.13401 38 13C38 16.866 41.134 20 45 20Z"
        stroke="#C2CCD5"
        strokeOpacity="0.3"
        strokeWidth="2"
      />
      <path
        d="M214.5 139C217.538 139 220 136.538 220 133.5C220 130.462 217.538 128 214.5 128C211.462 128 209 130.462 209 133.5C209 136.538 211.462 139 214.5 139Z"
        stroke="#C2CCD5"
        strokeOpacity="0.3"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M162.119 43H54.5619C49.2442 43 44.8566 47.1617 44.5758 52.472L40.5571 128.472C40.2654 133.987 44.4999 138.694 50.0151 138.986C50.1909 138.995 50.367 139 50.5431 139H155.689C160.885 139 165.215 135.021 165.653 129.843L172.083 53.843C172.549 48.3399 168.465 43.5012 162.962 43.0356C162.681 43.0119 162.4 43 162.119 43Z"
        fill="#4862e6"
        fillOpacity="0.4"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M57.7702 48C60.5769 48 63.2543 49.1794 65.1487 51.2503L68.5785 55H149.558C154.858 55 159.237 59.135 159.542 64.4262L163.392 131.426C163.709 136.94 159.496 141.667 153.982 141.984C153.791 141.994 153.6 142 153.409 142H50.1225C44.9544 142 40.6377 138.062 40.1645 132.916L34.0035 65.9157C33.9929 65.8 33.9843 65.6846 33.9776 65.5695L33.2522 59.1193C32.6341 53.6311 36.582 48.681 42.0701 48.0628C42.4417 48.021 42.8154 48 43.1894 48H57.7702Z"
        fill="#4862e6"
      />
      <path
        d="M98.5 107.923C104.389 107.923 109.028 110.27 112.317 114.923C112.635 115.374 112.528 115.998 112.077 116.317C111.626 116.635 111.002 116.528 110.683 116.077C107.774 111.96 103.746 109.923 98.5 109.923C93.2537 109.923 89.2263 111.96 86.3166 116.077C85.9979 116.528 85.3738 116.635 84.9228 116.317C84.4718 115.998 84.3646 115.374 84.6834 114.923C87.972 110.27 92.6112 107.923 98.5 107.923ZM77 91C78.6569 91 80 92.3431 80 94C80 95.6569 78.6569 97 77 97C75.3431 97 74 95.6569 74 94C74 92.3431 75.3431 91 77 91ZM119 91C120.657 91 122 92.3431 122 94C122 95.6569 120.657 97 119 97C117.343 97 116 95.6569 116 94C116 92.3431 117.343 91 119 91Z"
        fill="#fff"
      />
    </svg>
  );
}

export default EmptyLogo;