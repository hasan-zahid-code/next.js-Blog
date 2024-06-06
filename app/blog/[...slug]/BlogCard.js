export default function BlogCard({ title, content, link }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {content}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a href={link} className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold text-white-700 mr-2 mb-2">
          Read More
        </a>
      </div>
    </div>
  );
}