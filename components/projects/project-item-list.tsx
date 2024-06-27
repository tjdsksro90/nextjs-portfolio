import { useEffect, useState } from 'react';
import { ProjectResultType } from '@/types/projects';
import ProjectItem from './project-item';

interface Props {
  list: ProjectResultType[];
}

const ProjectItemList = ({ list }: Props) => {
  const [isSingleColumn, setIsSingleColumn] = useState(false);

  useEffect(() => {
    const updateColumnLayout = () => {
      setIsSingleColumn(window.innerWidth < 768);
      const shouldBeSingleColumn = window.innerWidth < 768;
      if (isSingleColumn !== shouldBeSingleColumn) {
        setIsSingleColumn(shouldBeSingleColumn);
      }
    };

    updateColumnLayout();
    window.addEventListener('resize', updateColumnLayout);
    return () => window.removeEventListener('resize', updateColumnLayout);
  }, [isSingleColumn]);

  return (
    <>
      {isSingleColumn ? (
        list.map(item => <ProjectItem key={item.id} data={item} />)
      ) : (
        <>
          <div className="flex flex-col gap-8">
            {list
              .filter((_, index) => index % 2 === 0)
              .map(item => (
                <ProjectItem key={item.id} data={item} />
              ))}
          </div>
          <div className="flex flex-col gap-8">
            {list
              .filter((_, index) => index % 2 !== 0)
              .map(item => (
                <ProjectItem key={item.id} data={item} />
              ))}
          </div>
        </>
      )}
    </>
  );
};

export default ProjectItemList;
