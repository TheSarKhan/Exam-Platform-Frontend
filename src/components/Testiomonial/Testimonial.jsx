import "./Testimonial.css";

function Testimonial({ text, color, bgColor, img, top, left, right, bottom, author, weight, fontSize }) {
  return (
    <>
      <div className="testimonial" style={{ backgroundColor: bgColor }}>
        <div className="testimonial-content">
          <div className="row">
            <div className="col-lg-9">
              <div className="testiomial-text">
                <p style={{ color: color, fontWeight: weight ? weight : "normal", fontSize: fontSize && fontSize }}>{text}</p>
                {author && <p className="author" style={{ textAlign: "end", color: color }}>{author}</p>}
              </div>
            </div>
            <div className="col-lg-3 position-relative">
              <div className="img-container">
                <img src={img} alt="testimonial-image" style={{ top, right }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
