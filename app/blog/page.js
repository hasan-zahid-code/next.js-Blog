
import CategoryGrid from "./CategoryGrid.js"

export default function Blogs() {
    const array = [
        {title: "education", description:"education the way way", link:"/blog/education"},
        {title: "healthcare", description:"healthcare the way way", link:"/blog/healthcare"},
        {title: "entertainment", description:"entertainment the way way", link:"/blogs/entertaimnent"}
        ];

    return (
        <div>
            <div className="max-w-2xl mx-auto p-4">
                <h1 className="text-4xl font-bold mb-4 text-center">Blogs</h1>
                <div className="p-6 rounded-lg shadow-md">
                    <p className="text-lg text-center p-4">Explore the categories</p>
                </div>
            </div>

            <CategoryGrid categories={array} />


        </div>
    );
}
