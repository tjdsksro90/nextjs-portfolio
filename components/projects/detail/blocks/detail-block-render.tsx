import React from 'react';
import { ProjectDetailType } from '@/types/project-detail';
import { BlockDetail } from './detail-blocks';
import { BlockDetailImage } from './detail-blocks-image';

const blockClasses = {
  heading_1: 'mt-16 mb-6 text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50',
  heading_2: 'mt-12 mb-4 text-2xl font-bold tracking-tight sm:text-3xl text-zinc-900 dark:text-zinc-50',
  heading_3: 'mt-8 mb-3 text-lg font-semibold sm:text-xl text-zinc-900 dark:text-zinc-50',
  paragraph: 'mb-3 leading-relaxed text-zinc-600 dark:text-zinc-300',
  bulleted_list_item: 'mb-2 ml-6 leading-relaxed list-disc marker:text-indigo-400 text-zinc-600 dark:text-zinc-300',
  image: '',
};

const BlockRender = ({ block }: { block: ProjectDetailType }) => {
  const blockType = block.type as keyof typeof blockClasses;
  return (
    <li key={block.id} className={blockClasses[blockType]}>
      {blockType && blockType === 'image' ? (
        <BlockDetailImage image={block[blockType].external} />
      ) : (
        // 지원하지 않는 블록 타입(divider 등)은 rich_text가 없으므로 빈 배열로 처리
        <BlockDetail richText={block[blockType]?.rich_text ?? []} />
      )}
    </li>
  );
};

export default BlockRender;
