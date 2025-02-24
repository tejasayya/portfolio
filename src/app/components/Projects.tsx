import { CardBody, CardContainer, CardItem } from './3d-card';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Projects = (props: any) => {
  return (
    <div>
      <CardContainer className='inter-var'>
        <CardBody className="bg-gray-900/50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-6 border">
          <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
            {props.title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            <Image
              src={props.img}
              width={props.imgw}
              height={props.imgh}
              alt="Project image"
            />
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {props.descrip[0]}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {props.descrip[1]}
          </CardItem>
          <div className="flex justify-between items-center mt-4">
            <CardItem
              translateZ={20}
              as={Link}
              href={props.code}
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Github 🔗
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              onClick={() => window.open(props.live, "_blank")}
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Deployed 🔗
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default Projects;
