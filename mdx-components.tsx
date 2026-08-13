import type { MDXComponents } from "mdx/types";
import { AcronymDecoder } from "@/components/course/AcronymDecoder";
import { Callout } from "@/components/course/Callout";
import { Figure } from "@/components/course/Figure";
import { LearningObjectives } from "@/components/course/LearningObjectives";
import { Lesson } from "@/components/course/Lesson";
import { ModuleHeader } from "@/components/course/ModuleHeader";
import { ModuleNav } from "@/components/course/ModuleNav";
import { Quiz } from "@/components/course/Quiz";
import { SoundSmart } from "@/components/course/SoundSmart";

const courseComponents = {
  AcronymDecoder,
  Callout,
  Figure,
  LearningObjectives,
  Lesson,
  ModuleHeader,
  ModuleNav,
  Quiz,
  SoundSmart,
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...courseComponents,
    ...components,
  };
}
