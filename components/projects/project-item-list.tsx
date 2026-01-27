import { useEffect, useState } from 'react';
import { ProjectResultType } from '@/types/projects';
import ProjectItem from './project-item';

interface Props {
  list: ProjectResultType[];
}

const ProjectItemList = ({ list }: Props) => {
  const [columnCount, setColumnCount] = useState(1);
  const reversedList = [...list].reverse();

  useEffect(() => {
    const updateColumnLayout = () => {
      const width = window.innerWidth;
      // sm: 1개 (< 640px), md: 2개 (640px ~ 1024px), lg: 3개 (>= 1024px)
      if (width < 640) {
        setColumnCount(1);
      } else if (width < 1024) {
        setColumnCount(2);
      } else {
        setColumnCount(3);
      }
    };

    updateColumnLayout();
    window.addEventListener('resize', updateColumnLayout);
    return () => window.removeEventListener('resize', updateColumnLayout);
  }, []);

  if (columnCount === 1) {
    return (
      <>
        {reversedList.map(item => <ProjectItem key={item.id} data={item} />)}
      </>
    );
  }

  if (columnCount === 2) {
    return (
      <>
        <div className="flex flex-col gap-8">
          {reversedList
            .filter((_, index) => index % 2 === 0)
            .map(item => (
              <ProjectItem key={item.id} data={item} />
            ))}
        </div>
        <div className="flex flex-col gap-8">
          {reversedList
            .filter((_, index) => index % 2 !== 0)
            .map(item => (
              <ProjectItem key={item.id} data={item} />
            ))}
        </div>
      </>
    );
  }

  // columnCount === 3
  return (
    <>
      <div className="flex flex-col gap-8">
        {reversedList
          .filter((_, index) => index % 3 === 0)
          .map(item => (
            <ProjectItem key={item.id} data={item} />
          ))}
      </div>
      <div className="flex flex-col gap-8">
        {reversedList
          .filter((_, index) => index % 3 === 1)
          .map(item => (
            <ProjectItem key={item.id} data={item} />
          ))}
      </div>
      <div className="flex flex-col gap-8">
        {reversedList
          .filter((_, index) => index % 3 === 2)
          .map(item => (
            <ProjectItem key={item.id} data={item} />
          ))}
      </div>
    </>
  );
};

export default ProjectItemList;
