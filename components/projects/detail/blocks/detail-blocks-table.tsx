import { ProjectDetailType } from '@/types/project-detail';
import { BlockDetail } from './detail-blocks';

// 노션 표 블록: 행(table_row)은 서버에서 children으로 붙여서 내려온다
export const BlockDetailTable = ({ block }: { block: ProjectDetailType }) => {
  const rows = block.children ?? [];
  if (rows.length === 0) return null;

  const hasHeader = block.table?.has_column_header ?? false;
  const [headerRow, ...bodyRows] = hasHeader ? rows : [null, ...rows];

  return (
    <div className="mb-6 overflow-x-auto border rounded-xl border-zinc-200 dark:border-zinc-800">
      <table className="w-full text-sm text-left">
        {headerRow && (
          <thead className="bg-zinc-50 dark:bg-zinc-900">
            <tr>
              {headerRow.table_row?.cells.map((cell, index) => (
                <th key={index} scope="col" className="px-4 py-3 font-semibold text-zinc-900 dark:text-zinc-50">
                  <BlockDetail richText={cell} />
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
          {bodyRows.map(row => (
            <tr key={row?.id}>
              {row?.table_row?.cells.map((cell, index) => (
                <td key={index} className="px-4 py-3 align-top text-zinc-700 dark:text-zinc-300 tabular-nums">
                  <BlockDetail richText={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
