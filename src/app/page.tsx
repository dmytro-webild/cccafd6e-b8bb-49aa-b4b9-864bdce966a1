"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="medium"
        sizing="medium"
        background="circleGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleApple
            navItems={[
              { name: "Home", id: "hero" },
              { name: "About", id: "about" },
              { name: "Services", id: "features" },
              { name: "Contact", id: "contact" },
            ]}
            brandName="TPH"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroOverlayTestimonial
            title="Electric solutions that spark results."
            description="Throttle Power Holdings is committed to providing top-notch electrical and security solutions. We deliver the highest quality, simplest and most efficient electrical and security solutions to industrial and commercial businesses."
            testimonials={[
              { name: "John M.", handle: "@tphclient", testimonial: "Excellent service and professional execution.", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E3GMKpMZfCTRoRLzz9j2hueGqE/uploaded-1779400125438-0e2abrl6.png?_wi=1", imageAlt: "User provided image" },
              { name: "Sarah L.", handle: "@corporatepartner", testimonial: "The best in electrical engineering maintenance.", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E3GMKpMZfCTRoRLzz9j2hueGqE/uploaded-1779400125438-beq7s0pz.png?_wi=1", imageAlt: "User provided image" },
              { name: "David K.", handle: "@industrialclient", testimonial: "Fast response times and high reliability.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/electrician-connecting-wires-work-inside-panel-engineer-with-tool_169016-68074.jpg?_wi=1", imageAlt: "User provided image" },
              { name: "Elena P.", handle: "@facilitymanager", testimonial: "Expertise and dedication to safety are unmatched.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/software-developer-walking-through-server-room-rows-lined-with-storage-infrastructure-rigs-it-worker_482257-132487.jpg?_wi=1", imageAlt: "User provided image" },
              { name: "Robert B.", handle: "@siteowner", testimonial: "Top-tier electrical and security solutions.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-gas-cylinder_23-2149290461.jpg?_wi=1", imageAlt: "User provided image" }
            ]}
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E3GMKpMZfCTRoRLzz9j2hueGqE/uploaded-1779400125438-0e2abrl6.png?_wi=2"
            avatars={[
              { src: "http://img.b2bpic.net/free-photo/smiley-woman-office-holding-tablet_23-2148356266.jpg", alt: "Client profile 1" },
              { src: "http://img.b2bpic.net/free-photo/friendly-successful-business-woman-posing-with-arms-crossed_74855-2813.jpg", alt: "Client profile 2" },
              { src: "http://img.b2bpic.net/free-photo/successful-senior-businesswoman-eyeglasses_1262-5856.jpg", alt: "Client profile 3" },
              { src: "http://img.b2bpic.net/free-photo/positive-shaved-head-male-dressed-grey-suit-dark-grey-background_613910-11352.jpg", alt: "Client profile 4" },
              { src: "http://img.b2bpic.net/free-photo/young-serious-businessman-looking-camera-meeting-headshot-portrait_1163-3923.jpg", alt: "Client profile 5" }
            ]}
            avatarText="Trusted by 500+ satisfied clients"
          />
        </div>

        <div id="about" data-section="about">
          <SplitAbout
            textboxLayout="split"
            useInvertedBackground={true}
            title="About Throttle Power Holdings"
            description="Being a sole proprietary enterprise, Throttle Power Holdings is dedicated to innovation and digital solutions. We offer a comprehensive range of electrical and security products to cater to diverse requirements."
            bulletPoints={[
              { title: "Trusted Relationships", description: "We build and maintain trusted relationships with all partners." },
              { title: "Daring to Differentiate", description: "We are market leaders who make bold decisions." },
              { title: "Collaborative Teamwork", description: "Teamwork and communication are at the forefront." }
            ]}
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E3GMKpMZfCTRoRLzz9j2hueGqE/uploaded-1779400125438-beq7s0pz.png?_wi=2"
            mediaAnimation="blur-reveal"
          />
        </div>

        <div id="features" data-section="features">
          <FeatureCardThree
            animationType="slide-up"
            textboxLayout="default"
            gridVariant="three-columns-all-equal-width"
            useInvertedBackground={false}
            features={[
              { title: "Electrical Installations", description: "Expert installations for high-voltage and low-voltage systems.", imageSrc: "http://img.b2bpic.net/free-photo/electrician-connecting-wires-work-inside-panel-engineer-with-tool_169016-68074.jpg?_wi=2" },
              { title: "Security Systems", description: "CCTV, Access Control, and comprehensive alarm systems.", imageSrc: "http://img.b2bpic.net/free-photo/software-developer-walking-through-server-room-rows-lined-with-storage-infrastructure-rigs-it-worker_482257-132487.jpg?_wi=2" },
              { title: "Fire Training", description: "Professional fire suppression training and maintenance services.", imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-gas-cylinder_23-2149290461.jpg?_wi=2" }
            ]}
            title="Our Specialized Services"
            description="We provide a wide range of engineering and security services for industrial, residential, and commercial sites."
          />
        </div>

        <div id="testimonial" data-section="testimonial">
          <TestimonialCardFive
            textboxLayout="default"
            useInvertedBackground={true}
            testimonials={[
              { id: "1", name: "John M.", date: "Oct 2023", title: "Director", quote: "Top quality electrical work.", tag: "Expert", avatarSrc: "http://img.b2bpic.net/free-photo/close-up-successful-entrepreneur_1098-3855.jpg", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E3GMKpMZfCTRoRLzz9j2hueGqE/uploaded-1779400125438-0e2abrl6.png?_wi=3" },
              { id: "2", name: "Sarah L.", date: "Nov 2023", title: "Manager", quote: "Very reliable and efficient.", tag: "Trusted", avatarSrc: "http://img.b2bpic.net/free-photo/confident-asian-leader-his-team-specialists_1262-4868.jpg", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E3GMKpMZfCTRoRLzz9j2hueGqE/uploaded-1779400125438-beq7s0pz.png?_wi=3" },
              { id: "3", name: "David K.", date: "Dec 2023", title: "CEO", quote: "They stand out from the rest.", tag: "Leader", avatarSrc: "http://img.b2bpic.net/free-photo/low-angle-businessmen-making-agreement_23-2148269333.jpg", imageSrc: "http://img.b2bpic.net/free-photo/electrician-connecting-wires-work-inside-panel-engineer-with-tool_169016-68074.jpg?_wi=3" },
              { id: "4", name: "Elena P.", date: "Jan 2024", title: "Admin", quote: "Excellent security integration.", tag: "Pro", avatarSrc: "http://img.b2bpic.net/free-photo/man-with-arms-crossed-working-warehouse_23-2148923083.jpg", imageSrc: "http://img.b2bpic.net/free-photo/software-developer-walking-through-server-room-rows-lined-with-storage-infrastructure-rigs-it-worker_482257-132487.jpg?_wi=3" },
              { id: "5", name: "Robert B.", date: "Feb 2024", title: "Partner", quote: "Great communication throughout.", tag: "Partner", avatarSrc: "http://img.b2bpic.net/free-photo/solar-panels-industry-technician-high-tech-factory-inspection-quality-control-production_482257-132256.jpg", imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-gas-cylinder_23-2149290461.jpg?_wi=3" }
            ]}
            title="What Our Partners Say"
            description="Building lasting value through professional excellence and engineering success."
          />
        </div>

        <div id="metrics" data-section="metrics">
          <MetricCardFourteen
            useInvertedBackground={false}
            title="Our Impact & Success"
            tag="Performance Stats"
            metrics={[
              { id: "m1", value: "100%", description: "Customer Commitment" },
              { id: "m2", value: "2019", description: "Founded Year" },
              { id: "m3", value: "5+", description: "Expert Departments" }
            ]}
            metricsAnimation="slide-up"
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqDouble
            textboxLayout="default"
            useInvertedBackground={true}
            faqs={[
              { id: "f1", title: "Do you provide maintenance?", content: "Yes, we handle ongoing maintenance for all electrical and security installations." },
              { id: "f2", title: "What industries do you serve?", content: "We serve industrial, commercial, and residential clients with expert care." },
              { id: "f3", title: "How do we book training?", content: "Contact us via the form or email to book your fire safety training session." }
            ]}
            title="Common Questions"
            description="Learn more about our services and engineering capabilities."
            faqsAnimation="blur-reveal"
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactCenter
            useInvertedBackground={false}
            background={{ variant: "gradient-bars" }}
            tag="Reach Out"
            title="Contact Us Today"
            description="Get in touch with Throttle Power Holdings for your electrical and security needs."
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseReveal
            logoText="TPH (PTY) LTD"
            columns={[
              {
                title: "Company",                items: [{ label: "About", href: "#about" }, { label: "Services", href: "#features" }]
              },
              {
                title: "Contact",                items: [{ label: "Email", href: "mailto:throttlepoweholdings@gmail.com" }, { label: "Call Us", href: "tel:+26776755001" }]
              }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}