import "./header.css";

export function Testimonial({ name, role, content }) {
  return (
    <div className="testimonial">
      <p className="testimonial-text">"{content}"</p>
      <div className="testimonial-author">
        <div className="author-avatar">{name.charAt(0)}</div>
        <div>
          <div className="author-name">{name}</div>
          <div className="author-role">{role}</div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;