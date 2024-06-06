export default function CategoryBlock({ title, details, link }) {
    return (
        <div className="flex flex-col items-center text-center mx-5 my-5 p-5 border border-gray-200 rounded-lg shadow-md hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 transition-all">
            <a
                href={link}
                className="flex flex-col items-center w-full"
                target=""
                rel="noopener noreferrer"
            >
                <h2 className="mb-3 text-2xl font-semibold flex items-center">
                    {title}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none ml-2">
                        -&gt;
                    </span>
                </h2>
                <p className="text-sm opacity-50">
                    {details}
                </p>
            </a>
        </div>
    );
}
