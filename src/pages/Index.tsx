import { useState } from "react";
import { AnimatedIntro } from "@/components/AnimatedIntro";
import { LoveQuestion } from "@/components/LoveQuestion";
import { MemoryPage } from "@/components/MemoryPage";
import { LoveResponse } from "@/components/LoveResponse";

const Index = () => {
  const [currentStep, setCurrentStep] = useState<"intro" | "memory" | "question" | "response">("intro");

  const handleIntroComplete = () => {
    setCurrentStep("memory");
  };

  const handleMemoryComplete = () => {
    setCurrentStep("question");
  };

  const handleYesResponse = () => {
    setCurrentStep("response");
  };

  switch (currentStep) {
    case "intro":
      return <AnimatedIntro onComplete={handleIntroComplete} />;
    case "memory":
      return <MemoryPage onContinue={handleMemoryComplete} />;
    case "question":
      return <LoveQuestion onYes={handleYesResponse} />;
    case "response":
      return <LoveResponse />;
    default:
      return <AnimatedIntro onComplete={handleIntroComplete} />;
  }
};

export default Index;
