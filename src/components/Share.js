import {
    EmailShareButton,
    FacebookShareButton,
    InstapaperShareButton,
    PinterestShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,

    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    WhatsappIcon,
    PinterestIcon,
    EmailIcon,
    InstapaperIcon,
    LinkedinShareButton,
    TelegramIcon,
} from "react-share";
import { useLocation } from 'react-router';
//import { useParams } from 'react-router-dom';


function Share() {

    const path = useLocation();

    const base = "https://debkantamondal.me/visuals/#";

    

    return (
        <div>
            <FacebookShareButton
                url={base + path.pathname}
                quote={"Your Friend share you Blog No : Hello From Debkanta! This is My Photo Appreciation Blog. Read and Share More...."}
                hashtag="#debkanta_mondal_photo_blog"
            >
                <FacebookIcon size={36} />
            </FacebookShareButton>
            <WhatsappShareButton
                url={base + path.pathname}
                quote={"Hello From Debkanta! This is My Photo Appreciation Blog. Read and Share More...."}
                hashtag="#debkanta_mondal_photo_blog"
            >
                <WhatsappIcon size={36} />
            </WhatsappShareButton>
            <InstapaperShareButton
                url={base + path.pathname}
                quote={"Hello From Debkanta! This is My Photo Appreciation Blog. Read and Share More...."}
                hashtag="#debkanta_mondal_photo_blog">
                <InstapaperIcon size={36}></InstapaperIcon>
            </InstapaperShareButton>
            <EmailShareButton
                url={base + path.pathname}
                quote={"Hello From Debkanta! This is My Photo Appreciation Blog. Read and Share More...."}
                hashtag="#debkanta_mondal_photo_blog">
                <EmailIcon size={36}></EmailIcon>
            </EmailShareButton>
            <PinterestShareButton
                url={base + path.pathname}
                quote={"Hello From Debkanta! This is My Photo Appreciation Blog. Read and Share More...."}
                hashtag="#debkanta_mondal_photo_blog">
                <PinterestIcon size={36}></PinterestIcon>
            </PinterestShareButton>
            <LinkedinShareButton
                url={base + path.pathname}
                quote={"Hello From Debkanta! This is My Photo Appreciation Blog. Read and Share More...."}
                hashtag="#debkanta_mondal_photo_blog">
                <LinkedinIcon size={36}></LinkedinIcon>
            </LinkedinShareButton>
            <TwitterShareButton
                url={base + path.pathname}
                quote={"Hello From Debkanta! This is My Photo Appreciation Blog. Read and Share More...."}
                hashtag="#debkanta_mondal_photo_blog">
                <TwitterIcon size={36}></TwitterIcon>
            </TwitterShareButton>
            <TelegramShareButton
                url={base + path.pathname}
                quote={"Hello From Debkanta! This is My Photo Appreciation Blog. Read and Share More...."}
                hashtag="#debkanta_mondal_photo_blog">
                <TelegramIcon size={36}></TelegramIcon>
            </TelegramShareButton>
        </div>
    )
}

export default Share;