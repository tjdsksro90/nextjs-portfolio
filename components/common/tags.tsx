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
    <div className={wrap}>
      {tags.map(aTag => (
        <h6
          className={classNames(
            'px-2 py-1 rounded-md w-30',
            getBgColorClassName(aTag.color), // 동적 클래스 설정
          )}
          key={aTag.id}
        >
          {aTag.name}
        </h6>
      ))}
    </div>
  );
};

export default CommonTags;
