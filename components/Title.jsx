export const Title = (props) => {
  const { value, label, description } = props;

  return (
    <div className="text-center max-w-xl">
      <div className="uppercase font-bold text-primary-500 mb-8">{label}</div>
      <h2 className="text-2xl mb-4">{value}</h2>
      <p className="">{description}</p>
    </div>
  );
};
