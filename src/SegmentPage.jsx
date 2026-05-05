import { useParams } from "react-router-dom";

export default function SegmentPage() {
  const { slug } = useParams();

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <h1 className="text-5xl font-black text-yellow-400 capitalize">
        {slug.replace("-", " ")}
      </h1>

      <p className="mt-6 text-white/70 max-w-2xl">
        This is the {slug.replace("-", " ")} segment of Double Dee Studios.
        More episodes and content coming soon.
      </p>
    </div>
  );
}