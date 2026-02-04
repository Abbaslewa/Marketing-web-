import { Footer } from "flowbite-react";
import {
  BsGithub,
  BsLinkedin,
  BsEnvelope,
  BsWhatsapp,
  BsTelegram,
} from "react-icons/bs";

import styles from "./Footer.module.css"; // Import CSS module

function FooterComponent() {
  return (
    <Footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.icons}>
          <Footer.Icon
            href="https://www.linkedin.com/in/abbas-omer-07ab13380/"
            icon={BsLinkedin}
          />
          <Footer.Icon href="https://github.com/abbaslewa" icon={BsGithub} />
          <Footer.Icon
            href="mailto:abbasomerhassn@gmail.com"
            icon={BsEnvelope}
          />
          <Footer.Icon href="https://github.com/abbaslewa" icon={BsTelegram} />
          <Footer.Icon
            href="https://web.whatsapp.com/"
            icon={BsWhatsapp}
          />
        </div>
      </div>
    </Footer>
  );
}

export default FooterComponent;

/* Footer.module.css */
