export default function Breadcrumbs({ slug }) {
    const createBreadcrumbs = (slugArray) => {
      const breadcrumbItems = [
        { label: 'Blog', href: '/blog' }
      ];
      let href = '/blog/';
  
      slugArray.forEach((slugPart, index) => {
        href += `${slugPart}/`;
        breadcrumbItems.push({
          label: slugPart.replace(/-/g, ' '), // Replace hyphens with spaces for readability
          href: index === slugArray.length - 1 ? null : href // Last breadcrumb should not be a link
        });
      });
  
      return breadcrumbItems;
    };
  
    const breadcrumbItems = createBreadcrumbs(slug);
  
    return (
      <nav className="flex text-gray-700">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          {breadcrumbItems.map((item, index) => (
            <li key={index} className="inline-flex items-center">
              {item.href ? (
                <div className="flex items-center">
                  <a href={item.href} className="text-sm font-medium text-gray-700 hover:text-gray-900">
                    {item.label}
                  </a>
                  <svg
                    className="w-4 h-4 text-gray-400 mx-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.293 14.707a1 1 0 010-1.414L13.586 9 9.293 4.707a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              ) : (
                <span className="text-sm font-medium text-gray-500">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    );
  }
  