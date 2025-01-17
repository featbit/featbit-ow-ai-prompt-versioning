import Image from "next/image";

export function StreamlinedProcess() {
  return (
    <div className="flex justify-between items-center container mx-auto p-2">
      <div className="flex flex-col lg:flex-row w-full gap-4 my-20">
        <div className="w-full lg:w-1/2 lg:pr-8 lg:my-4 flex items-center">
          <Image
            src="/prompt-version-control-online/home/steamlinedprocess.png"
            alt="Streamlined process diagram showing the steps of prompt version control"
            width={800}
            height={600}
            className="w-full h-auto rounded-lg "
          />
        </div>
        <div className="w-full lg:flex-1">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">
              Streamlined Process
            </h2>
            <ul>
              <li className="text-base text-muted-foreground mt-4 pr-10">
                1. Create a New Prompt: Start by crafting a clear and focused prompt for your AI model. This might be a new idea or an improvement of an existing prompt.
              </li>
              <li className="text-base text-muted-foreground mt-4 pr-10">
                2. Roll Out to Specific Users: Use feature flags or similar tools to release the new prompt to a particular group of users, allowing you to test it without affecting everyone.
              </li>
              <li className="text-base text-muted-foreground mt-4 pr-10">
                3. Get Feedback: Collect results and reactions from the users or the AI’s output. This real-world data will guide your next steps.
              </li>
              <li className="text-base text-muted-foreground mt-4 pr-10">
                4. Evaluate Feedback: Measure the prompt’s performance—does it achieve the desired outcome? Are there errors or unexpected responses?
              </li>
              <li className="text-base text-muted-foreground mt-4 pr-10">
                5. Create a New Version: Based on your findings, refine or rewrite the prompt. Then repeat the process to continually improve your AI’s performance.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
