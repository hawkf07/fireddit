import { FC } from "react";
import {
  FaArrowDown,
  FaArrowUp,
  FaBookmark,
  FaComment,
  FaUser,
} from "react-icons/fa";
import { PrimaryButton, TersierButton } from "./Button";

export type PostCard = {
  likeCount: number;
  title: string;
  commentCount: number;
  postBody: string;
  username: string | undefined | null;
  userId: string;
  tags?: string[];
  postDate: string;
  updatedAt: string;
};

export const PostCard: FC<PostCard> = ({
  commentCount,
  likeCount,
  postBody,
  title,
  userId,
  username,
  postDate,
  updatedAt,
  tags,
}) => {
  return (
    <>
      <div className="flex  cursor-pointer gap-1 rounded-md border bg-white shadow">
        <div className="flex   flex-col items-center justify-center gap-5 bg-gray-200 p-2 text-xl text-gray-600">
          <FaArrowUp />
          <div>{likeCount}</div>
          <FaArrowDown />
        </div>
        <div className="flex flex-1 flex-col gap-2 p-4 md:p-3">
          <header>
            <h1>{title}</h1>
          </header>

          <div className="flex flex-col gap-2">
            <p>{postBody}</p>
            <div className="flex place-items-center gap-3">
              <FaComment className="text-xl" />
              <p>{commentCount} Comments</p>

              <FaBookmark />
              <p>Save</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FaUser className="h-8 w-8 rounded-full border p-1 shadow" />
            <p className="text-blue-400">{username}</p>
            <p className="text-yellow-400">{postDate}</p>
          </div>
        </div>
      </div>
    </>
  );
};
