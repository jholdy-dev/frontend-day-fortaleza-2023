import SpeakerThumb from '@/components/SpeakerThumb';
import { Box, Flex, styled } from '@/styled-system/jsx';
import React from 'react';
import { css } from '@/styled-system/css';

import NextImage from 'next/image';
import { Orbitron } from 'next/font/google';
import { getGithubUserData } from '@/services/gh-user';

const orbitron = Orbitron({ subsets: ['latin'], weight: ['800'] });

const GitHubIcon = () => (
  <styled.svg
    fill='secondary'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 50 50'
    width='25px'
    height='25px'
  >
    <path d='M17.791 46.836A1.999 1.999 0 0 0 19 45v-5.4c0-.197.016-.402.041-.61A.611.611 0 0 1 19 39h-3.6c-1.5 0-2.8-.6-3.4-1.8-.7-1.3-1-3.5-2.8-4.7-.3-.2-.1-.5.5-.5.6.1 1.9.9 2.7 2 .9 1.1 1.8 2 3.4 2 2.487 0 3.82-.125 4.622-.555C21.356 34.056 22.649 33 24 33v-.025c-5.668-.182-9.289-2.066-10.975-4.975-3.665.042-6.856.405-8.677.707a21.537 21.537 0 0 1-.151-.987c1.797-.296 4.843-.647 8.345-.714a8.162 8.162 0 0 1-.291-.849c-3.511-.178-6.541-.039-8.187.097-.02-.332-.047-.663-.051-.999 1.649-.135 4.597-.27 8.018-.111a9.832 9.832 0 0 1-.13-1.543c0-1.7.6-3.5 1.7-5-.5-1.7-1.2-5.3.2-6.6 2.7 0 4.6 1.3 5.5 2.1C21 13.4 22.9 13 25 13s4 .4 5.6 1.1c.9-.8 2.8-2.1 5.5-2.1 1.5 1.4.7 5 .2 6.6 1.1 1.5 1.7 3.2 1.6 5 0 .484-.045.951-.11 1.409 3.499-.172 6.527-.034 8.204.102-.002.337-.033.666-.051.999-1.671-.138-4.775-.28-8.359-.089a8.272 8.272 0 0 1-.325.98c3.546.046 6.665.389 8.548.689-.043.332-.093.661-.151.987-1.912-.306-5.171-.664-8.879-.682-1.665 2.878-5.22 4.755-10.777 4.974V33c2.6 0 5 3.9 5 6.6V45c0 .823.498 1.53 1.209 1.836C41.37 43.804 48 35.164 48 25 48 12.318 37.683 2 25 2S2 12.318 2 25c0 10.164 6.63 18.804 15.791 21.836z' />
  </styled.svg>
);

type Props = {
  params: { id: string };
};

const CardPage: React.FC<Props> = async ({ params: { id } }) => {
  const user = await getGithubUserData(id);

  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      p='6'
      bg='primary'
      minH='100vh'
    >
      <Box
        w='100%'
        maxW='380px'
        aspectRatio='2/3'
        bgImage='url(/images/bg-credential.png)'
        bgSize='cover'
        bgPosition='center'
        bgRepeat='no-repeat'
        borderRadius='10px'
        boxShadow='0 0 10px rgba(0,0,0,.5)'
        py='7'
        textAlign='center'
        color='white'
      >
        <Box
          w='20%'
          h='10px'
          borderRadius='10px'
          bg='primary'
          mt='-1.5'
          mx='auto'
        />
        <Flex h='100%' flexDir='column' justifyContent='space-between'>
          <Flex justifyContent='center' alignItems='center' flexDir='column'>
            <NextImage
              src='/logo-white.svg'
              alt='logo'
              width={150}
              height={100}
              className={css({
                mt: '4',
                transition: 'all .3s ease-in-out',
                _hover: {
                  transform: 'scale(1.03)',
                  opacity: '.8',
                },
              })}
            />
            <SpeakerThumb image={user.avatar_url} name='Sonata Dusk' />
            <styled.h1
              color='tertiary'
              textTransform='uppercase'
              fontWeight='700'
              mt='-3'
              fontSize='2xl'
            >
              {user.name}
            </styled.h1>

            <Box
              bg='secondary'
              color='primary'
              my='2'
              py='3'
              w='100%'
              textTransform='uppercase'
              letterSpacing='1.5px'
            >
              <div className={orbitron.className}>
                <styled.p lineHeight='1.1'>Participante</styled.p>
                <styled.p lineHeight='1.1' fontSize='4xl'>
                  Confirmado
                </styled.p>
              </div>
            </Box>
            <styled.p mt='1.5'>
              <styled.span fontWeight='700'>14 OUT</styled.span> | Fortaleza
            </styled.p>
          </Flex>
          <styled.a
            display='block'
            mx='auto'
            color='primary'
            bg='tertiary'
            p='5px'
            w='100%'
            maxWidth='250px'
            borderRadius='20px'
            href='https://frontendday.com.br'
            letterSpacing='1px'
            target='_blank'
            fontSize='sm'
          >
            frontendday.com.br
          </styled.a>
        </Flex>
      </Box>
    </Flex>
  );
};

export default CardPage;