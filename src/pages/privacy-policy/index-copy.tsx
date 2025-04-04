import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import style from './index.module.scss';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('information-collection');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[id]'); // ✅ Correct selector
      let currentActiveSection = '';

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).clientHeight;
        const buffer = 200; // Buffer for early activation

        if (
          window.scrollY >= sectionTop - buffer &&
          window.scrollY < sectionTop + sectionHeight - buffer
        ) {
          currentActiveSection = section.getAttribute('id') || '';
        }
      });

      if (currentActiveSection && currentActiveSection !== activeSection) {
        setActiveSection(currentActiveSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  useEffect(() => {
    console.log(activeSection);
  }, [activeSection]);

  const navItems = [
    { id: 'information-collection', label: 'Information Collection' },
    { id: 'information-use', label: 'Use of Information' },
    { id: 'information-sharing', label: 'Information Sharing' },
    { id: 'data-security', label: 'Data Security' },
    { id: 'user-rights', label: 'Your Rights' },
    { id: 'cookies', label: 'Cookies Policy' },
    { id: 'policy-changes', label: 'Policy Changes' },
    { id: 'contact', label: 'Contact Us' },
  ];

  // Function to handle smooth scroll when clicking nav links
  const scrollToSection = (
    sectionId: string,
    e: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);

    if (section) {
      window.scrollTo({
        top: (section as HTMLElement).offsetTop - 100, // Adjust for better positioning
        behavior: 'smooth',
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <div>
      <div
        className={clsx(
          style.heroSection,
          'd-flex flex-column justify-content-center align-items-center',
        )}
      >
        <h1>Privacy Policy</h1>
        <p className="max-w-sm-40 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
          molestias. Saepe culpa vero, eveniet, ea provident nisi aliquam
          similique deleniti quos quo, praesentium fugiat doloribus neque
          exercitationem reprehenderit consectetur laborum. Voluptatem minima
          veniam placeat distinctio eveniet. Voluptas, ut cumque. Deserunt!
        </p>
      </div>

      <div className={clsx(style.policySection, 'container my-5')}>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className={style.navSticky}>
              <h4 className="mb-4">Contents</h4>
              <ul className={style.navList}>
                {navItems.map((item) => (
                  <li
                    key={item.id}
                    className={activeSection === item.id ? style.active : ''}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => scrollToSection(item.id, e)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-md-8">
            <div id="information-collection" className={style.policyBlock}>
              <h2>Information Collection</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                facilisi. Fusce in magna eu enim fermentum tempus. Praesent
                vehicula erat quis nulla tempor, eget volutpat diam dictum. Cras
                vel dapibus mauris, non efficitur ex.
              </p>
              <ul>
                <li>Personal information you provide directly</li>
                <li>Information collected automatically</li>
                <li>Information from third-party sources</li>
                <li>Location data and device information</li>
              </ul>
            </div>

            <div id="information-use" className={style.policyBlock}>
              <h2>Use of Information</h2>
              <p>
                Aliquam erat volutpat. Sed bibendum nisl vel velit facilisis
                convallis. Nullam aliquam, nisl eget convallis vestibulum, nibh
                nibh molestie turpis, vel hendrerit enim velit id justo. Integer
                iaculis dapibus nisl, eget vulputate turpis molestie quis.
              </p>
              <p>
                Maecenas tincidunt metus in consectetur gravida. Proin quis
                velit semper, tincidunt neque non, commodo neque. Aenean
                vestibulum justo ac turpis ultrices, non pharetra arcu
                vestibulum.
              </p>
            </div>

            <div id="information-sharing" className={style.policyBlock}>
              <h2>Information Sharing</h2>
              <p>
                Donec pulvinar vestibulum augue, eget molestie lacus ultrices
                ac. Pellentesque euismod sapien sit amet nisi dapibus, sit amet
                sagittis turpis bibendum. Proin quis justo vel dolor fringilla
                placerat ut id neque.
              </p>
              <p>We may share information with:</p>
              <ul>
                <li>Service providers and business partners</li>
                <li>Legal authorities when required by law</li>
                <li>Third parties with your explicit consent</li>
                <li>In connection with a merger, sale, or acquisition</li>
              </ul>
            </div>

            <div id="data-security" className={style.policyBlock}>
              <h2>Data Security</h2>
              <p>
                Integer sed lectus feugiat, interdum orci vel, venenatis arcu.
                Sed tempor magna metus, ut malesuada lacus auctor a. Praesent
                eget lectus ac ipsum posuere efficitur. Nulla faucibus non augue
                sed finibus.
              </p>
              <p>
                Mauris varius nunc a urna bibendum, non faucibus mi pharetra.
                Phasellus ultricies odio eget turpis consequat, in rhoncus est
                consequat. Nam condimentum interdum nibh, vel lacinia enim
                finibus id.
              </p>
            </div>

            <div id="user-rights" className={style.policyBlock}>
              <h2>Your Rights</h2>
              <p>
                Nullam congue, sem in ultrices vehicula, nisl massa vehicula
                tellus, ut molestie nunc nibh vel eros. Nunc ultrices metus et
                ipsum sodales, a varius odio tristique. Fusce imperdiet, nisi et
                hendrerit mattis, ante massa sagittis purus.
              </p>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to processing of your information</li>
              </ul>
            </div>

            <div id="cookies" className={style.policyBlock}>
              <h2>Cookies Policy</h2>
              <p>
                Ut ultricies massa sed tincidunt facilisis. Nulla facilisi.
                Praesent tempus eros vitae risus molestie, vel facilisis risus
                elementum. Suspendisse potenti. Aenean efficitur cursus lorem,
                non scelerisque nulla sollicitudin et.
              </p>
              <div className={style.cookieTypes}>
                <div className={style.cookieType}>
                  <h5>Essential Cookies</h5>
                  <p>Necessary for basic website functionality</p>
                </div>
                <div className={style.cookieType}>
                  <h5>Preference Cookies</h5>
                  <p>Remember your settings and preferences</p>
                </div>
                <div className={style.cookieType}>
                  <h5>Analytics Cookies</h5>
                  <p>Help us understand how visitors use our site</p>
                </div>
                <div className={style.cookieType}>
                  <h5>Marketing Cookies</h5>
                  <p>Used to deliver relevant advertisements</p>
                </div>
              </div>
            </div>

            <div id="policy-changes" className={style.policyBlock}>
              <h2>Policy Changes</h2>
              <p>
                Vivamus non enim at purus pellentesque dapibus. Aliquam erat
                volutpat. Sed euismod tortor sit amet sem ultrices, ac sagittis
                orci vestibulum. Suspendisse potenti. Aliquam in ipsum eget odio
                elementum facilisis.
              </p>
              <p>
                Mauris sed odio vel nisi rutrum commodo. Duis tristique urna ut
                mi iaculis, in pharetra lorem condimentum. Cras dignissim magna
                et tempus maximus.
              </p>
            </div>

            <div id="contact" className={style.policyBlock}>
              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at:
              </p>
              <div className={style.contactInfo}>
                <p>
                  <strong>Email:</strong> privacy@example.com
                </p>
                <p>
                  <strong>Address:</strong> 123 Privacy Street, Data City, 12345
                </p>
                <p>
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
