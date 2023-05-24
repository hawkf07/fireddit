import { FC } from "react";
import { FaArrowDown, FaArrowUp, FaComment } from "react-icons/fa";
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
      <div className="flex  gap-1 rounded-md border bg-white shadow">
        <div className="flex   flex-col items-center justify-center gap-5 bg-gray-200 p-2 text-xl text-gray-600">
          <FaArrowUp />
          <div>{likeCount}</div>
          <FaArrowDown />
        </div>
        <div className="flex flex-1 flex-col gap-2 p-4 md:p-3">
          <header>
            <h1>{title}</h1>
            <div>
              <h2>{username}</h2>
            </div>
          </header>

          <div className="flex flex-col gap-2">
            <p>{postBody}</p>
            <div className="flex gap-2">
              <FaComment className="text-xl" />
              <p>{commentCount}</p>
            </div>
            <div>
              <TersierButton>Show more</TersierButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
