export default function SectionHeader({ eyebrow, title, description, id }) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
