const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex border-1 shadow-2xl shadow-inner bg-gray-100 p-2 items-center mb-2">
      <img
        alt="user"
        src="https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-outline-user-icon-png-image_1727916.jpg"
        className="w-10 h-10 mr-5"
      />
      <div>
        <p>
          <b>Name:</b> {name}
        </p>
        <p>
          <b>Comment:</b> {text}
        </p>
      </div>
    </div>
  );
};

export default Comment;
