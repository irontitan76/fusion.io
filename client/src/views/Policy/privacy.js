import React, { Component } from 'react';

import Footer from 'components/Footer';
import ReportContent from 'components/Report/Content';
import ReportHeader from 'components/Report/Header';

class Privacy extends Component {
  render() {
    return <>
      <main>
        <ReportHeader
          divider
          variant='h1'>
          Privacy Policy
        </ReportHeader>
        <ReportContent body={`# Privacy Policy${'\n\n'}Effective date: December 20, 2018${'\n\n'}Fusion Industries ("us", "we", or "our") operates the http://localhost:8081 website (the "Service").${'\n\n'}This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. Our Privacy Policy  for Fusion Industries is based on the <a href="https://www.freeprivacypolicy.com/blog/sample-privacy-policy-template/">Free Privacy Policy Template Website</a>.${'\n\n'} We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from http://localhost:8081${'\n\n'}## Information Collection And Use${'\n\n'}We collect several different types of information for various purposes to provide and improve our Service to you.${'\n\n'}### Types of Data Collected${'\n\n'}#### Personal Data${'\n\n'}While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:${'\n\n'}<ul><li>Email address</li><li>First name and last name</li><li>Phone number</li><li>Address, State, Province, ZIP/Postal code, City</li><li>Cookies and Usage Data</li></ul>${'\n\n'}#### Usage Data${'\n\n'}`} />We may also collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.#### Tracking & Cookies Data${'\n\n'}We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.${'\n\n'}Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.${'\n\n'}You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.${'\n\n'}Examples of Cookies we use:${'\n\n'}<ul><li><strong>Session Cookies.</strong> We use Session Cookies to operate our Service.</li><li><strong>Preference Cookies.</strong> We use Preference Cookies to remember your preferences and various settings.</li><li><strong>Security Cookies.</strong> We use Security Cookies for security purposes.</li></ul>${'\n\n'}## Use of Data${'\n\n'}Fusion Industries uses the collected data for various purposes:${'\n\n'}<ul><li>To provide and maintain the Service</li><li>To notify you about changes to our Service</li><li>To allow you to participate in interactive features of our Service when you choose to do so</li><li>To provide customer care and support</li><li>To provide analysis or valuable information so that we can improve the Service</li><li>To monitor the usage of the Service</li><li>To detect, prevent and address technical issues</li></ul>${'\n\n'}

## Transfer Of Data${'\n\n'}
Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.${'\n\n'}
If you are located outside United States and choose to provide information to us, please note that we transfer the data, including Personal Data, to United States and process it there.${'\n\n'}
Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.${'\n\n'}
Fusion Industries will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.${'\n\n'}

## Disclosure Of Data${'\n\n'}

### Legal Requirements${'\n\n'}
Fusion Industries may disclose your Personal Data in the good faith belief that such action is necessary to:${'\n\n'}
<ul>
    <li>To comply with a legal obligation</li>
    <li>To protect and defend the rights or property of Fusion Industries</li>
    <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
    <li>To protect the personal safety of users of the Service or the public</li>
    <li>To protect against legal liability</li>
</ul>${'\n\n'}

## Security Of Data${'\n\n'}
The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.${'\n\n'}

## Service Providers${'\n\n'}
We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.${'\n\n'}
These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.${'\n\n'}



## Links To Other Sites${'\n\n'}
Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.${'\n\n'}
We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.${'\n\n'}


## Children's Privacy${'\n\n'}
Our Service does not address anyone under the age of 18 ("Children").${'\n\n'}
We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.${'\n\n'}


## Changes To This Privacy Policy${'\n\n'}
We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.${'\n\n'}
We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.${'\n\n'}
You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.${'\n\n'}


## Contact Us${'\n\n'}
If you have any questions about this Privacy Policy, please contact us:${'\n\n'}
<ul>
        <li>By email: privacy@fusion.com</li>
            <li>By visiting this page on our website: fusion.com/privacy</li>

        </ul>${'\n\n'}
      </main>
      <Footer />
    </>;
  }
}

export default Privacy;