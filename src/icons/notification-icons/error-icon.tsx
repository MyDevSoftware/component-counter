//types
import { IIconProps } from '../../types';

const ErrorIcon = ({ size }: Omit<IIconProps, 'color'>): JSX.Element => {
  return (
    <svg
      height={size ? size.height : 40}
      width={size ? size.width : 40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      aria-hidden="true"
    >
      <path
        d="M20.0002 38.8891C30.4323 38.8891 38.8891 30.4323 38.8891 20.0002C38.8891 9.56817 30.4323 1.11133 20.0002 1.11133C9.56817 1.11133 1.11133 9.56817 1.11133 20.0002C1.11133 30.4323 9.56817 38.8891 20.0002 38.8891Z"
        fill="#DE1135"
      />
      <path
        d="M20.0006 36.3133C29.0101 36.3133 36.3138 29.0096 36.3138 20.0001C36.3138 10.9906 29.0101 3.68701 20.0006 3.68701C10.9911 3.68701 3.6875 10.9906 3.6875 20.0001C3.6875 29.0096 10.9911 36.3133 20.0006 36.3133Z"
        fill="black"
      />
      <path
        d="M21.365 25.5036C21.365 26.2677 20.7726 26.8601 20.0085 26.8601C19.2443 26.8601 18.6348 26.2677 18.6348 25.5036C18.6348 24.7394 19.2529 24.147 20.0085 24.147C20.764 24.147 21.365 24.7394 21.365 25.5036ZM18.9438 22.9536L18.755 13.1313H21.2534L21.0645 22.9536H18.9438Z"
        fill="white"
      />
    </svg>
  );
};

export default ErrorIcon;
