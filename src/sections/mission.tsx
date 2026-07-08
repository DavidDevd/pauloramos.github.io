import { missionData } from "@/data/mission";
import { MissionSection } from "@/sections/mission-section";

export function Mission() {
  return <MissionSection data={missionData} />;
}
