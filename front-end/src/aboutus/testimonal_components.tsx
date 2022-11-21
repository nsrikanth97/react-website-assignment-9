function TestimonalCard(review: {
  url: string;
  title: string;
  descrption: string;
  altText: string;
  key: number;
}) {
  return (
    <>
      <div className="col-sm-7 col-md-5 col-xs-10">
        <div className="card">
          <img
            className="card-img-top"
            src={review.url}
            alt={review.altText}
          />
          <div className="card-body">
            <h5 className="card-title">{review.title}</h5>
            <p className="card-text">
              {review.descrption}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default TestimonalCard;
