import React from 'react';
import { ProjectDetailType } from '@/types/project-detail';
import { BlockDetail } from './detail-blocks';
import { BlockDetailImage } from './detail-blocks-image';
import { BlockDetailTable } from './detail-blocks-table';

const HEADING_CLASS = 'font-bold tracking-tight text-zinc-900 dark:text-zinc-50';
const TEXT_CLASS = 'leading-relaxed text-zinc-700 dark:text-zinc-300';

// 블록 하나 → 알맞은 HTML 요소 (지원하지 않는 블록은 그리지 않는다)
const renderBlock = (block: ProjectDetailType) => {
  switch (block.type) {
    case 'heading_1':
      return (
        <h2 key={block.id} className={`mt-16 mb-6 text-3xl sm:text-4xl first:mt-0 ${HEADING_CLASS}`}>
          <BlockDetail richText={block.heading_1.rich_text} />
        </h2>
      );
    case 'heading_2':
      return (
        <h3 key={block.id} className={`mt-12 mb-4 text-2xl sm:text-3xl first:mt-0 ${HEADING_CLASS}`}>
          <BlockDetail richText={block.heading_2.rich_text} />
        </h3>
      );
    case 'heading_3':
      return (
        <h4 key={block.id} className={`mt-8 mb-3 text-lg sm:text-xl first:mt-0 ${HEADING_CLASS}`}>
          <BlockDetail richText={block.heading_3.rich_text} />
        </h4>
      );
    case 'paragraph':
      return block.paragraph.rich_text.length > 0 ? (
        <p key={block.id} className={`mb-3 ${TEXT_CLASS}`}>
          <BlockDetail richText={block.paragraph.rich_text} />
        </p>
      ) : null;
    case 'table':
      return <BlockDetailTable key={block.id} block={block} />;
    case 'image':
      return <BlockDetailImage key={block.id} image={block.image.external} />;
    default:
      return null;
  }
};

// 블록 목록 렌더링: 연속된 글머리 기호 항목은 하나의 <ul>로 묶는다
const BlockRender = ({ blocks }: { blocks: ProjectDetailType[] }) => {
  const elements: React.ReactNode[] = [];
  let listItems: ProjectDetailType[] = [];

  const flushList = () => {
    if (listItems.length === 0) return;
    elements.push(
      <ul key={`list-${listItems[0].id}`} className="mb-4 ml-6 space-y-2 list-disc marker:text-indigo-400">
        {listItems.map(item => (
          <li key={item.id} className={TEXT_CLASS}>
            <BlockDetail richText={item.bulleted_list_item.rich_text} />
          </li>
        ))}
      </ul>,
    );
    listItems = [];
  };

  blocks.forEach(block => {
    if (block.type === 'bulleted_list_item') {
      listItems.push(block);
      return;
    }
    flushList();
    elements.push(renderBlock(block));
  });
  flushList();

  return <>{elements}</>;
};

export default BlockRender;
