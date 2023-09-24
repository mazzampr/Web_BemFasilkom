import { useRouter } from "next/router";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const router = useRouter();

  return (
    <>
      <img src="/top-wave.svg" alt="" className={styles.top_wave} />
      <footer className={styles.footer}>
        <div className={styles.home_footer}>
          <div className={styles.home_footer__left_div}>
            <div className={styles.home_footer__left_div_content}>
              <img src="/icon/map.png" alt="" className={styles.map_icon} />
              <div>
                <p className={styles.temukan_kami}>Temukan Kami</p>
                <div className={styles.address}>
                  <p>Gedung Giri Santika UPN &quot;Veteran&quot; Jawa Timur</p>
                  <p>Rungkut Madya Surabaya, Indonesia</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.home_footer__right_div}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.1724491590894!2d112.78587181472297!3d-7.3345212947069225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fab8185713b7%3A0x384fa5c9e0c009e1!2sSekretariat%20BEM%20FIK!5e0!3m2!1sen!2sid!4v1636928596335!5m2!1sen!2sid"
              style={{ border: 0, height: "100%", width: "100%" }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <p className={styles.copyright}>
          BEM Fakultas Ilmu Komputer UPN &quot;Veteran&quot; Jawa Timur &copy;
          2021
        </p>
      </footer>
    </>
  );
};
