import Breadcrumbs from "./breadcrumb";
import CategoriesPage from "./CategoriesPage";
export default function blog({ params }) {
  const posts = [
    { title: `${params.slug[0]} is Important`, content: "This is the content of blog post .", link: `${params.slug[0]}/${params.slug[0]}-is-important` },
    { title: `${params.slug[0]} is Must`, content: "This is the content of blog post .", link: `${params.slug[0]}/${params.slug[0]}-is-must` },
    { title: `${params.slug[0]} is Necessary`, content: "This is the content of blog post.", link: `${params.slug[0]}/${params.slug[0]}-is-necessary` },
  ];
console.log(params.slug[1])
  const formatSlug = (slug) => {
    return slug.replace(/-/g, ' ').toUpperCase();
  };


  if (params.slug.length === 1) {
    return(
      
    <div className="max-w-2xl mx-auto p-4">
      
        <h1 className="text-4xl font-bold mb-4 text-center">Viewing Blogs for Category: {params.slug[0]}</h1>
        <Breadcrumbs slug={params.slug} />
        <div className="p-6 rounded-lg shadow-md">
          <p className="text-lg text-center">Lorem Ipsum Dolor amet</p>
        </div>
        <CategoriesPage posts={posts} />
      </div>
    )} else if (params.slug.length === 2) {
    
    return (
      
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4 text-center">Blog for Category: {params.slug[0]}</h1>
        <Breadcrumbs slug={params.slug} />
        <div className="p-6 rounded-lg shadow-md">
          
          <h1 className="py-8 text-4xl">{formatSlug(params.slug[1])}</h1>
          <p className="text-md py-6 text-center">{formatSlug(params.slug[1])} amet Lorem Ipsum Dolor amet Lorem Ipsum Dolor amet Lorem Ipsum Dolor amet Lorem Ipsum Dolor amet</p>
        </div>
      </div>
    )
  }
  
}
