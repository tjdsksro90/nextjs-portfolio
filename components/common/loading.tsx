import classNames from 'classnames';

export interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
  wrap?: string;
}

export const Loading = ({ size = 24, className, wrap, ...props }: Props) => {
  return (
    <div className={classNames('flex justify-center items-center', wrap)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={classNames('animate-spin', className)}
      >
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </svg>
    </div>
  );
};
