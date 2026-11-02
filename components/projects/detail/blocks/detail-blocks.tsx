import { BlockText } from '@/types/project-detail';
import { getColorClassName } from '@/utils/color-mapping';
import classNames from 'classnames';
import Link from 'next/link';

interface Props {
  richText: BlockText[];
}

export const BlockDetail = ({ richText }: Props) => (
  <>
    {richText.map((text, index) => {
      const className = classNames(
        {
          'font-bold': text.annotations.bold,
          italic: text.annotations.italic,
          'line-through': text.annotations.strikethrough,
          underline: text.annotations.underline,
          'px-1.5 py-0.5 rounded font-mono text-[0.9em] bg-code': text.annotations.code,
        },
        text.annotations.code ? getColorClassName(text.annotations.color) : '',
      );

      // 본문 링크는 본문 글자와 구분되게 포인트 색 + 밑줄
      return text.href ? (
        <Link key={index} href={text.href} legacyBehavior>
          <a
            className={classNames(
              className,
              'text-main underline underline-offset-4 decoration-indigo-300 hover:decoration-current dark:decoration-indigo-500/60',
            )}
            target="_blank"
            rel="noopener noreferrer"
            style={{ whiteSpace: 'pre-line' }}
          >
            {text.plain_text}
          </a>
        </Link>
      ) : (
        <span key={index} className={className} style={{ whiteSpace: 'pre-line' }}>
          {text.plain_text}
        </span>
      );
    })}
  </>
);
