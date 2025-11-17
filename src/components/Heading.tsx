import './heading.css';
interface Iprops {
  type: string;
  text: string;
}

export const Heading = ({ type, text }: Iprops) => {
  return <p className={`heading-${type}`}>{text}</p>;
};
