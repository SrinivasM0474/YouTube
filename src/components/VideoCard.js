import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-44 shadow-lg">
      <img src={thumbnails?.medium?.url} alt={title} />
      <ul>
        <li className="font-bold overflow-hidden text-ellipsis w-[100%] whitespace-nowrap">
          {title}
        </li>
        <li className="font-medium">{channelTitle}</li>
        <li>{statistics.viewCount}</li>
      </ul>
    </div>
  );
};

export const AdCard = ({ info }) => {
  return (
    <div className="p-1 m-2 border-2 border-red-800">
      <VideoCard info={info} />
      <h1 className="font-bold text-center">HOC</h1>
    </div>
  );
};
export default VideoCard;
