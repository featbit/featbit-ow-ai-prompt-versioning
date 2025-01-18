import Image from "next/image";

export function WhyImportant() {
  return (
    <div className="flex justify-between items-center container mx-auto p-2">
      <div className="flex flex-col lg:flex-row w-full gap-4 my-20">
        <div className="w-full lg:w-[55%]">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">
              Why It’s Important in the Future AI Era
            </h2>
            <p className="text-base text-muted-foreground mt-4 pr-10">
              As AI becomes more powerful and widespread, having a reliable way
              to update and test prompts in real time is crucial. AI prompts
              online version control helps you adapt quickly to new data, user
              needs, and changing market conditions. By continuously refining
              how you interact with AI systems, you’ll stay innovative,
              competitive, and ready for whatever comes next in our fast-paced
              tech landscape.
            </p>
          </div>
        </div>
        <div className="w-full lg:flex-1">
          <Image
            src="/prompt-version-control-online/home/evaluator.png"
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
