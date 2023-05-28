import Head from "next/head";
import { Navbar } from "~/components/Navbar";
import { useForm } from "react-hook-form";
import { PrimaryButton, TersierButton } from "~/components/Button";
import { useState } from "react";
import { api } from "~/utils/api";
import { useSession } from "next-auth/react";
import { z } from "zod";
import { postZodType } from "~/utils/types";
export default function() {
  const [inputValues, setInputValues] = useState({});
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const session = useSession();
  const onSubmit = (data: z.infer<typeof postZodType>) =>
    createPostMutation.mutate({
      body: data.body,
      title: data.title,
      userId: session?.data?.user.id,
    });
  const createPostMutation = api.fireReddit.createPostForUser.useMutation();
  return (
    <>
      <Head>
        <title>Create Post</title>
        <meta name="description" content="create post" />
      </Head>

      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex flex-col items-center justify-center">
          <header>
            <h1>Create Posts</h1>
          </header>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-1"
          >
            <div className="flex items-center  rounded-md border bg-white p-1 shadow focus:shadow-md">
              <input
                type="text"
                className="p-1 focus:outline-none"
                placeholder="title"
                {...register("title", { required: true, maxLength: 300 })}
              />
            </div>
            <div>
              <textarea
                className="w-full rounded-md border bg-white p-2 shadow focus:shadow-md focus:outline-none"
                placeholder="text"
                {...register("body")}
              />
            </div>
            <PrimaryButton type="submit">Submit</PrimaryButton>
            {errors.title && <p className="text-danger">Title Is required</p>}
          </form>
        </main>
      </div>
    </>
  );
}
