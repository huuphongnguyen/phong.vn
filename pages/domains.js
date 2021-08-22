import Container from "../components/Container";
import NextLink from "next/link";
import LetterByPhong from "../components/elements/LetterByPhong";
import useTranslate from "next-translate/useTranslation";
import DomainsElement from "../components/elements/DomainsElement";
import { Active, Hodl } from "../components/elements/StatusBadge";

export default function Domains() {
  const { t } = useTranslate("domains");
  return (
    <Container>
      <div className="items-start mx-auto w-full max-w-3xl space-y-4">
        <div className="inline-flex items-center space-x-1 text-black dark:text-white text-base uppercase font-sourcecodepro mt-5">
          <NextLink href="/">
            <a>
              <p className="text-gray-300 dark:text-gray-600 hover:text-black dark:hover:text-white">
                FRONT-PAGE
              </p>
            </a>
          </NextLink>
          <p>/</p>
          <h1>Domains</h1>
        </div>
        <div className="text-black dark:text-white space-y-20">
          <LetterByPhong letterNumber="#0006">
            <p>{t("domains-letter")}</p>
          </LetterByPhong>
          <div className="space-y-4">
            <DomainsElement
              domain="phong.vn"
              registeredday="20200908"
              visiturl="https://phong.vn"
              qrcodeimg="/static/domains-phong-vn-qr-code.png"
            >
              <Active />
            </DomainsElement>
            <DomainsElement
              domain="theuvitinhanhxuyen.com"
              registeredday="20170109"
              visiturl="https://phong.vn"
              qrcodeimg="/static/domains-theuvitinhanhxuyen-com-qr-code.png"
            >
              <Active />
            </DomainsElement>
            <DomainsElement
              domain="emb.vn"
              registeredday="20190823"
              visiturl="https://emb.vn"
              qrcodeimg="/static/domains-emb-vn-qr-code.png"
            >
              <Active />
            </DomainsElement>
            <DomainsElement
              domain="change.vn"
              registeredday="20201109"
              visiturl="https://change.vn"
              qrcodeimg="/static/domains-change-vn-qr-code.png"
            >
              <Active />
            </DomainsElement>
            <DomainsElement
              domain="nft.vn"
              registeredday="20210221"
              visiturl="https://nft.vn"
              qrcodeimg="/static/domains-nft-vn-qr-code.png"
            >
              <Hodl />
            </DomainsElement>
            <DomainsElement
              domain="blvck.vn"
              registeredday="20190516"
              visiturl="https://blvck.vn"
              qrcodeimg="/static/domains-blvck-vn-qr-code.png"
            >
              <Hodl />
            </DomainsElement>
            <DomainsElement
              domain="blvck.com.vn"
              registeredday="20200513"
              visiturl="https://blvck.com.vn"
              qrcodeimg="/static/domains-blvck-com-vn-qr-code.png"
            >
              <Hodl />
            </DomainsElement>
            <DomainsElement
              domain="anonymous.vn"
              registeredday="20200404"
              visiturl="https://anonymous.vn"
              qrcodeimg="/static/domains-anonymous-vn-qr-code.png"
            >
              <Hodl />
            </DomainsElement>
            <DomainsElement
              domain="gus9.com"
              registeredday="20191018"
              visiturl="https://gus9.com"
              qrcodeimg="/static/domains-gus9-com-qr-code.png"
            >
              <Hodl />
            </DomainsElement>
          </div>
        </div>
      </div>
    </Container>
  );
}
