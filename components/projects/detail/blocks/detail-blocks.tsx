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
      const commonProps = {
        key: index,
        className: classNames(
          {
            'font-bold': text.annotations.bold,
            italic: text.annotations.italic,
            'line-through': text.annotations.strikethrough,
            underline: text.annotations.underline,
            'px-1 bg-code': text.annotations.code,
          },
          text.annotations.code ? getColorClassName(text.annotations.color) : '',
        ),
      };

      return text.href ? (
        <Link {...commonProps} href={text.href} legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            {text.plain_text}
          </a>
        </Link>
      ) : (
        <span {...commonProps}>{text.plain_text}</span>
      );
    })}
  </>
);
