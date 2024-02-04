import { teamData } from "@/common-data";
import MemberCard from "@/modules/home-page/home-team/member-card";
import { homeTeamWrapperCss, teamMembersContainerCss } from "@/modules/home-page/home-team/styles";
import { commonHeaderCss } from "@/styles/common-styles";

export default function HomeTeam() {
  const teamMapper = (member: (typeof teamData)[0], index: number) => {
    return <MemberCard {...member} key={index} />;
  };
  return (
    <div css={homeTeamWrapperCss}>
      <h2 css={commonHeaderCss("var(--color-font-default)")}>Meet Our Team</h2>
      <div css={teamMembersContainerCss}>{teamData.map(teamMapper)}</div>
    </div>
  );
}
