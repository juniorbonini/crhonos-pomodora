import type { FlatListProps } from "../../types/FlatList/flat-list";

export function FlatList<T>({
  data,
  renderItem,
  keyExtractor,
  emptyComponent,
}: FlatListProps<T>) {
  if (data.length === 0) {
    return <div>{emptyComponent}</div>;
  }
  return (
    <div>
      {data.map((item, index) => (
        <div key={keyExtractor ? keyExtractor(item, index) : index.toString()}>
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
}
