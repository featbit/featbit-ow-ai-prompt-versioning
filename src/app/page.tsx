import { Header } from "@/components/first/header";
import { Playground } from "@/components/first/playground";
import { AiPromptVersionControl } from "@/components/first/ai-prompt-version-control";
import { StreamlinedProcess } from "@/components/first/streamlined-process";
import { WhyImportant } from "@/components/first/why-important";
import { Footer } from "@/components/first/footer";

export default function Home() {
  return (
    <main>
      <Header />
      {/* <Playground /> */}
      <AiPromptVersionControl />
      <StreamlinedProcess />
      <WhyImportant />
      <Footer />
    </main>
  );
}
