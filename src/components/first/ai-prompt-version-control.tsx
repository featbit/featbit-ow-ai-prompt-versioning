import Image from "next/image";

export function AiPromptVersionControl() {
  return (
    <div className="flex justify-between items-center container mx-auto p-2">
      <div className="flex flex-col lg:flex-row w-full gap-4 my-20">
        <div className="w-full lg:w-[40%] flex items-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold lg:pr-8">
              AI Prompts Online Version Control
            </h1>
            <p className="text-base text-muted-foreground mt-4 pr-10">
              AI prompts online version control is a streamlined process for
              managing different versions of AI prompts in real time. It lets
              you update, compare, and test prompts with actual users or data,
              ensuring you are always working with the best possible prompt for
              your goal. By treating your AI prompts like software, you can roll
              out changes and track improvements effortlessly, making sure you
              stay ahead in a world where AI evolves quickly.
            </p>
          </div>
        </div>
        <div className="w-full lg:flex-1">
          <Image
            src="/prompt-version-control-online/home/ff-version-control.png"
            alt="Streamlined process diagram showing the steps of prompt version control"
            width={800}
            height={600}
            className="w-full h-auto rounded-lg "
          />
        </div>
      </div>
    </div>
  );
}
