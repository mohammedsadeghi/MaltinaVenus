import React, {FC} from 'react';
import Star from 'react-native-star-view';

type StarProps = {
  score: number;
};

export const StarScore: FC<StarProps> = ({score}) => {
  const starStyle = {
    width: 100,
    height: 20,
    marginBottom: 20,
  };
  return <Star score={score} style={starStyle} />;
};
