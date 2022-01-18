const links = [
  {
    content: "020-1203777",
  },
  {
    content: "support@j-fab.net",
  },
];

export const TopBar = () => {
  return (
    <div className="h-10 w-full bg-primary-500">
      <div className="h-full container mx-auto px-2 flex items-center justify-end space-x-4">
        {links.map((link, key) => (
          <a key={key} className="text-white">
            {link.content}
          </a>
        ))}
      </div>
    </div>
  );
};
