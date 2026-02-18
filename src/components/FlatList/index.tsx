import type { FlatListProps } from "../../types/FlatList/flat-list";

export function FlatList<T>({
  data,
  renderItem,
  keyExtractor,
}: FlatListProps<T>) {
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
