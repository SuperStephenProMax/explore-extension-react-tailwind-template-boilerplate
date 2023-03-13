import React from 'react';
import './Options.css';

interface Props {
  title: string;
}

const Options: React.FC<Props> = ({ title }: Props) => {
  return <div className=" text-lg">{title} 1 Page</div>;
};

export default Options;
