export default function TagLabel({ tag, key }) {
  return (
    <div key={key} className="tag-label">
      {tag}
    </div>
  );
}
