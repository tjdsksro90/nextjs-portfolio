import React from 'react';
import { ProjectDetailType } from '@/types/project-detail';
import { BlockDetail } from './detail-blocks';
import { BlockDetailImage } from './detail-blocks-image';

const blockClasses = {
  heading_1: 'mt-12 text-4xl font-semibold mb-7 sm:text-6xl',
  heading_2: 'mt-10 text-2xl font-semibold mb-5 sm:text-4xl',
  heading_3: 'mt-5 mb-3 text-xl font-semibold sm:text-2xl',
  paragraph: 'mb-2',
  bulleted_list_item: 'mb-2 ml-6 list-disc',
  image: '',
};

const BlockRender = ({ block }: { block: ProjectDetailType }) => {
  const blockType = block.type as keyof typeof blockClasses;
  return (
    <li key={block.id} className={blockClasses[blockType]}>
      {blockType && blockType === 'image' ? (
        <BlockDetailImage image={block[blockType].external} />
      ) : (
        <BlockDetail richText={block[blockType].rich_text} />
      )}
    </li>
  );
};

export default BlockRender;
