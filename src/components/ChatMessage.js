const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-gray-900 border p-1 mb-1">
      <img
        alt="user"
        src="https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-outline-user-icon-png-image_1727916.jpg"
        className="h-8 w-8"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
