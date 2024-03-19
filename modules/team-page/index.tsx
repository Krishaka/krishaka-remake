import { teamData } from "@/common-data";
import CompWrapper from "@/components/comp-wrapper";
import { teamMapper } from "@/modules/home-page/home-team";
import { teamMembersContainerCss } from "@/modules/home-page/home-team/styles";
import { commonHeaderCss, commonPageContainerCss, commonPageWrapperCss } from "@/styles/common-styles";

export default function TeamPageModule() {
  return (
    <CompWrapper
      tag="div"
      page="Team"
      wrapperClassName="page"
      wrapperStyles={commonPageWrapperCss}
      innerElemExtraStyles={commonPageContainerCss}
    >
      <h1 css={commonHeaderCss()}>Our Team</h1>

      <div css={teamMembersContainerCss}>{teamData.map(teamMapper)}</div>
    </CompWrapper>
  );
}
