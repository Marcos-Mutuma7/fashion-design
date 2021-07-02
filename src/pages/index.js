import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import { VideoProvider } from 'contexts/video/video.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import CtaTwo from 'sections/cta-two';
import CtaThree from 'sections/cta-three';
import Gallery from 'sections/gallery';
import Blog from 'sections/blog'


export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <VideoProvider>
          <Layout>
            <SEO
              description="Collection of free top of the line startup landing templates built using react/ next js. Free to download, simply edit and deploy! Updated weekly!"
              title="Startup Online Course Landing"
            />
            <Banner />
            <CtaThree />
            <Gallery/>
            <CtaTwo />
            <Blog/>
          </Layout>
        </VideoProvider>
      </StickyProvider>
    </ThemeProvider>
  );
}