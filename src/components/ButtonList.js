import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "All1",
  "Gaming1",
  "Songs1",
  "Live1",
  "Soccer1",
  "Cricket1",
  "Cooking1",
];

const ButtonList = () => {
  return (
    <div className="flex overflow-x-auto">
      {list.map((name) => {
        return <Button key={name} name={name} />;
      })}
    </div>
  );
};

export default ButtonList;
