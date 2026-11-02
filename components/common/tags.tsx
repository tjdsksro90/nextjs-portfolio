import { getBgColorClassName } from '@/utils/bg-color-mapping';
import classNames from 'classnames';

interface Props {
  tags: {
    id: string;
    name: string;
    color: string;
  }[];
  wrap: string;
}

const CommonTags = ({ tags, wrap }: Props) => {
  return (
    <ul className={wrap}>
      {tags.map(tag => (
        <li
          className={classNames(
            'px-2 py-0.5 rounded-md text-xs font-medium text-zinc-700 dark:text-zinc-200',
            getBgColorClassName(tag.color), // 동적 클래스 설정
          )}
          key={tag.id}
        >
          {tag.name}
        </li>
      ))}
    </ul>
  );
};

export default CommonTags;
