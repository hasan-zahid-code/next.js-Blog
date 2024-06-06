import CategoryBlock from "./categoryBlock.js"
export default function CategoryGrid({ categories }) {
    return (
        <div className="flex flex-wrap justify-center">
            {categories.map((category, index) => (
                <CategoryBlock 
                    key={index}
                    title={category.title}
                    details={category.description}
                    link={category.link}
                />
            ))}
        </div>
    );
}
