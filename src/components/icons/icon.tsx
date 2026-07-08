import type { LucideProps } from "lucide-react";

import { icons, type IconName } from "@/components/icons/icon-registry";

type IconProps = LucideProps & {
  name: IconName;
};

export function Icon({ name, ...props }: IconProps) {
  const Component = icons[name];

  return <Component aria-hidden="true" focusable="false" {...props} />;
}
