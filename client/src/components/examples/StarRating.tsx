import StarRating from '../StarRating';

export default function StarRatingExample() {
  return (
    <div className="p-8 bg-background min-h-screen">
      <div className="max-w-lg mx-auto space-y-6">
        <StarRating rating={6} />
        <StarRating rating={5} showTooltip={false} />
        <StarRating rating={4} maxRating={5} />
      </div>
    </div>
  );
}