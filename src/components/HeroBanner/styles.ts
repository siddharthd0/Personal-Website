import styled from 'styled-components';
import tw from 'tailwind.macro';

export const HeroBanner = styled.section`
  ${tw`bg-indigo-100`};
`;

export const Title = styled.h1`
  ${tw`text-4xl sm:text-5xl text-indigo-500 font-bold -mt-8`};
`;

export const Description = styled.p`
  ${tw`mt-3 mb-8`};
`;
