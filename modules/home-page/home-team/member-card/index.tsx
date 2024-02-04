import { teamData } from "@/common-data";
import Link from "next/link";
import { BsEnvelope, BsInstagram } from "react-icons/bs";
import ImageWrapper from "@/components/image-wrapper";
import {
  memberImgWrapperCss,
  memberInfoContainerCss,
  memberProfileImgCss,
  memberSocialsWrapperCss,
  teamMemberCardCss
} from "@/modules/home-page/home-team/member-card/styles";

export default function MemberCard(prop: (typeof teamData)[0]) {
  const { imageUrl, insta, mail, name, position, link } = prop;

  return (
    <div css={teamMemberCardCss}>
      <div css={memberImgWrapperCss}>
        <ImageWrapper alt={name} src={imageUrl} extraStyles={memberProfileImgCss} link={link} title="View Profile" />
      </div>
      <div>
        <div css={memberInfoContainerCss}>
          <h3 className="member-name">{name}</h3>
          <span className="member-position">{position}</span>
        </div>
        <div css={memberSocialsWrapperCss}>
          <Link href={insta} className="member-social-link" title={name + "'s Instagram Page"}>
            <BsInstagram />
          </Link>
          <Link href={mail} className="member-social-link" title={name + "'s mail"}>
            <BsEnvelope />
          </Link>
        </div>
      </div>
    </div>
  );
}
