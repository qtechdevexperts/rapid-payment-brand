import clsx from 'clsx';
import style from './index.module.scss';

interface ServiceCardProps {
  title?: string;
  description?: string;
}

const ServiceCard = ({ title, description }: ServiceCardProps) => {
  return (
    <div className={clsx(style.ServiceCard, 'rounded-4 h-100')}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="39"
        height="39"
        viewBox="0 0 39 39"
        fill="none"
      >
        <path
          d="M8.55914 1.19876C15.5263 0.420075 22.7278 0.420075 29.6949 1.19876C32.3107 1.49111 34.607 2.90568 36.0596 4.96001L17.9988 23.0207L12.4259 17.4479C11.765 16.7869 10.6934 16.7869 10.0325 17.4479C9.37159 18.1088 9.37159 19.1803 10.0325 19.8413L16.8021 26.6109C17.463 27.2718 18.5346 27.2718 19.1955 26.6109L37.5083 8.29814C37.559 8.54537 37.5994 8.79643 37.6292 9.05088C38.4624 16.1746 38.4624 23.3711 37.6292 30.4948C37.1444 34.6399 33.8162 37.8863 29.6949 38.3469C22.7278 39.1256 15.5263 39.1256 8.55914 38.3469C4.43785 37.8863 1.1097 34.6399 0.624885 30.4948C-0.208295 23.3711 -0.208295 16.1746 0.624885 9.05088C1.1097 4.90571 4.43785 1.65937 8.55914 1.19876Z"
          fill="white"
        />
      </svg>
      <h5 className="my-3 ">{title}</h5>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
